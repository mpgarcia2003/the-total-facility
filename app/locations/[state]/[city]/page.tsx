import Link from 'next/link'
import { notFound } from 'next/navigation'
import { stateData, services, type StateKey } from '@/lib/locations'

export const dynamicParams = false
export function generateStaticParams() {
  const out: { state: StateKey; city: string }[] = []
  ;(Object.keys(stateData) as StateKey[]).forEach((state) => {
    stateData[state].cities.forEach((c) => out.push({ state, city: c.slug }))
  })
  return out
}

export default function CityPage({ params }: { params: { state: StateKey; city: string } }) {
  const { state, city } = params
  const s = stateData[state]
  const c = s?.cities.find((x) => x.slug === city)
  if (!s || !c) return notFound()

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-10">
        Commercial Cleaning Services in {c.name}, {s.name}
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {services.map((svc) => (
          <Link key={svc.slug} href={`/locations/${state}/${city}/${svc.slug}`} className="block p-6 bg-white rounded-lg shadow hover:shadow-lg text-center">
            <div className="font-semibold">{svc.name}</div>
            <div className="text-blue-700 mt-2">Learn More →</div>
          </Link>
        ))}
      </div>
    </div>
  )
}