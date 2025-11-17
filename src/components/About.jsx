import { motion } from 'framer-motion'

export default function About(){
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <motion.div initial={{opacity:0,x:-20}} whileInView={{opacity:1,x:0}} viewport={{once:true}}>
          <h1 className="text-3xl font-serif mb-4" style={{fontFamily:'"Playfair Display", serif'}}>Our Story</h1>
          <p className="text-white/80 leading-relaxed">
            Éclat Dining was born from a passion to elevate vegetarian cuisine to cinematic luxury. Our chefs
            craft plates that are lush yet minimalist, using seasonal produce and slow techniques.
          </p>
          <ul className="mt-6 space-y-3 text-white/80">
            {[
              {t:'Handmade dough, slow-fermented'},
              {t:'Cold-pressed olive oils & truffles'},
              {t:'Creamy pastas with vegetarian finesse'},
              {t:'Sustainable sourcing & zero meat kitchen'},
            ].map((i,idx)=>(
              <li key={idx} className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full" style={{background:'#D4AF37'}}></span>
                <span>{i.t}</span>
              </li>
            ))}
          </ul>
        </motion.div>
        <motion.div initial={{opacity:0,x:20}} whileInView={{opacity:1,x:0}} viewport={{once:true}} className="aspect-[4/5] overflow-hidden rounded-lg border border-white/10">
          <img loading="lazy" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1551218808-94e220e084d2?q=80&w=1200&auto=format&fit=crop" alt="Chef"/>
        </motion.div>
      </div>
    </section>
  )
}
