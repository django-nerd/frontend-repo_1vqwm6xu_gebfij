import { Star } from 'lucide-react'

function Hero() {
  return (
    <section className="relative overflow-hidden pt-28">
      <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-amber-200/50 blur-3xl" />
      <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
            Cakwin Ayam Goreng
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Crispy on the outside, juicy inside. Made fresh daily with our signature spice blend.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a href="#menu" className="inline-flex items-center justify-center rounded-md bg-amber-600 px-5 py-3 text-white font-semibold shadow hover:bg-amber-700">
              Order Now
            </a>
            <a href="#story" className="inline-flex items-center justify-center rounded-md border px-5 py-3 text-gray-800 font-semibold hover:bg-gray-50">
              Our Story
            </a>
          </div>
          <div className="mt-6 flex items-center gap-2 text-amber-600">
            <Star className="h-5 w-5 fill-current" />
            <span className="text-sm font-medium">4.8/5 from 1,200+ happy customers</span>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-square rounded-3xl overflow-hidden shadow-xl ring-1 ring-black/5">
            <img
              src="https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1600&auto=format&fit=crop"
              alt="Crispy fried chicken on a plate"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
