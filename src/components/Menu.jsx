function Menu() {
  const items = [
    {
      name: "Ayam Goreng Original",
      desc: "Classic crispy chicken with secret spices",
      price: 28000,
      img: "https://images.unsplash.com/photo-1604908554027-3481f59caae5?q=80&w=1600&auto=format&fit=crop",
    },
    {
      name: "Ayam Goreng Pedas",
      desc: "Spicy kick with chili blend",
      price: 30000,
      img: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?q=80&w=1600&auto=format&fit=crop",
    },
    {
      name: "Paket Nasi Ayam",
      desc: "Chicken, rice, sambal, and iced tea",
      price: 35000,
      img: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1600&auto=format&fit=crop",
    },
    {
      name: "Kulit Crispy",
      desc: "Crunchy chicken skin with lime",
      price: 15000,
      img: "https://images.unsplash.com/photo-1600326145359-3a58f15256b3?q=80&w=1600&auto=format&fit=crop",
    },
  ]

  return (
    <section id="menu" className="py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Menu Favorit</h2>
            <p className="text-gray-600 mt-1">Freshly fried, served hot and crispy</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex items-center gap-2 text-amber-700 font-semibold">Pre-order →</a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it) => (
            <article key={it.name} className="group rounded-2xl overflow-hidden bg-white shadow-sm ring-1 ring-black/5">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={it.img} alt={it.name} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900">{it.name}</h3>
                <p className="text-sm text-gray-600 mt-1">{it.desc}</p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="font-bold text-amber-700">Rp {it.price.toLocaleString('id-ID')}</span>
                  <button className="text-sm font-semibold text-white bg-amber-600 px-3 py-1.5 rounded-md hover:bg-amber-700">Add</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Menu
