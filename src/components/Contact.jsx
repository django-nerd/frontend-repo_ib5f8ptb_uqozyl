import { useState } from 'react'

export default function Contact(){
  const [form, setForm] = useState({name:'', email:'', message:''})
  const [done, setDone] = useState(false)
  const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const submit = async (e)=>{
    e.preventDefault()
    const res = await fetch(`${base}/api/contact`, {method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(form)})
    if(res.ok){ setDone(true) } else { alert('Failed to send') }
  }

  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid md:grid-cols-2 gap-10">
      <div>
        <h1 className="text-3xl font-serif mb-6" style={{fontFamily:'\"Playfair Display\", serif'}}>Contact</h1>
        <p className="text-white/80">Reach our team for private dining, events, or questions.</p>
        <div className="mt-6 space-y-2 text-white/80">
          <p>Email: hello@eclatdining.com</p>
          <p>Phone: +1 (555) 010-9876</p>
          <p>Address: 88 Gourmet Ave, Culinary District</p>
        </div>
        <div className="mt-6 aspect-video bg-black/40 border border-white/10 rounded grid place-items-center">Map Embed</div>
      </div>
      <form onSubmit={submit} className="bg-black/40 p-6 rounded-lg border border-white/10">
        {!done ? (
          <>
            {['name','email'].map((k)=> (
              <div key={k} className="mb-4">
                <label className="block text-sm mb-1 capitalize">{k}</label>
                <input required type={k==='email'? 'email':'text'} value={form[k]} onChange={e=>setForm({...form,[k]:e.target.value})}
                  className="w-full px-3 py-2 bg-black/50 border border-white/10 rounded outline-none focus:ring-2 focus:ring-[#D4AF37]"/>
              </div>
            ))}
            <div className="mb-4">
              <label className="block text-sm mb-1">Message</label>
              <textarea required rows={5} value={form.message} onChange={e=>setForm({...form,message:e.target.value})}
                className="w-full px-3 py-2 bg-black/50 border border-white/10 rounded outline-none focus:ring-2 focus:ring-[#D4AF37]"/>
            </div>
            <button className="px-5 py-3 rounded bg-[#D4AF37] text-black font-semibold hover:scale-105 transition-transform">Send</button>
          </>
        ) : (
          <div className="text-center">
            <div className="text-5xl">✨</div>
            <p className="mt-4">Thanks for reaching out. We'll get back soon.</p>
          </div>
        )}
      </form>
    </section>
  )
}
