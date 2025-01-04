import { ButtonProps } from './index.types'
import cn from '@/lib/utils/cn'

export default function Button({
  variant = 'primary',
  size = 'md',
  fullWidth,
  leftIcon,
  rightIcon,
  isLoading,
  disabled,
  children,
  className,
  ...props
}: ButtonProps) {
  const baseStyles = cn(
    'flex items-center justify-center gap-2 rounded-full font-hauora font-bold text-center tracking-[-0.02em] transition-all',
    fullWidth && 'w-full'
  )

  const sizes = {
    sm: 'h-10 px-4 py-2 text-[15px]',
    md: 'h-12 px-[22px] py-[10px] text-base',
  }

  const variants = {
    primary: {
      base: 'bg-blue-primary text-white border-b-2 border-black/25',
      hover: 'hover:bg-blue-primary hover:bg-opacity-90',
      active:
        'active:bg-opacity-90 active:ring-2 active:ring-[#97CBFF] active:ring-offset-2',
      focus:
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-[#97CBFF] focus-visible:ring-offset-2',
      disabled: 'opacity-50 cursor-not-allowed',
    },
    secondary: {
      base: 'bg-white text-blue-primary',
      hover: 'hover:bg-black hover:bg-opacity-5',
      active:
        'active:bg-opacity-95 active:ring-2 active:ring-[#97CBFF] active:ring-offset-2',
      focus:
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-[#97CBFF] focus-visible:ring-offset-2',
      disabled: 'opacity-50 cursor-not-allowed',
    },
  }

  const variantStyles = variants[variant]

  return (
    <button
      className={cn(
        baseStyles,
        sizes[size],
        variantStyles.base,
        !disabled && variantStyles.hover,
        !disabled && variantStyles.active,
        !disabled && variantStyles.focus,
        disabled && variantStyles.disabled,
        className
      )}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <span className="animate-spin">...</span>
      ) : (
        <>
          {leftIcon && <span className="flex-none">{leftIcon}</span>}
          <span>{children}</span>
          {rightIcon && <span className="flex-none">{rightIcon}</span>}
        </>
      )}
    </button>
  )
}
