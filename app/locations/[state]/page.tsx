import Link from 'next/link'
import { notFound } from 'next/navigation'
import { FaBuilding } from 'react-icons/fa'
import { stateData, type StateKey } from '@/lib/locations'

export const dynamicParams = false
export function generateStaticParams() {
  const states: StateKey[] = ['new-york', 'new-jersey', 'connecticut', 'florida']
  return states.map((state) => ({ state }))
}

export default function StatePage({ params }: { params: { state: StateKey } }) {
  const { state: stateParam } = params
  const state = stateData[stateParam]
  if (!state) return notFound()

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-10">
        Commercial Cleaning Services in {state.name}
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {state.cities.map((city) => (
          <Link key={city.slug} href={`/locations/${stateParam}/${city.slug}`} className="block p-6 bg-white rounded-lg shadow hover:shadow-lg">
            <FaBuilding className="text-3xl text-blue-900 mb-3" />
            <div className="text-xl font-semibold">{city.name}</div>
            <div className="text-gray-600">8 Services Available →</div>
          </Link>
        ))}
      </div>
    </div>
  )
}