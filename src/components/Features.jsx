import { ShieldCheck, Sparkles, FlameKindling } from 'lucide-react'

function Features() {
  const feats = [
    {
      icon: ShieldCheck,
      title: 'Hygienic & Halal',
      desc: 'Prepared in a clean kitchen with certified halal ingredients.'
    },
    {
      icon: Sparkles,
      title: 'Crispy Guarantee',
      desc: 'Perfect crunch from our double-fry technique.'
    },
    {
      icon: FlameKindling,
      title: 'Signature Spices',
      desc: 'A family recipe perfected over generations.'
    }
  ]
  return (
    <section id="story" className="py-16">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Why People Love Cakwin</h2>
        <p className="text-gray-600 mt-1 mb-8">Quality you can taste in every bite</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {feats.map((f) => (
            <div key={f.title} className="p-6 rounded-2xl bg-white shadow-sm ring-1 ring-black/5">
              <div className="h-10 w-10 rounded-lg bg-amber-100 text-amber-700 grid place-content-center mb-3">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-gray-900">{f.title}</h3>
              <p className="text-gray-600 text-sm mt-1">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
