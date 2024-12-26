import { ButtonProps } from './index.types'
import cn from '@/lib/utils/cn'

export const Button = ({
  variant = 'primary',
  leftIcon,
  rightIcon,
  children,
  className,
  ...props
}: ButtonProps) => {
  const baseStyles =
    'flex items-center justify-center gap-2 rounded-full font-hauora font-bold text-center tracking-[-0.02em] transition-all'

  const variants = {
    primary: {
      base: 'bg-[#0A84FF] text-white border-b-2 border-black/25 text-[15px] px-4 py-2 h-10',
      hover: 'hover:bg-[#0A84FF] hover:bg-opacity-90',
      active:
        'active:bg-opacity-90 active:ring-2 active:ring-[#97CBFF] active:ring-offset-2',
      // Remove focus styles or make them keyboard-focus only
      focus:
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-[#97CBFF] focus-visible:ring-offset-2',
    },
    secondary: {
      base: 'bg-white text-[#0A84FF] text-lg px-[22px] py-[10px] h-12',
      hover: 'hover:bg-black hover:bg-opacity-5',
      active:
        'active:bg-opacity-95 active:ring-2 active:ring-[#97CBFF] active:ring-offset-2',
      // Remove focus styles or make them keyboard-focus only
      focus:
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-[#97CBFF] focus-visible:ring-offset-2',
    },
  }

  const variantStyles = variants[variant]

  return (
    <button
      className={cn(
        baseStyles,
        variantStyles.base,
        variantStyles.hover,
        variantStyles.active,
        variantStyles.focus,
        className
      )}
      {...props}
    >
      {leftIcon && <span className="flex-none">{leftIcon}</span>}
      <span>{children}</span>
      {rightIcon && <span className="flex-none">{rightIcon}</span>}
    </button>
  )
}
