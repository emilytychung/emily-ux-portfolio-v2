'use client'
import React, { useState } from 'react'
import NavBarWrapper from './NavBarWrapper'
import { HOME_MENU_ITEMS, MobileMenuItems } from './MenuItems'
import EmailButton from './EmailButton'
import Avatar from './Avatar'
import HamburgerIcon from './HamburgerIcon'

export default function MobileNavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const mobileMenu = (
    <div className="flex w-full flex-col">
      {HOME_MENU_ITEMS.map(({ href, label, icon }) => (
        <MobileMenuItems
          key={href}
          href={href}
          label={label}
          icon={icon}
          onClick={toggleMenu}
        />
      ))}
    </div>
  )

  return (
    <NavBarWrapper
      className="max-w-[375px] px-4 py-3"
      isMenuOpen={isMenuOpen}
      menuContent={mobileMenu}
    >
      <div className="flex w-full items-center justify-between">
        <Avatar />

        <div className="flex items-center gap-2">
          <EmailButton />

          <button
            onClick={toggleMenu}
            className="rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-primary"
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
          >
            <HamburgerIcon isOpen={isMenuOpen} />
          </button>
        </div>
      </div>
    </NavBarWrapper>
  )
}
