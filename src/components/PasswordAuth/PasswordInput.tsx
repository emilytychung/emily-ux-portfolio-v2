// components/PasswordInput/PasswordInput.tsx
import cn from '@/lib/utils/cn'
import ErrorIcon from './ErrorIcon'

interface PasswordInputProps {
  value: string
  onChange: (value: string) => void
  error?: string
  id?: string
  name?: string
  disabled?: boolean
}

export default function PasswordInput({
  value,
  onChange,
  error,
  id = 'password',
  name = 'password',
  disabled = false,
}: PasswordInputProps) {
  const inputWrapperClasses = cn(
    // Base styles
    ' flex h-[56px] w-full items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-3.5',
    'shadow-[0px_4px_4px_0px_rgba(0,0,0,0.01),0px_4px_8px_0px_rgba(17,25,38,0.02)]',
    'transition-colors duration-200',
    // State variations
    {
      'border-slate-300 focus-within:border-blue-primary': !error, // Focus state
      'border-[#DC5840]': error, // Error states
    }
  )

  const inputClasses = cn(
    // Base styles
    'w-full bg-transparent font-inter text-lg leading-[140%]',
    'focus:outline-none',
    // State variations
    {
      'text-slate-400 placeholder:text-slate-400': !value, // Default
      'text-slate-900': value, // Typing & Filled
    }
  )

  return (
    <div className="relative mb-8 flex w-full flex-col gap-3">
      <div className={inputWrapperClasses}>
        <input
          type="password"
          placeholder="Enter Password"
          id={id}
          name={name}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
          className={inputClasses}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
        />
        {error && <ErrorIcon />}
      </div>
      {error && (
        <p
          id={`${id}-error`}
          className="absolute top-[68px] text-left font-inter font-[16px] leading-[140%] text-[#DC5840]"
          role="alert"
        >
          {error}
        </p>
      )}
    </div>
  )
}
