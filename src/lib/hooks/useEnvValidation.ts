// hooks/useEnvValidation.ts
import { useState, useEffect } from 'react'
import env from '@/lib/utils/env'

interface EnvValidationResult {
  isValid: boolean
  error: string | null
  sitePassword: string | null
}

export function useEnvValidation(): EnvValidationResult {
  const [validationResult, setValidationResult] = useState<EnvValidationResult>(
    {
      isValid: false,
      error: null,
      sitePassword: null,
    }
  )

  useEffect(() => {
    if (!env.sitePassword) {
      setValidationResult({
        isValid: false,
        error: 'Authentication not properly configured',
        sitePassword: null,
      })
      return
    }

    setValidationResult({
      isValid: true,
      error: null,
      sitePassword: env.sitePassword,
    })
  }, [])

  return validationResult
}
