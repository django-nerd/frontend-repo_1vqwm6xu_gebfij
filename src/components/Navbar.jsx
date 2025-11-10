import { ShoppingBag, Phone, MapPin } from 'lucide-react'

function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-white/70 border-b border-black/5">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-amber-500 grid place-content-center text-white font-bold">
            C
          </div>
          <div>
            <p className="font-semibold leading-tight">Cakwin</p>
            <p className="text-xs text-gray-500 -mt-0.5">Ayam Goreng</p>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
          <a href="#menu" className="hover:text-amber-600">Menu</a>
          <a href="#story" className="hover:text-amber-600">Our Story</a>
          <a href="#contact" className="hover:text-amber-600">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href="tel:+6200000000" className="hidden sm:flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-amber-700">
            <Phone className="h-4 w-4" />
            <span>Order</span>
          </a>
          <a href="#menu" className="inline-flex items-center gap-2 bg-amber-600 text-white px-3 py-2 rounded-md text-sm font-semibold hover:bg-amber-700">
            <ShoppingBag className="h-4 w-4" />
            <span>See Menu</span>
          </a>
        </div>
      </div>
    </header>
  )
}

export default Navbar
