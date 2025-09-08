import Link from 'next/link'
import { notFound } from 'next/navigation'
import { stateData, services, type StateKey } from '../../../lib/locations'

export const dynamicParams = false
export function generateStaticParams() {
  const out: { state: StateKey; city: string }[] = []
  ;(Object.keys(stateData) as StateKey[]).forEach((state) => {
    stateData[state].cities.forEach((c) => out.push({ state, city: c.slug }))
  })
  return out
}

export default async function CityPage({ 
  params 
}: { 
  params: Promise<{ state: StateKey; city: string }> 
}) {
  const { state, city } = await params
  const stateEntry = stateData[state]
  const cityEntry = stateEntry?.cities.find((c) => c.slug === city)
  if (!stateEntry || !cityEntry) return notFound()

  // Get other cities for internal linking
  const otherCities = stateEntry.cities.filter(c => c.slug !== city)

  return (
    <div className="min-h-screen py-16 pt-24">
      <div className="container mx-auto px-4">
        {/* Breadcrumb Navigation */}
        <nav className="text-sm mb-6 text-center">
          <Link href="/locations" className="text-blue-600 hover:underline">
            All Locations
          </Link>
          <span className="mx-2">/</span>
          <Link href={`/locations/${state}`} className="text-blue-600 hover:underline">
            {stateEntry.name}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-700">{cityEntry.name}</span>
        </nav>

        <h1 className="text-4xl font-bold text-center mb-4">
          Commercial Cleaning Services in {cityEntry.name}, {stateEntry.name}
        </h1>
        <p className="text-xl text-center text-gray-600 mb-12">
          Choose your service type for detailed information and pricing
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/locations/${state}/${city}/${service.slug}`}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow text-center block"
            >
              <div className="text-lg font-bold text-blue-900 mb-2">
                {service.name}
              </div>
              <p className="text-gray-600 text-sm mb-3">
                Professional {service.name.toLowerCase()} for commercial facilities
              </p>
              <p className="text-blue-600 mt-2 font-semibold">
                Learn More →
              </p>
            </Link>
          ))}
        </div>

        {/* Other Cities Section */}
        {otherCities.length > 0 && (
          <div className="mt-12 bg-gray-50 rounded-lg p-6 max-w-6xl mx-auto">
            <h3 className="text-xl font-semibold mb-4 text-center">
              Also Serving Other {stateEntry.name} Cities
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {otherCities.map(otherCity => (
                <Link
                  key={otherCity.slug}
                  href={`/locations/${state}/${otherCity.slug}`}
                  className="text-blue-600 hover:text-blue-800 hover:underline px-3 py-1"
                >
                  {otherCity.name}
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Footer Links */}
        <div className="text-center mt-12">
          <Link 
            href={`/locations/${state}`} 
            className="text-blue-600 hover:underline"
          >
            ← Back to All {stateEntry.name} Cities
          </Link>
        </div>
      </div>
    </div>
  )
}