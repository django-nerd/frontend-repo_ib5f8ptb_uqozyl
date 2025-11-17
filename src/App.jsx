import { useEffect } from 'react'
import { Routes, Route, Link, useLocation } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Menu from './components/Menu'
import Gallery from './components/Gallery'
import Specials from './components/Specials'
import Reservation from './components/Reservation'
import Contact from './components/Contact'
import Admin from './components/Admin'
import Footer from './components/Footer'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname])
  return null
}

const Nav = () => (
  <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-black/50 border-b border-white/10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
      <Link to="/" className="text-[22px] tracking-wide font-semibold" style={{color:'#D4AF37'}}>Éclat Dining</Link>
      <nav className="hidden md:flex gap-6 text-sm text-[#F5F3EE]">
        <Link className="hover:text-[#D4AF37] transition" to="/about">About</Link>
        <Link className="hover:text-[#D4AF37] transition" to="/menu">Menu</Link>
        <Link className="hover:text-[#D4AF37] transition" to="/gallery">Gallery</Link>
        <Link className="hover:text-[#D4AF37] transition" to="/specials">Specials</Link>
        <Link className="hover:text-[#D4AF37] transition" to="/reservation">Reservation</Link>
        <Link className="hover:text-[#D4AF37] transition" to="/contact">Contact</Link>
        <Link className="hover:text-[#D4AF37] transition" to="/admin">Admin</Link>
      </nav>
      <Link to="/reservation" className="md:inline-flex hidden px-4 py-2 rounded bg-[#D4AF37] text-black font-medium hover:scale-105 transition-transform">Reserve</Link>
    </div>
  </header>
)

function Layout({ children }){
  return (
    <div className="min-h-screen bg-[#0E0E0E] text-[#F5F3EE]">
      <Nav />
      <main className="pt-16">{children}</main>
      <Footer />
    </div>
  )
}

function AppRouter(){
  return (
    <Routes>
      <Route path="/" element={<Layout><Home/></Layout>} />
      <Route path="/about" element={<Layout><About/></Layout>} />
      <Route path="/menu" element={<Layout><Menu/></Layout>} />
      <Route path="/gallery" element={<Layout><Gallery/></Layout>} />
      <Route path="/specials" element={<Layout><Specials/></Layout>} />
      <Route path="/reservation" element={<Layout><Reservation/></Layout>} />
      <Route path="/contact" element={<Layout><Contact/></Layout>} />
      <Route path="/admin" element={<Layout><Admin/></Layout>} />
    </Routes>
  )
}

export default function App(){
  return (
    <>
      <ScrollToTop />
      <AppRouter />
    </>
  )
}
