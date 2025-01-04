import Button from '@/components/Button'
import { EMAIL } from '@/constants/contact'

export default function Footer() {
  return (
    <footer className="flex flex-col">
      <div className="flex flex-col items-center bg-blue-primary px-4 py-8 sm:px-16 sm:py-16 md:px-[218px]">
        <div className="flex flex-col items-center gap-6 sm:gap-8">
          <div className="flex flex-col items-center">
            <span className="text-footer-title">LETS TALK</span>
            <a
              href={`mailto:${EMAIL}`}
              className="text-footer-email text-slate-50 no-underline shadow-text hover:underline"
            >
              {EMAIL}
            </a>
          </div>

          <a href={`mailto:${EMAIL}`}>
            <Button
              variant="secondary"
              size="md"
              fullWidth
              leftIcon={
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.25 2.688C1.934 2.688 1.688 2.969 1.688 3.25V4.059L7.734 9.016C8.473 9.613 9.492 9.613 10.23 9.016L16.312 4.059V3.25C16.312 2.969 16.031 2.688 15.75 2.688H2.25ZM1.688 6.238V12.25C1.688 12.566 1.934 12.812 2.25 12.812H15.75C16.031 12.812 16.312 12.566 16.312 12.25V6.238L11.32 10.316C9.949 11.441 8.016 11.441 6.68 10.316L1.688 6.238ZM0 3.25C0 2.02 0.984 1 2.25 1H15.75C16.98 1 18 2.02 18 3.25V12.25C18 13.516 16.98 14.5 15.75 14.5H2.25C0.984 14.5 0 13.516 0 12.25V3.25Z"
                    fill="currentColor"
                  />
                </svg>
              }
              className="sm:w-auto"
            >
              Email me
            </Button>
          </a>
        </div>
      </div>

      <div className="footer-gradient flex flex-col items-center bg-blue-primary bg-[linear-gradient(rgb(0_0_0/20%)_0_0)]">
        <div className="flex w-full flex-col items-center px-4 py-6 text-center md:max-w-[1214px] md:flex-row md:justify-between md:py-2 lg:max-w-[1312px]">
          <span className="text-footer-copyright text-slate-100">
            "DESIGN IS THINKING MADE VISUAL" - SAUL BASS
          </span>
          <span className="text-footer-copyright text-slate-100">
            DESIGNED WITH ♡ // 2025
          </span>
        </div>
      </div>
    </footer>
  )
}
