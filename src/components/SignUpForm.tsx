'use client';

import { Button } from '@/components/Button'

export function SignUpForm() {

  return (
    <div className="relative isolate mt-8 flex items-center pr-1">
      <Button
        type="button"
        className="w-full bg-opacity-60 py-4 text-base font-bold tracking-wide"
        onClick={() => (location.href = 'https://cal.com/cyprian-aarons-topiax/30min')}
      >
        <a
          href="https://cal.com/cyprian-aarons-topiax/30min"
          target="_blank"
          rel="noreferrer"
          className="uppercase tracking-widest"
          onClick={(e) => e.preventDefault()}
        >
          📞 Book a Free Strategy Call
        </a>
      </Button>
    </div>
  )
}
