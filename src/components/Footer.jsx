import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react'

export default function Footer(){
  return (
    <footer className="mt-16 border-t border-white/10 bg-black/70 text-[#F5F3EE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="text-[22px] tracking-wide font-semibold" style={{color:'#D4AF37'}}>Éclat Dining</div>
            <p className="mt-3 text-sm text-white/70 max-w-xs">
              Luxury vegetarian gourmet in a minimal, cinematic ambience. Crafted with passion and plated to perfection.
            </p>
            <div className="flex gap-3 mt-4">
              <a href="#" aria-label="Facebook" className="p-2 rounded border border-white/10 hover:border-[#D4AF37] hover:text-[#D4AF37] transition"><Facebook size={18} /></a>
              <a href="#" aria-label="Instagram" className="p-2 rounded border border-white/10 hover:border-[#D4AF37] hover:text-[#D4AF37] transition"><Instagram size={18} /></a>
              <a href="#" aria-label="Twitter" className="p-2 rounded border border-white/10 hover:border-[#D4AF37] hover:text-[#D4AF37] transition"><Twitter size={18} /></a>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-semibold mb-3" style={{fontFamily:'\"Playfair Display\", serif'}}>Hours</h4>
            <ul className="space-y-1 text-sm text-white/80">
              <li>Mon–Thu: 12:00 PM – 10:00 PM</li>
              <li>Fri: 12:00 PM – 11:00 PM</li>
              <li>Sat: 11:00 AM – 11:00 PM</li>
              <li>Sun: 11:00 AM – 9:00 PM</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-3" style={{fontFamily:'\"Playfair Display\", serif'}}>Contact</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li className="flex items-start gap-2"><MapPin size={16} className="mt-0.5 text-[#D4AF37]" /> 21 Aurelia Lane, Midtown</li>
              <li className="flex items-center gap-2"><Phone size={16} className="text-[#D4AF37]" /> +1 (555) 013-0099</li>
              <li className="flex items-center gap-2"><Mail size={16} className="text-[#D4AF37]" /> hello@eclatdining.com</li>
            </ul>
          </div>

          {/* Quick links & newsletter */}
          <div>
            <h4 className="font-semibold mb-3" style={{fontFamily:'\"Playfair Display\", serif'}}>Quick Links</h4>
            <nav className="grid grid-cols-2 gap-2 text-sm">
              <Link className="hover:text-[#D4AF37] transition" to="/menu">Menu</Link>
              <Link className="hover:text-[#D4AF37] transition" to="/reservation">Reservation</Link>
              <Link className="hover:text-[#D4AF37] transition" to="/gallery">Gallery</Link>
              <Link className="hover:text-[#D4AF37] transition" to="/specials">Specials</Link>
              <Link className="hover:text-[#D4AF37] transition" to="/about">About</Link>
              <Link className="hover:text-[#D4AF37] transition" to="/contact">Contact</Link>
            </nav>
            <form className="mt-4">
              <label htmlFor="newsletter" className="text-sm text-white/70">Get updates and specials</label>
              <div className="mt-2 flex">
                <input id="newsletter" type="email" placeholder="Your email" className="w-full px-3 py-2 bg-black/40 border border-white/10 rounded-l outline-none focus:border-[#D4AF37]" />
                <button type="button" className="px-4 py-2 rounded-r bg-[#D4AF37] text-black font-medium hover:brightness-110">Join</button>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-white/60">
          <p>© {new Date().getFullYear()} Éclat Dining • All rights reserved</p>
          <div className="mt-2 sm:mt-0 flex gap-4">
            <a href="#" className="hover:text-[#D4AF37]">Privacy</a>
            <a href="#" className="hover:text-[#D4AF37]">Terms</a>
            <a href="#" className="hover:text-[#D4AF37]">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
