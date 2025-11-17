import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const CATEGORIES = ['Pizzas','Pastas','Starters']

export default function Menu(){
  const [items, setItems] = useState([])
  const [active, setActive] = useState('Pizzas')

  useEffect(()=>{
    const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
    fetch(`${base}/api/menu?category=${active}`)
      .then(r=>r.json()).then(setItems).catch(()=>setItems([]))
  },[active])

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-serif mb-6" style={{fontFamily:'"Playfair Display", serif'}}>Menu</h1>
      <div className="flex flex-wrap gap-3 mb-8">
        {CATEGORIES.map(c=> (
          <button key={c} onClick={()=>setActive(c)}
            className={`px-4 py-2 rounded border ${active===c? 'bg-[#D4AF37] text-black border-transparent':'border-[#D4AF37] text-[#D4AF37]'} transition`}>{c}</button>
        ))}
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.length===0 && (
          <p className="text-white/70">No items yet. Use Admin to add menu.</p>
        )}
        {items.map((d,i)=> (
          <motion.div key={i} whileHover={{scale:1.02}} className="group rounded-lg overflow-hidden border border-white/10 bg-black/40">
            <div className="aspect-video overflow-hidden">
              {d.image_url ? (
                <img loading="lazy" src={d.image_url} alt={d.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              ) : (
                <div className="w-full h-full grid place-items-center text-white/40">No image</div>
              )}
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">{d.name}</h3>
                <span className="text-[#D4AF37] font-semibold">${d.price}</span>
              </div>
              <p className="text-sm text-white/70 mt-2">{d.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
