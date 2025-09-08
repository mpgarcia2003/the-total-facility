// app/locations/[state]/[city]/[service]/page.tsx
import Link from 'next/link'  // Add this import
import { notFound } from 'next/navigation'
import { stateData, services, type StateKey } from '../../../../lib/locations'

export const dynamicParams = false
export function generateStaticParams() {
  const out: { state: StateKey; city: string; service: string }[] = []
  ;(Object.keys(stateData) as StateKey[]).forEach((state) => {
    stateData[state].cities.forEach((c) => {
      services.forEach((s) => out.push({ state, city: c.slug, service: s.slug }))
    })
  })
  console.log('SERVICE ROUTES TO BUILD:', out.length)
  return out
}

export default async function ServicePage({ 
  params 
}: { 
  params: Promise<{ state: StateKey; city: string; service: string }> 
}) {
  const { state, city, service } = await params
  const s = stateData[state]
  const c = s?.cities.find((x) => x.slug === city)
  const svc = services.find((x) => x.slug === service)
  if (!s || !c || !svc) return notFound()

  // Get other services for internal linking
  const otherServices = services.filter(serv => serv.slug !== service)
  const otherCities = s.cities.filter(cityItem => cityItem.slug !== city)

  return (
    <div className="min-h-screen py-16 pt-24">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Breadcrumb Navigation */}
        <nav className="text-sm mb-6">
          <Link href="/locations" className="text-blue-600 hover:underline">
            Locations
          </Link>
          <span className="mx-2">/</span>
          <Link href={`/locations/${state}`} className="text-blue-600 hover:underline">
            {s.name}
          </Link>
          <span className="mx-2">/</span>
          <Link href={`/locations/${state}/${city}`} className="text-blue-600 hover:underline">
            {c.name}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-700">{svc.name}</span>
        </nav>

        <h1 className="text-4xl font-bold mb-6">
          {svc.name} in {c.name}, {s.name}
        </h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Service Overview</h2>
          <p className="text-gray-700 mb-6">
            Professional {svc.name.toLowerCase()} for commercial facilities in {c.name}. 
            We provide top-quality facility services with trained, insured, and background-checked staff.
          </p>
          
          <h3 className="text-xl font-semibold mb-3">What's Included:</h3>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>24/7 emergency response available</li>
            <li>Fully insured and bonded service</li>
            <li>OSHA-compliant procedures</li>
            <li>Background-checked, uniformed staff</li>
            <li>Eco-friendly cleaning options available</li>
            <li>Flexible scheduling to minimize disruption</li>
          </ul>
          
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Get a Free Quote</h3>
            <p className="mb-4">
              Contact us today for a free consultation and customized quote for {svc.name.toLowerCase()} in {c.name}.
            </p>
            <div className="flex gap-4">
              <a 
                href="tel:1-800-TOTAL-FS" 
                className="bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition"
              >
                Call: 1-800-TOTAL-FS
              </a>
              <a 
                href="mailto:info@thetotalfacility.com" 
                className="bg-gray-700 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition"
              >
                Email Quote Request
              </a>
            </div>
          </div>
        </div>

        {/* Other Services in This City */}
        <div className="bg-gray-50 rounded-lg p-6 mb-8">
          <h3 className="text-xl font-semibold mb-4">
            Other Services Available in {c.name}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {otherServices.map(serv => (
              <Link
                key={serv.slug}
                href={`/locations/${state}/${city}/${serv.slug}`}
                className="text-blue-600 hover:text-blue-800 hover:underline"
              >
                {serv.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Nearby Cities */}
        {otherCities.length > 0 && (
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold mb-4">
              {svc.name} in Other {s.name} Cities
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {otherCities.slice(0, 6).map(cityItem => (
                <Link
                  key={cityItem.slug}
                  href={`/locations/${state}/${cityItem.slug}/${service}`}
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                >
                  {cityItem.name}
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Footer Navigation */}
        <div className="text-center border-t pt-6">
          <p className="text-gray-600 mb-4">
            Serving {c.name} and surrounding areas in {s.name}
          </p>
          <div className="flex justify-center gap-4">
            <Link href={`/locations/${state}/${city}`} className="text-blue-600 hover:underline">
              ← Back to {c.name} Services
            </Link>
            <Link href={`/locations/${state}`} className="text-blue-600 hover:underline">
              View All {s.name} Locations
            </Link>
            <Link href="/locations" className="text-blue-600 hover:underline">
              All Service Areas
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}