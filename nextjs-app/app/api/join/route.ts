import { NextResponse } from 'next/server'
import { validateJoin } from '@/lib/join'

const MAX_BYTES = 8_000
const SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbzwS5F36cS8behn9sgMW-tfEBiRtcY2zzlfUqbhGu62gkwxNtgCuKSawPD0W-v3bOhZsg/exec'

export async function POST(request: Request) {
  const length = Number(request.headers.get('content-length') || 0)
  if (length > MAX_BYTES) {
    return NextResponse.json({ error: 'The registration is too large.' }, { status: 413 })
  }

  let body: unknown
  try {
    const raw = await request.text()
    if (raw.length > MAX_BYTES) {
      return NextResponse.json({ error: 'The registration is too large.' }, { status: 413 })
    }
    body = JSON.parse(raw)
  } catch {
    return NextResponse.json({ error: 'The registration could not be read.' }, { status: 400 })
  }

  const result = validateJoin(body)
  if (!result.ok) {
    return NextResponse.json({ error: result.error }, { status: 400 })
  }
  if (result.spam) {
    return NextResponse.json({ ok: true })
  }

  try {
    const response = await fetch(SCRIPT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain' },
      body: JSON.stringify({
        ...result.record,
        chapter: 'IEEE Blockchain Pune Local Group',
        submittedAt: new Date().toISOString(),
      }),
      redirect: 'follow',
    })
    if (!response.ok) {
      return NextResponse.json({ error: 'The registration could not be saved. Please try again.' }, { status: 502 })
    }
  } catch {
    return NextResponse.json({ error: 'The registration could not be saved. Please try again.' }, { status: 502 })
  }

  return NextResponse.json({ ok: true })
}
