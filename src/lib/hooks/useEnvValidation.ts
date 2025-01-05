import { useState, useEffect } from 'react'
import env from '@/lib/utils/env'

interface EnvValidationResult {
  isEnvValid: boolean
  error: string | undefined
  sitePassword: string | null
}

export function useEnvValidation(): EnvValidationResult {
  const [validationResult, setValidationResult] = useState<EnvValidationResult>(
    {
      isEnvValid: false,
      error: undefined,
      sitePassword: null,
    }
  )

  useEffect(() => {
    if (!env.sitePassword) {
      setValidationResult({
        isEnvValid: false,
        error: 'Authentication not properly configured',
        sitePassword: null,
      })
      return
    }

    setValidationResult({
      isEnvValid: true,
      error: undefined,
      sitePassword: env.sitePassword,
    })
  }, [])

  return validationResult
}
