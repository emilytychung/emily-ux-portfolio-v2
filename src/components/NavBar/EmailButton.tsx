import { EMAIL } from '@/constants/contact'
import Link from 'next/link'
import Button from '@/components/Button'

export default function EmailButton() {
  return (
    <Button variant="primary" size="sm">
      <Link href={`mailto:${EMAIL}`} aria-label="Send me an email">
        Email me
      </Link>
    </Button>
  )
}
