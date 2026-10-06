'use client'

import React, { useEffect } from 'react'

export interface LightboxData {
  src: string
  title: string
  meta?: string
  source?: string
}

interface LightboxProps {
  data: LightboxData | null
  onClose: () => void
}

export default function Lightbox({ data, onClose }: LightboxProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (data) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [data, onClose])

  if (!data) return null

  return (
    <div
      className="lightbox-modal is-open"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div className="lightbox-dialog flex flex-col">
        <div className="p-3 bg-slate-900 border-b border-slate-800 flex items-center justify-between text-white">
          <span className="chip">Institutional Photo Inspector</span>
          <button
            type="button"
            onClick={onClose}
            className="text-slate-400 hover:text-white text-lg p-1 transition"
            aria-label="Close dialog"
          >
            ✕
          </button>
        </div>

        <div className="lightbox-image-wrap">
          <img
            src={data.src}
            alt={data.title}
            className="max-w-full max-h-[520px] object-contain"
          />
        </div>

        <div className="p-4 bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-t border-slate-100">
          <div>
            <h3 className="font-heading text-base font-bold text-ieee-navy">
              {data.title}
            </h3>
            {data.meta && (
              <p className="text-xs text-slate-600 mt-0.5">{data.meta}</p>
            )}
          </div>
          {data.source && (
            <a
              href={data.source}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xs py-1.5 px-3 self-start sm:self-auto shrink-0"
            >
              Source Document ↗
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
