import PasswordAuth from '@/components/PasswordAuth'
import Footer from '@/components/Footer'

export default function PasswordPage() {
  return (
    <>
      <PasswordAuth />
      <Footer isSimple className="fixed bottom-[0] right-[0] w-screen" />
    </>
  )
}
