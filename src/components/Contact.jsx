import { Phone, MapPin, Clock } from 'lucide-react'

function Contact() {
  return (
    <section id="contact" className="py-16 bg-amber-50/50">
      <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Hubungi Kami</h2>
          <p className="text-gray-600 mt-1 mb-6">Pre-order, catering, atau pertanyaan lainnya.</p>
          <form onSubmit={(e) => e.preventDefault()} className="grid sm:grid-cols-2 gap-4 bg-white p-6 rounded-2xl shadow-sm ring-1 ring-black/5">
            <input className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500" placeholder="Nama" required />
            <input className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500" placeholder="Nomor WhatsApp" required />
            <input className="sm:col-span-2 border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500" placeholder="Pesanan (mis. 2 porsi Ayam Pedas)" />
            <button className="sm:col-span-2 inline-flex items-center justify-center rounded-md bg-amber-600 px-4 py-2 text-white font-semibold hover:bg-amber-700">Kirim</button>
          </form>
        </div>
        <div className="space-y-4">
          <div className="p-5 rounded-2xl bg-white shadow-sm ring-1 ring-black/5">
            <div className="flex items-start gap-3">
              <Phone className="h-5 w-5 text-amber-600" />
              <div>
                <p className="font-semibold">Telepon / WA</p>
                <p className="text-gray-600">+62 812-0000-0000</p>
              </div>
            </div>
          </div>
          <div className="p-5 rounded-2xl bg-white shadow-sm ring-1 ring-black/5">
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-amber-600" />
              <div>
                <p className="font-semibold">Alamat</p>
                <p className="text-gray-600">Jl. Kenikmatan No. 12, Surabaya</p>
              </div>
            </div>
          </div>
          <div className="p-5 rounded-2xl bg-white shadow-sm ring-1 ring-black/5">
            <div className="flex items-start gap-3">
              <Clock className="h-5 w-5 text-amber-600" />
              <div>
                <p className="font-semibold">Jam Buka</p>
                <p className="text-gray-600">Setiap hari 10.00 - 21.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
