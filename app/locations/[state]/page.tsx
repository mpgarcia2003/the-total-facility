import Link from 'next/link'
import { notFound } from 'next/navigation'
import { FaBuilding } from 'react-icons/fa'
import { stateData, type StateKey } from '../../lib/locations'

export const dynamicParams = false
export function generateStaticParams() {
  const states: StateKey[] = ['new-york', 'new-jersey', 'connecticut', 'florida']
  return states.map((state) => ({ state }))
}

export default async function StatePage({ 
  params 
}: { 
  params: Promise<{ state: StateKey }> 
}) {
  const { state: stateParam } = await params
  const state = stateData[stateParam]
  if (!state) return notFound()

  // Get other states for internal linking
  const otherStates = (Object.keys(stateData) as StateKey[])
    .filter(s => s !== stateParam)
    .map(s => ({ slug: s, name: stateData[s].name }))

  return (
    <div className="min-h-screen py-16 pt-24">
      <div className="container mx-auto px-4">
        {/* Breadcrumb Navigation */}
        <nav className="text-sm mb-6 text-center">
          <Link href="/" className="text-blue-600 hover:underline">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href="/locations" className="text-blue-600 hover:underline">
            All Locations
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-700">{state.name}</span>
        </nav>

        <h1 className="text-4xl font-bold text-center mb-4">
          Commercial Cleaning Services in {state.name}
        </h1>
        <p className="text-xl text-center text-gray-600 mb-12">
          Select your city for local facility services
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {state.cities.map((city) => (
            <Link
              key={city.slug}
              href={`/locations/${stateParam}/${city.slug}`}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow block"
            >
              <FaBuilding className="text-3xl text-blue-900 mb-4" />
              <h2 className="text-xl font-bold text-blue-900 mb-2">{city.name}</h2>
              <p className="text-gray-600">8 Services Available</p>
              <p className="text-blue-600 mt-2">View Services →</p>
            </Link>
          ))}
        </div>

        {/* Other States Section */}
        <div className="mt-12 bg-gray-50 rounded-lg p-6 max-w-6xl mx-auto">
          <h3 className="text-xl font-semibold mb-4 text-center">
            We Also Serve
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {otherStates.map(otherState => (
              <Link
                key={otherState.slug}
                href={`/locations/${otherState.slug}`}
                className="bg-white px-4 py-2 rounded-lg shadow hover:shadow-md transition-shadow text-blue-600 hover:text-blue-800"
              >
                {otherState.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Footer Links */}
        <div className="text-center mt-12">
          <Link 
            href="/locations" 
            className="text-blue-600 hover:underline"
          >
            ← Back to All Service Locations
          </Link>
        </div>
      </div>
    </div>
  )
}