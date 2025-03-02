import { NavBar } from '@/components/NavBar'
import Jumbotron from '@/components/Jumbotron'
import Gallery from '@/components/Gallery'
import Testimonials from '@/components/Testimonials'
import Featured from '@/components/Featured'
import Footer from '@/components/Footer'
import ProtectedRoute from '@/components/ProtectedRoute'
import About from '@/components/About'

export default function Home() {
  return (
    <ProtectedRoute>
      <NavBar />
      <Jumbotron />
      <Featured />
      <Gallery />
      <Testimonials />
      <About />
      <Footer />
    </ProtectedRoute>
  )
}
