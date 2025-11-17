import { useEffect, useState } from 'react'

export default function Admin(){
  const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
  const [menuJson, setMenuJson] = useState('[\n  {"name":"Paneer Truffle Pizza","description":"Hand-tossed, truffle oil","price":22,"category":"Pizzas","image_url":"","featured":true,"vegetarian":true}\n]')
  const [reservations, setReservations] = useState([])

  useEffect(()=>{
    fetch(`${base}/api/menu`).then(r=>r.json()).then(d=> setMenuJson(JSON.stringify(d, null, 2))).catch(()=>{})
  },[])

  const saveMenu = async ()=>{
    try{
      const arr = JSON.parse(menuJson)
      // batch insert via analytics endpoint as placeholder is not ideal; here we call a special admin import route
      const res = await fetch(`${base}/admin/import-menu`, {method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({items:arr})})
      const data = await res.json()
      alert(data.message || 'Saved')
    }catch(e){
      alert('Invalid JSON')
    }
  }

  const loadReservations = async ()=>{
    const res = await fetch(`${base}/admin/reservations`)
    const data = await res.json()
    setReservations(data || [])
  }

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-serif mb-6" style={{fontFamily:'\"Playfair Display\", serif'}}>Admin</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-black/40 p-6 rounded-lg border border-white/10">
          <h2 className="font-semibold mb-3">Menu JSON</h2>
          <textarea rows={18} value={menuJson} onChange={e=>setMenuJson(e.target.value)} className="w-full px-3 py-2 bg-black/50 border border-white/10 rounded font-mono text-sm"/>
          <button onClick={saveMenu} className="mt-3 px-4 py-2 rounded bg-[#D4AF37] text-black">Save Menu</button>
        </div>
        <div className="bg-black/40 p-6 rounded-lg border border-white/10">
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-semibold">Reservations</h2>
            <button onClick={loadReservations} className="px-3 py-2 rounded border border-[#D4AF37] text-[#D4AF37]">Refresh</button>
          </div>
          <div className="max-h-[520px] overflow-auto divide-y divide-white/10">
            {reservations.length===0 && <p className="text-white/70">No reservations yet.</p>}
            {reservations.map((r,i)=> (
              <div key={i} className="py-3 text-sm">
                <div className="font-semibold">{r.name} • {r.date} {r.time} • {r.guests} guests</div>
                <div className="text-white/70">{r.email} {r.phone? '• '+r.phone:''}</div>
                {r.notes && <div className="text-white/70">{r.notes}</div>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
