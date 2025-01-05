import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import { AuthState } from './useLocalStorage'
import { useEnvValidation } from './useEnvValidation'

const AUTH_STORAGE_KEY = 'auth_state'
const CORRECT_PASSWORD = 'your-password-here' // Should be in env variables in real app

const initialAuthState: AuthState = {
  isAuthenticated: false,
}

export function useAuth() {
  const router = useRouter()
  const { isEnvValid, error: envError, sitePassword } = useEnvValidation()
  const [authState, setAuthState] = useState<AuthState>(initialAuthState)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    try {
      const storedAuth = localStorage.getItem(AUTH_STORAGE_KEY)
      if (storedAuth) {
        setAuthState(JSON.parse(storedAuth))
      }
    } catch (error) {
      console.warn('Error reading auth state:', error)
    } finally {
      setIsLoading(false)
    }
  }, [])

  // Checks password is properly set up in env
  const validateAuthentication = () =>
    !isEnvValid || !sitePassword
      ? { isAuthSetup: false, error: envError }
      : { isAuthSetup: true, error: undefined }

  // Validates password
  const validateAndLogin = (password: string) => {
    if (password !== sitePassword) {
      return false
    }

    const newAuthState = {
      isAuthenticated: true,
      lastAuthenticated: new Date().toISOString(),
    }
    setAuthState(newAuthState)
    localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(newAuthState))
    router.push('/')
    return true
  }

  const logout = () => {
    setAuthState(initialAuthState)
    localStorage.removeItem(AUTH_STORAGE_KEY)
    router.push('/login')
  }

  return {
    isAuthenticated: authState.isAuthenticated,
    isLoading,
    validateAuthentication,
    validateAndLogin,
    logout,
  }
}
