import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Menu from './components/Menu'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white text-gray-900 font-inter">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Menu />
        <Contact />
      </main>
      <footer className="border-t border-black/5 py-8">
        <div className="mx-auto max-w-6xl px-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gray-600">
          <p>© {new Date().getFullYear()} Cakwin Ayam Goreng. All rights reserved.</p>
          <p>Made fresh daily • Surabaya</p>
        </div>
      </footer>
    </div>
  )
}

export default App
