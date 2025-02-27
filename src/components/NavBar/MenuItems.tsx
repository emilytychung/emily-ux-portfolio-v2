import Link from 'next/link'
import { BriefcaseIcon, UserIcon } from './Icons'

export const HOME_MENU_ITEMS = [
  { href: '#work', label: 'Work', icon: <BriefcaseIcon /> },
  { href: '#about', label: 'About', icon: <UserIcon /> },
]

export const DesktopMenuItems = ({
  href,
  label,
  icon,
}: {
  href: string
  label: string
  icon: React.ReactNode
}) => {
  return (
    <Link
      href={href}
      className="group flex items-center gap-2"
      aria-label={`View ${label}`}
    >
      {icon}
      <span className="text-[16px] font-semibold text-slate-700">{label}</span>
    </Link>
  )
}

export const MobileMenuItems = ({
  href,
  label,
  icon,
  onClick,
}: {
  href: string
  label: string
  icon: React.ReactNode
  onClick?: () => void
}) => {
  return (
    <Link
      href={href}
      className="flex items-center gap-2 rounded-md px-2 py-2.5 hover:bg-slate-50"
      aria-label={`View ${label}`}
      onClick={onClick}
    >
      {icon}
      <span className="text-[16px] font-semibold text-slate-700">{label}</span>
    </Link>
  )
}
