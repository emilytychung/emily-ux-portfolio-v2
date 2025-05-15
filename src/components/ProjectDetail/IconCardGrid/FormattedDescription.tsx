export default function FormattedDescription({
  description,
  className = '',
}: {
  description: string
  className?: string
}) {
  const baseTextClass = 'text-description !text-slate-500'
  const textClass = className ? `${baseTextClass} ${className}` : baseTextClass

  // If no description or no bullet character is present, render as simple paragraph
  if (
    !description ||
    !description.includes('\u2B24') ||
    description.split('\u2B24').filter(Boolean).length <= 1
  ) {
    return <p className={textClass}>{description}</p>
  }

  // Split by bullet character and process
  const parts = description.split('\u2B24').filter(Boolean)

  return (
    <div className="space-y-2">
      {/* First part is typically an intro paragraph */}
      {parts[0].trim() && <p className={textClass}>{parts[0].trim()}</p>}

      {/* Remaining parts are list items */}
      <ul className="ml-5 list-disc space-y-1" role="list">
        {parts.slice(1).map((item, index) => (
          <li key={index} className={textClass}>
            {item.trim()}
          </li>
        ))}
      </ul>
    </div>
  )
}
