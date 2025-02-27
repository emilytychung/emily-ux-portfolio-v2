import React from 'react'
import NavBarWrapper from './NavBarWrapper'
import EmailButton from './EmailButton'
import Avatar from './Avatar'
import { HOME_MENU_ITEMS, DesktopMenuItems } from './MenuItems'

export default function DesktopNavBar() {
  return (
    <NavBarWrapper className={'max-w-[680px] py-2 pl-3 pr-4'}>
      <div className="flex w-full items-center justify-between">
        <Avatar isDesktop />
        {HOME_MENU_ITEMS.map(({ href, label, icon }) => (
          <DesktopMenuItems key={href} href={href} label={label} icon={icon} />
        ))}
        <EmailButton />
      </div>
    </NavBarWrapper>
  )
}
