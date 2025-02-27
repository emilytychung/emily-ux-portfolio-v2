import Jumbotron from '@/components/Jumbotron'
import SectionHeader from '@/components/SectionHeader'
import Gallery from '@/components/Gallery'
import Testimonials from '@/components/Testimonials'
import { SECTION_HEADERS } from '@/constants/sections'
import Featured from '@/components/Featured'
import Footer from '@/components/Footer'
import ProtectedRoute from '@/components/ProtectedRoute'
import { NavBar } from '@/components/NavBar'
import Container from '@/components/Container'

export default function Home() {
  return (
    <ProtectedRoute>
      <NavBar />
      <Jumbotron />
      <Featured />
      <Gallery />
      <Testimonials />
      <Container as="section" id={SECTION_HEADERS.personal.id}>
        <SectionHeader sectionHeaderMap={SECTION_HEADERS.personal} />
      </Container>
      <Footer />
    </ProtectedRoute>
  )
}
