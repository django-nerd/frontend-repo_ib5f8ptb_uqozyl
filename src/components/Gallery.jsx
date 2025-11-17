import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Gallery(){
  const [images, setImages] = useState([])
  const [active, setActive] = useState(null)
  useEffect(()=>{
    const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
    fetch(`${base}/api/gallery`).then(r=>r.json()).then(setImages).catch(()=>setImages([]))
  },[])

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-serif mb-6" style={{fontFamily:'"Playfair Display", serif'}}>Gallery</h1>
      <div className="columns-2 md:columns-3 gap-4 space-y-4">
        {images.map((img,i)=> (
          <motion.img key={i} loading="lazy" onClick={()=>setActive(img)} whileHover={{scale:1.02}}
            className="w-full rounded-lg cursor-zoom-in border border-white/10" src={img.url} alt={img.caption || 'gallery'} />
        ))}
      </div>

      <AnimatePresence>
        {active && (
          <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="fixed inset-0 bg-black/80 grid place-items-center z-50">
            <motion.div initial={{scale:0.95, opacity:0}} animate={{scale:1, opacity:1}} exit={{scale:0.95, opacity:0}} className="max-w-3xl w-full p-4">
              <img src={active.url} alt={active.caption} className="w-full rounded-lg" />
              {active.caption && <p className="text-center mt-3 text-white/80">{active.caption}</p>}
              <button onClick={()=>setActive(null)} className="mt-4 w-full px-4 py-2 rounded bg-[#D4AF37] text-black">Close</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
