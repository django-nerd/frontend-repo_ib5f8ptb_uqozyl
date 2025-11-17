import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Reservation(){
  const [form, setForm] = useState({name:'',email:'',phone:'',date:'',time:'',guests:2,notes:'', pay_now:false})
  const [success, setSuccess] = useState(null)
  const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const submit = async (e)=>{
    e.preventDefault()
    const res = await fetch(`${base}/api/reservations`,{method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(form)})
    const data = await res.json()
    if(res.ok){
      setSuccess({ref:data.reference})
    } else {
      alert('Failed to submit')
    }
  }

  return (
    <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-serif mb-6" style={{fontFamily:'\"Playfair Display\", serif'}}>Reservation</h1>
      <form onSubmit={submit} className="grid sm:grid-cols-2 gap-4 bg-black/40 p-6 rounded-lg border border-white/10">
        {['name','email','phone','date','time','guests'].map((k)=> (
          <div key={k} className={k==='notes' ? 'sm:col-span-2': ''}>
            <label className="block text-sm mb-1 capitalize">{k}</label>
            <input required={k!=='phone'} type={k==='date'? 'date': k==='time'? 'time': k==='guests'? 'number':'text'} min={k==='guests'?1:undefined}
              value={form[k]}
              onChange={e=>setForm({...form,[k]:k==='guests'? Number(e.target.value): e.target.value})}
              className="w-full px-3 py-2 bg-black/50 border border-white/10 rounded outline-none focus:ring-2 focus:ring-[#D4AF37]"/>
          </div>
        ))}
        <div className="sm:col-span-2">
          <label className="block text-sm mb-1">Notes</label>
          <textarea value={form.notes} onChange={e=>setForm({...form, notes:e.target.value})} className="w-full px-3 py-2 bg-black/50 border border-white/10 rounded outline-none focus:ring-2 focus:ring-[#D4AF37]" rows={4}/>
        </div>
        <div className="sm:col-span-2 flex items-center gap-3">
          <input id="pay" type="checkbox" checked={form.pay_now} onChange={e=>setForm({...form, pay_now: e.target.checked})} />
          <label htmlFor="pay">Pay now (Stripe/Razorpay integration ready)</label>
        </div>
        <button className="sm:col-span-2 px-5 py-3 rounded bg-[#D4AF37] text-black font-semibold hover:scale-105 transition-transform">Reserve</button>
      </form>

      <AnimatePresence>
        {success && (
          <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="fixed inset-0 bg-black/80 grid place-items-center z-50">
            <motion.div initial={{scale:0.9, opacity:0}} animate={{scale:1, opacity:1}} exit={{scale:0.9, opacity:0}} className="bg-[#0E0E0E] border border-white/10 rounded-lg p-8 text-center max-w-md w-full">
              <div className="text-5xl">✅</div>
              <h3 className="text-2xl mt-4">Reservation Confirmed</h3>
              <p className="text-white/70 mt-2">Reference: {success.ref}</p>
              <button onClick={()=>setSuccess(null)} className="mt-6 px-4 py-2 rounded bg-[#D4AF37] text-black">Close</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
