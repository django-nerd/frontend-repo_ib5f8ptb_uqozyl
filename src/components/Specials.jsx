import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

function Countdown({ until }){
  const [left, setLeft] = useState(0)
  useEffect(()=>{
    const timer = setInterval(()=>{
      const diff = new Date(until).getTime() - Date.now()
      setLeft(diff > 0 ? diff : 0)
    },1000)
    return ()=>clearInterval(timer)
  },[until])
  const s = Math.floor(left/1000)
  const d = Math.floor(s/86400)
  const h = Math.floor((s%86400)/3600)
  const m = Math.floor((s%3600)/60)
  const ss = s%60
  return (
    <div className="flex gap-3 text-black">
      {[{l:'D',v:d},{l:'H',v:h},{l:'M',v:m},{l:'S',v:ss}].map((t,i)=> (
        <div key={i} className="px-3 py-2 bg-[#D4AF37] rounded text-center min-w-[60px]">
          <div className="text-2xl font-bold">{String(t.v).padStart(2,'0')}</div>
          <div className="text-xs opacity-70">{t.l}</div>
        </div>
      ))}
    </div>
  )
}

export default function Specials(){
  const [items, setItems] = useState([])
  useEffect(()=>{
    const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
    fetch(`${base}/api/specials`).then(r=>r.json()).then(setItems).catch(()=>setItems([]))
  },[])

  const sp = items[0]

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid md:grid-cols-2 gap-10 items-center">
      <div>
        <h1 className="text-3xl font-serif" style={{fontFamily:'"Playfair Display", serif'}}>Specials</h1>
        {sp ? (
          <div className="mt-6">
            <h2 className="text-2xl font-semibold">{sp.title}</h2>
            <p className="text-white/80 mt-2">{sp.description}</p>
            {sp.valid_until && (
              <div className="mt-6">
                <Countdown until={sp.valid_until} />
              </div>
            )}
            <button className="mt-8 px-5 py-3 rounded bg-[#D4AF37] text-black font-semibold hover:scale-105 transition-transform">{sp.cta_text || 'Reserve Now'}</button>
          </div>
        ) : (
          <p className="text-white/70 mt-6">No active offers right now.</p>
        )}
      </div>
      <motion.div initial={{opacity:0,x:20}} whileInView={{opacity:1,x:0}} viewport={{once:true}} className="aspect-[4/3] overflow-hidden rounded-lg border border-white/10">
        <img loading="lazy" src={sp?.hero_image_url || 'https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?q=80&w=1400&auto=format&fit=crop'} alt="special" className="w-full h-full object-cover" />
      </motion.div>
    </section>
  )
}
