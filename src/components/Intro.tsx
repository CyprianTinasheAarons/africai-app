import Link from 'next/link'

import { IconLink } from '@/components/IconLink'
import { SignUpForm } from '@/components/SignUpForm'
import { Logo } from './Logo'

function TwitterIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" fill="currentColor" {...props}>
      <path d="M5.526 13.502c5.032 0 7.784-4.168 7.784-7.783 0-.119 0-.237-.008-.353a5.566 5.566 0 0 0 1.364-1.418 5.46 5.46 0 0 1-1.571.431c.571-.342.998-.88 1.203-1.513a5.483 5.483 0 0 1-1.737.664 2.738 2.738 0 0 0-4.662 2.495 7.767 7.767 0 0 1-5.638-2.858 2.737 2.737 0 0 0 .847 3.651 2.715 2.715 0 0 1-1.242-.341v.035a2.737 2.737 0 0 0 2.195 2.681 2.73 2.73 0 0 1-1.235.047 2.739 2.739 0 0 0 2.556 1.9 5.49 5.49 0 0 1-4.049 1.133A7.744 7.744 0 0 0 5.526 13.5" />
    </svg>
  )
}

export function Intro() {
  return (
    <>
      <div className="flex justify-center">
        <Link href="/" className='flex justify-center w-1/2'>
          <Logo />
        </Link>
      </div>

      <h1 className="mt-14 font-display text-xl/tight font-medium text-white text-center">
        We unite africa through technology.
      </h1>
      <SignUpForm />
    </>
  )
}

export function IntroFooter() {
  return (
    <p className="flex items-baseline gap-x-2 text-[0.8125rem]/6 text-gray-500">
      Brought to you by{' '}
      <IconLink
        href="https://twitter.com/cyprianaarons"
        icon={TwitterIcon}
        compact
        large
      >
        Cyprian Aarons
      </IconLink>
    </p>
  )
}
