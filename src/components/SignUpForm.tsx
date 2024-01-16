'use client';

import { Button } from '@/components/Button'

export function SignUpForm() {

  return (
    <div className="relative isolate mt-8 flex items-center pr-1">
      <Button
        type="button"
        className="w-full bg-opacity-60 py-3"
        onClick={() => (location.href = 'https://tidycal.com/cyprianaarons263/30-minute-meeting')}
      >
        <a
          href="https://tidycal.com/cyprianaarons263/30-minute-meeting"
          target="_blank"
          rel="noreferrer"
          className="uppercase tracking-widest"
          onClick={(e) => e.preventDefault()}
        >
          Book a call
        </a>
      </Button>
    </div>
  )
}
