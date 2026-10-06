'use client'

import React, { useState } from 'react'

const categories = [
  'Student',
  'Researcher',
  'Academician',
  'Industry Professional',
]

const areas = [
  'Blockchain Research',
  'DLT Applications & Use Cases',
  'Smart Contracts & Web3',
  'FinTech & Digital Assets',
  'Healthcare & Supply Chain Blockchain',
  'Education & Outreach',
  'Events, Hackathons & Networking',
  'Standards & Policy',
]

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function JoinForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const [selectedInterests, setSelectedInterests] = useState<string[]>([])

  const handleInterestToggle = (item: string) => {
    setSelectedInterests((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    )
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setErrorMsg('')

    const form = e.currentTarget
    const data = new FormData(form)
    const fullName = String(data.get('fullName') || '').trim()
    const email = String(data.get('email') || '').trim()
    const category = String(data.get('category') || '').trim()

    if (!fullName) {
      setErrorMsg('Please enter your full name.')
      return
    }
    if (!email || !emailRegex.test(email)) {
      setErrorMsg('Please enter a valid email address.')
      return
    }
    if (!category) {
      setErrorMsg('Please select what best describes you.')
      return
    }
    if (selectedInterests.length === 0) {
      setErrorMsg('Please select at least one area of interest.')
      return
    }

    const payload = {
      fullName,
      email,
      phone: String(data.get('phone') || '').trim(),
      membershipNumber: String(data.get('membershipNumber') || '').trim(),
      category,
      organization: String(data.get('organization') || '').trim(),
      areasOfInterest: selectedInterests,
      message: String(data.get('message') || '').trim(),
      chapter: 'IEEE Pune Blockchain Group',
      submittedAt: new Date().toISOString(),
    }

    setStatus('submitting')

    try {
      await fetch(
        'https://script.google.com/macros/s/AKfycbzwS5F36cS8behn9sgMW-tfEBiRtcY2zzlfUqbhGu62gkwxNtgCuKSawPD0W-v3bOhZsg/exec',
        {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'text/plain' },
          body: JSON.stringify(payload),
        }
      )
      setStatus('success')
      form.reset()
      setSelectedInterests([])
    } catch (err) {
      console.error(err)
      setStatus('error')
      setErrorMsg('Something went wrong. Please check your connection and try again.')
    }
  }

  return (
    <section id="join" className="bg-slate-100 py-20">
      <div className="section-container grid gap-10 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-ieee-blue">
            Get Involved
          </span>
          <h2 className="mt-3 text-3xl font-bold text-ieee-navy sm:text-4xl">
            Join the Community
          </h2>
          <p className="mt-4 text-slate-600 leading-relaxed">
            Whether you’re an IEEE member or new to the community, tell us a bit about yourself and your interests. Your registration is recorded and reviewed by the IEEE Pune Blockchain Group leadership.
          </p>
          <p className="mt-4 text-sm text-slate-500">
            Questions before joining? Reach the leads directly via the{' '}
            <a href="#leadership" className="font-medium text-ieee-blue hover:underline">
              Leadership
            </a>{' '}
            section above.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:col-span-3">
          {status === 'success' ? (
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500 text-2xl text-white">
                ✓
              </div>
              <h3 className="mt-4 text-lg font-semibold text-emerald-900">You’re on the list!</h3>
              <p className="mt-2 text-sm text-emerald-800">
                Thanks for your interest in the IEEE Pune Blockchain Group. Your details have been recorded and the group leads will be in touch.
              </p>
              <button
                type="button"
                onClick={() => setStatus('idle')}
                className="mt-5 rounded-full border border-emerald-300 px-4 py-2 text-sm font-semibold text-emerald-800 hover:bg-emerald-100 transition"
              >
                Submit another response
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="text-sm font-medium text-slate-700">
                    Full Name <span className="text-rose-500">*</span>
                  </span>
                  <div className="mt-1.5">
                    <input
                      name="fullName"
                      required
                      type="text"
                      placeholder="Jane Doe"
                      className="form-input"
                    />
                  </div>
                </label>

                <label className="block">
                  <span className="text-sm font-medium text-slate-700">
                    Email Address <span className="text-rose-500">*</span>
                  </span>
                  <div className="mt-1.5">
                    <input
                      name="email"
                      required
                      type="email"
                      placeholder="jane@example.com"
                      className="form-input"
                    />
                  </div>
                </label>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="text-sm font-medium text-slate-700">Phone Number</span>
                  <div className="mt-1.5">
                    <input
                      name="phone"
                      type="tel"
                      placeholder="+91 90000 00000"
                      className="form-input"
                    />
                  </div>
                </label>

                <label className="block">
                  <span className="text-sm font-medium text-slate-700">
                    IEEE Membership Number
                  </span>
                  <div className="mt-1.5">
                    <input
                      name="membershipNumber"
                      type="text"
                      placeholder="Optional"
                      className="form-input"
                    />
                  </div>
                </label>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="text-sm font-medium text-slate-700">
                    I am a… <span className="text-rose-500">*</span>
                  </span>
                  <div className="mt-1.5">
                    <select name="category" required defaultValue="" className="form-input">
                      <option value="" disabled>
                        Select category
                      </option>
                      {categories.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                  </div>
                </label>

                <label className="block">
                  <span className="text-sm font-medium text-slate-700">
                    Organization / Institution
                  </span>
                  <div className="mt-1.5">
                    <input
                      name="organization"
                      type="text"
                      placeholder="Company or university name"
                      className="form-input"
                    />
                  </div>
                </label>
              </div>

              <fieldset>
                <legend className="text-sm font-medium text-slate-700">
                  Areas of Interest <span className="text-rose-500">*</span>
                </legend>
                <div className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {areas.map((area) => {
                    const isChecked = selectedInterests.includes(area)
                    return (
                      <label
                        key={area}
                        className={`flex cursor-pointer items-center gap-2.5 rounded-lg border px-3 py-2.5 text-sm transition ${
                          isChecked
                            ? 'border-ieee-blue bg-ieee-blue/5 text-ieee-navy font-medium'
                            : 'border-slate-200 text-slate-700 hover:border-slate-300'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => handleInterestToggle(area)}
                          className="h-4 w-4 rounded border-slate-300 text-ieee-blue focus:ring-ieee-blue"
                        />
                        {area}
                      </label>
                    )
                  })}
                </div>
              </fieldset>

              <label className="block">
                <span className="text-sm font-medium text-slate-700">Message (optional)</span>
                <div className="mt-1.5">
                  <textarea
                    name="message"
                    rows={3}
                    placeholder="Tell us anything else you'd like the leads to know"
                    className="form-input resize-none"
                  ></textarea>
                </div>
              </label>

              {errorMsg && (
                <p className="rounded-lg bg-rose-50 px-3 py-2 text-sm font-medium text-rose-700">
                  {errorMsg}
                </p>
              )}

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="mt-1 inline-flex w-full items-center justify-center gap-2 rounded-full bg-ieee-blue px-6 py-3.5 text-sm font-semibold text-white shadow-md shadow-ieee-blue/30 transition hover:bg-ieee-navy disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
              >
                {status === 'submitting' ? 'Submitting…' : 'Join the Community'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
