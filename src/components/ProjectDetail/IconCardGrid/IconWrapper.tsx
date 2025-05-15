import cn from '@/lib/utils/cn'

export default function IconWrapper({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  const gridLines = [
    { key: 'left', className: 'left-[7px] sm:left-3 top-0 bottom-0 border-l' },
    {
      key: 'right',
      className: 'right-[7px] sm:right-3 top-0 bottom-0 border-l',
    },
    { key: 'top', className: 'top-[7px] sm:top-3 left-0 right-0 border-t' },
    {
      key: 'bottom',
      className: 'bottom-[7px] sm:bottom-3 left-0 right-0 border-t',
    },
  ]

  const baseLineStyles =
    'absolute border-[#B3B3B3] opacity-20 sm:border-[1.6px] border'

  return (
    <div
      className={cn(
        'relative flex items-center justify-center rounded-xl border border-[#D0D5DD] bg-white',
        'h-10 w-10 sm:h-16 sm:w-16',
        className
      )}
      aria-hidden="true"
    >
      {gridLines.map((line) => (
        <div
          key={line.key}
          className={cn(line.className, baseLineStyles)}
          aria-hidden="true"
        />
      ))}
      <div className="z-10">{children}</div>
    </div>
  )
}
