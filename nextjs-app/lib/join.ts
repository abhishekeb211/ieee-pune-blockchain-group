const categories = ['Student', 'Researcher', 'Academician', 'Industry Professional']

const areas = [
  'Blockchain & DLT Architecture',
  'Decentralized AI & Agentic Systems',
  'Applied Cryptography & ZKP',
  'Smart Contracts & Web3',
  'Enterprise Blockchain (Hyperledger)',
  'Digital Identity & SSI',
  'Security & Smart Contract Auditing',
  'Sustainability & DePIN',
]

const allowedKeys = new Set([
  'fullName',
  'email',
  'phone',
  'membershipNumber',
  'category',
  'organization',
  'areasOfInterest',
  'message',
  'company',
])

export interface JoinRecord {
  fullName: string
  email: string
  phone: string
  membershipNumber: string
  category: string
  organization: string
  areasOfInterest: string[]
  message: string
}

export type JoinResult =
  | { ok: true; record: JoinRecord; spam: boolean }
  | { ok: false; error: string }

function text(value: unknown, max: number) {
  if (typeof value !== 'string') return null
  const trimmed = value.trim()
  if (trimmed.length > max) return null
  return trimmed
}

export function validateJoin(input: unknown): JoinResult {
  if (!input || typeof input !== 'object' || Array.isArray(input)) {
    return { ok: false, error: 'The registration could not be read.' }
  }
  const body = input as Record<string, unknown>
  if (Object.keys(body).some((key) => !allowedKeys.has(key))) {
    return { ok: false, error: 'The registration could not be read.' }
  }

  const company = text(body.company ?? '', 200)
  if (company === null) return { ok: false, error: 'The registration could not be read.' }
  if (company.length > 0) {
    return {
      ok: true,
      spam: true,
      record: {
        fullName: '',
        email: '',
        phone: '',
        membershipNumber: '',
        category: '',
        organization: '',
        areasOfInterest: [],
        message: '',
      },
    }
  }

  const fullName = text(body.fullName, 120)
  const email = text(body.email, 254)
  const phone = text(body.phone ?? '', 30)
  const membershipNumber = text(body.membershipNumber ?? '', 20)
  const category = text(body.category, 40)
  const organization = text(body.organization ?? '', 160)
  const message = text(body.message ?? '', 1000)

  if (!fullName) return { ok: false, error: 'Please enter your full name.' }
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, error: 'Please enter a valid email address.' }
  }
  if (phone === null || (phone && !/^[0-9+\-().\s]+$/.test(phone))) {
    return { ok: false, error: 'Please enter a valid phone number or leave it blank.' }
  }
  if (membershipNumber === null || (membershipNumber && !/^[A-Za-z0-9-]+$/.test(membershipNumber))) {
    return { ok: false, error: 'Please enter a valid IEEE membership number or leave it blank.' }
  }
  if (!category || !categories.includes(category)) {
    return { ok: false, error: 'Please select your primary affiliation category.' }
  }
  if (organization === null) return { ok: false, error: 'Please shorten the organization name.' }
  if (message === null) return { ok: false, error: 'Please shorten the comments.' }
  if (!Array.isArray(body.areasOfInterest) || body.areasOfInterest.length < 1 || body.areasOfInterest.length > 8) {
    return { ok: false, error: 'Please select at least one technical area of interest.' }
  }
  if (body.areasOfInterest.some((item) => typeof item !== 'string' || !areas.includes(item))) {
    return { ok: false, error: 'Please select technical areas from the list.' }
  }

  return {
    ok: true,
    spam: false,
    record: {
      fullName,
      email,
      phone,
      membershipNumber,
      category,
      organization,
      areasOfInterest: body.areasOfInterest,
      message,
    },
  }
}
