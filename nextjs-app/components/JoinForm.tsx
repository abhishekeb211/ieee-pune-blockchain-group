'use client'

import React, { useState } from 'react'

const categories = [
  { label: 'Student (UG / PG)', value: 'Student' },
  { label: 'Researcher / PhD Scholar', value: 'Researcher' },
  { label: 'Academician / Faculty', value: 'Academician' },
  { label: 'Industry Professional', value: 'Industry Professional' },
]

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
      setErrorMsg('Please enter a valid academic or professional email address.')
      return
    }
    if (!category) {
      setErrorMsg('Please select your primary affiliation category.')
      return
    }
    if (selectedInterests.length === 0) {
      setErrorMsg('Please select at least one technical area of interest.')
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
    <section id="join" className="section-padding bg-slate-50 border-t border-slate-200">
      <div className="section-container grid gap-8 lg:grid-cols-5">
        {/* Left Column */}
        <div className="lg:col-span-2">
          <span className="text-xs font-bold uppercase tracking-wider text-ieee-primary">
            Membership &amp; Engagement
          </span>
          <h2 className="font-heading mt-1.5 text-2xl font-bold text-ieee-navy sm:text-3xl">
            Join the Community
          </h2>
          <p className="mt-3 text-xs text-slate-600 leading-relaxed sm:text-sm">
            Whether you are an active IEEE Member or a student, researcher, or practitioner passionate about decentralized architectures, registering connects you directly with our research initiatives, FDPs, hackathons, and laboratory resources.
          </p>
          <div className="mt-5 rounded-lg border border-slate-200 bg-white p-3.5 text-xs text-slate-600">
            <strong className="block font-semibold text-ieee-navy">Official Local Group Record</strong>
            IEEE vTools Spoid: <strong>LGR00120BC</strong>.<br />
            For institutional inquiries or technical collaborations, contact Chair Dr. Sonali D. Patil at{' '}
            <a href="mailto:sonalimpatil@gmail.com" className="text-ieee-primary font-medium hover:underline">
              sonalimpatil@gmail.com
            </a>.
          </div>
        </div>

        {/* Right Form Card */}
        <div className="institutional-card lg:col-span-3 p-5 sm:p-6">
          {status === 'success' ? (
            <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-6 text-center">
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-emerald-600 text-white font-bold">
                ✓
              </div>
              <h3 className="font-heading mt-3 text-base font-bold text-emerald-900">
                Registration Recorded
              </h3>
              <p className="mt-1.5 text-xs text-emerald-800 leading-relaxed">
                Thank you for registering with the IEEE Pune Blockchain Group. Your details have been submitted to the chapter coordinators.
              </p>
              <button
                type="button"
                onClick={() => setStatus('idle')}
                className="mt-4 rounded-full border border-emerald-300 px-4 py-1.5 text-xs font-semibold text-emerald-800 hover:bg-emerald-100 transition"
              >
                Submit another response
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="text-xs font-semibold text-slate-700">
                    Full Name <span className="text-rose-500">*</span>
                  </span>
                  <div className="mt-1">
                    <input
                      name="fullName"
                      required
                      type="text"
                      placeholder="Dr. / Prof. / Jane Doe"
                      className="form-input"
                    />
                  </div>
                </label>

                <label className="block">
                  <span className="text-xs font-semibold text-slate-700">
                    Email Address <span className="text-rose-500">*</span>
                  </span>
                  <div className="mt-1">
                    <input
                      name="email"
                      required
                      type="email"
                      placeholder="jane@institute.edu"
                      className="form-input"
                    />
                  </div>
                </label>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="text-xs font-semibold text-slate-700">Phone Number</span>
                  <div className="mt-1">
                    <input
                      name="phone"
                      type="tel"
                      placeholder="+91 90000 00000"
                      className="form-input"
                    />
                  </div>
                </label>

                <label className="block">
                  <span className="text-xs font-semibold text-slate-700">
                    IEEE Membership Number
                  </span>
                  <div className="mt-1">
                    <input
                      name="membershipNumber"
                      type="text"
                      placeholder="Optional (e.g. 98765432)"
                      className="form-input"
                    />
                  </div>
                </label>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="text-xs font-semibold text-slate-700">
                    Primary Affiliation <span className="text-rose-500">*</span>
                  </span>
                  <div className="mt-1">
                    <select
                      name="category"
                      required
                      defaultValue=""
                      className="form-input text-xs"
                    >
                      <option value="" disabled>Select category</option>
                      {categories.map((cat) => (
                        <option key={cat.value} value={cat.value}>
                          {cat.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </label>

                <label className="block">
                  <span className="text-xs font-semibold text-slate-700">
                    Organization / University
                  </span>
                  <div className="mt-1">
                    <input
                      name="organization"
                      type="text"
                      placeholder="e.g. PCCOE, MMCOE, COEP, PICT, Infosys"
                      className="form-input"
                    />
                  </div>
                </label>
              </div>

              <fieldset>
                <legend className="text-xs font-semibold text-slate-700">
                  Technical Focus &amp; Interests <span className="text-rose-500">*</span>
                </legend>
                <div className="mt-2 flex flex-wrap gap-2">
                  {areas.map((item) => {
                    const isChecked = selectedInterests.includes(item)
                    return (
                      <label
                        key={item}
                        className={`pill-checkbox ${isChecked ? 'is-checked' : ''}`}
                      >
                        <input
                          type="checkbox"
                          className="sr-only"
                          checked={isChecked}
                          onChange={() => handleInterestToggle(item)}
                        />
                        <span>{item}</span>
                      </label>
                    )
                  })}
                </div>
              </fieldset>

              <label className="block">
                <span className="text-xs font-semibold text-slate-700">
                  Comments or Research Notes (optional)
                </span>
                <div className="mt-1">
                  <textarea
                    name="message"
                    rows={2}
                    placeholder="Tell us about your ongoing projects, research interests, or laboratory queries"
                    className="form-input resize-none"
                  />
                </div>
              </label>

              {errorMsg && (
                <p className="rounded-md bg-rose-50 px-3 py-2 text-xs font-medium text-rose-700">
                  {errorMsg}
                </p>
              )}

              <div className="pt-1">
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="btn-primary w-full sm:w-auto"
                >
                  {status === 'submitting' ? 'Submitting Application…' : 'Submit Registration'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
