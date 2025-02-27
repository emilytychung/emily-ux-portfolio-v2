'use client'
import React, { useState } from 'react'
import NavBarWrapper from './NavBarWrapper'
import { HOME_MENU_ITEMS, MobileMenuItems } from './MenuItems'
import EmailButton from './EmailButton'
import Avatar from './Avatar'

export default function MobileNavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <NavBarWrapper className="max-w-[375px] px-4 py-3">
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
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              {isMenuOpen ? (
                <path
                  d="M6 18L18 6M6 6L18 18"
                  stroke="#202939"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              ) : (
                <path
                  d="M4 6H20M4 12H20M4 18H20"
                  stroke="#202939"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="absolute left-0 right-0 top-16 z-50 rounded-lg border border-slate-100 bg-white p-4 shadow-lg">
          <div className="flex flex-col space-y-4">
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
        </div>
      )}
    </NavBarWrapper>
  )
}
