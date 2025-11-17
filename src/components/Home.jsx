import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const heroUrl = 'https://images.unsplash.com/photo-1604908176997-4313343f5e8e?q=80&w=1600&auto=format&fit=crop'

export default function Home(){
  return (
    <div>
      {/* Hero with parallax */}
      <section className="relative h-[90vh] overflow-hidden">
        <div className="absolute inset-0" style={{
          backgroundImage: `url(${heroUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          willChange: 'transform'
        }} />
        <div className="absolute inset-0 bg-black/60" />
        <motion.div initial={{opacity:0, y:20}} animate={{opacity:1,y:0}} transition={{duration:1.1}}
          className="relative z-10 h-full flex items-center justify-center text-center px-6">
          <div>
            <h1 className="text-4xl sm:text-6xl font-serif" style={{fontFamily:'"Playfair Display", serif'}}>
              Luxury Veg Gourmet Experience
            </h1>
            <p className="mt-4 text-lg text-[#F5F3EE]/90 max-w-2xl mx-auto">
              Cinematic dining crafted with passion — pizzas with paneer, creamy pastas, and refined starters.
            </p>
            <div className="mt-8 flex items-center justify-center gap-4">
              <Link to="/reservation" className="px-5 py-3 rounded bg-[#D4AF37] text-black font-semibold hover:scale-105 transition-transform">Reserve a Table</Link>
              <Link to="/menu" className="px-5 py-3 rounded border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/10 transition">View Menu</Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Featured dishes */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.h2 initial={{opacity:0, x:-20}} whileInView={{opacity:1,x:0}} viewport={{once:true}} className="text-3xl font-serif mb-8" style={{fontFamily:'"Playfair Display", serif'}}>Featured Dishes</motion.h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[{
            title:'Paneer Truffle Pizza',
            img:'https://images.unsplash.com/photo-1542281286-9e0a16bb7366?q=80&w=1200&auto=format&fit=crop',
            price:22
          },{
            title:'Creamy Veg Pasta',
            img:'https://images.unsplash.com/photo-1520072959219-c595dc870360?q=80&w=1200&auto=format&fit=crop',
            price:19
          },{
            title:'Gourmet Starters',
            img:'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1200&auto=format&fit=crop',
            price:14
          }].map((d, i)=> (
            <motion.div key={i} whileHover={{scale:1.02}} className="group rounded-lg overflow-hidden border border-white/10 bg-black/40">
              <div className="aspect-video overflow-hidden">
                <img loading="lazy" src={d.img} alt={d.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-4 flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">{d.title}</h3>
                  <p className="text-sm text-white/70">Signature selection</p>
                </div>
                <span className="text-[#D4AF37] font-semibold">${d.price}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonial snippet */}
      <section className="bg-[#111111] py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.p initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} className="text-xl italic">
            “A warm, minimal-luxury setting with flavors that linger. Easily the best veg gourmet in town.”
          </motion.p>
          <p className="mt-4 text-[#D4AF37]">— A delighted guest</p>
        </div>
      </section>
    </div>
  )
}
