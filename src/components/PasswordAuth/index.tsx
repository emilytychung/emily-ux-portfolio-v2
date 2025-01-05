'use client'

import Container from '@/components/Container'
import { PASSWORD_EMAIL, EMAIL } from '@/constants/contact'
import Button from '@/components/Button'
import PasswordInput from './PasswordInput'
import { useState } from 'react'
import LockIcon from './LockIcon'

export default function PasswordAuth() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string>()

  const handleChange = (value: string) => {
    setPassword(value)
    // Example validation
    if (value.length < 8) {
      setError('Password must be at least 8 characters')
    } else {
      setError(undefined)
    }
  }

  return (
    <Container as="section" className="flex justify-center">
      <div className="flex h-screen flex-col items-center justify-center gap-[25px] text-center sm:gap-8">
        <LockIcon />
        <div className="flex flex-col gap-[15px] sm:gap-4">
          <h1 className="text-heading-medium text-slate-800">Protected site</h1>
          <p className="text-body font-inter text-slate-600">
            Enter the password below or email
            <br />
            <a
              className="text-blue-primary"
              href={`mailto:${EMAIL}?subject=${PASSWORD_EMAIL.subject}&body=${PASSWORD_EMAIL.body}`}
            >
              emilytychung@gmail.com
            </a>{' '}
            to get access.
          </p>
        </div>
        <PasswordInput value={password} onChange={handleChange} error={error} />
        <Button fullWidth>Submit</Button>
      </div>
    </Container>
  )
}
