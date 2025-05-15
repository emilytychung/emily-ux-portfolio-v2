export default function FormattedDescription({
  description,
}: {
  description: string
}) {
  // If no description or no bullet character is present, render as simple paragraph
  if (!description || !description.includes('\u2B24')) {
    return (
      <p className="font-inter text-base font-normal leading-[160%] tracking-tight text-[#697586] sm:text-lg md:text-lg">
        {description}
      </p>
    )
  }

  // Split by bullet character and process
  const parts = description.split('\u2B24').filter(Boolean)

  if (parts.length <= 1) {
    return (
      <p className="font-inter text-base font-normal leading-[160%] tracking-tight text-[#697586] sm:text-lg md:text-lg">
        {description}
      </p>
    )
  }

  return (
    <div className="space-y-2">
      {/* First part is typically an intro paragraph */}
      {parts[0].trim() && (
        <p className="font-inter text-base font-normal leading-[160%] tracking-tight text-[#697586] sm:text-lg md:text-lg">
          {parts[0].trim()}
        </p>
      )}

      {/* Remaining parts are list items */}
      <ul className="ml-5 list-disc space-y-1">
        {parts.slice(1).map((item, index) => (
          <li
            key={index}
            className="font-inter text-base font-normal leading-[160%] tracking-tight text-[#697586] sm:text-lg md:text-lg"
          >
            {item.trim()}
          </li>
        ))}
      </ul>
    </div>
  )
}
