import Link from 'next/link'
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

  const otherServices = services.filter(serv => serv.slug !== service)
  const otherCities = s.cities.filter(cityItem => cityItem.slug !== city)

  return (
    <div className="min-h-screen py-16 pt-24">
      <div className="container mx-auto px-4 max-w-4xl">
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

        <h1 className="text-4xl font-bold mb-2">
          {svc.name} in {c.name}, {s.name}
        </h1>
        
        {/* Local service area info */}
        <p className="text-lg text-gray-600 mb-6">
          Serving {c.areasCovered.join(', ')} • {c.responseTime} response
        </p>

        {/* Main service description with localized content */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Service Overview</h2>
          <p className="text-gray-700 mb-6">
            {svc.longDesc}
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Service Features:</h3>
              <ul className="list-disc pl-6 space-y-1">
                {svc.features.map((feature, idx) => (
                  <li key={idx} className="text-gray-700">{feature}</li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3">Local Expertise:</h3>
              <ul className="space-y-2">
                <li className="text-gray-700">
                  <strong>Specialties:</strong> {c.specialties.join(', ')}
                </li>
                <li className="text-gray-700">
                  <strong>Industries:</strong> {svc.industries.join(', ')}
                </li>
                <li className="text-gray-700">
                  <strong>Certifications:</strong> {c.certifications.join(', ')}
                </li>
                <li className="text-gray-700">
                  <strong>Coverage:</strong> {c.neighborhoods}
                </li>
              </ul>
            </div>
          </div>

          {/* Pricing and contract info */}
          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-sm text-gray-600">Starting Price</p>
                <p className="text-xl font-bold text-blue-900">{svc.basePrice}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Minimum Contract</p>
                <p className="text-xl font-bold text-blue-900">{c.minContract}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Response Time</p>
                <p className="text-xl font-bold text-blue-900">{c.responseTime}</p>
              </div>
            </div>
          </div>

          {/* Local testimonial */}
          {c.localTestimonial.text && (
            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <h3 className="text-lg font-semibold mb-3">What Our {c.name} Clients Say:</h3>
              <blockquote className="italic text-gray-700 mb-2">
                "{c.localTestimonial.text}"
              </blockquote>
              <p className="text-sm text-gray-600">— {c.localTestimonial.author}</p>
            </div>
          )}

          {/* Call to action with local phone */}
          <div className="bg-blue-900 text-white p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Get Your Free Quote Today</h3>
            <p className="mb-4">
              {c.majorClients}. {c.competitorPricing}.
            </p>
            <div className="flex gap-4 flex-wrap">
              <a 
                href={`tel:${c.localPhone.replace(/\D/g, '')}`}
                className="bg-white text-blue-900 px-6 py-3 rounded-lg hover:bg-gray-100 transition font-semibold"
              >
                Call: {c.localPhone}
              </a>
              <a 
                href="mailto:info@thetotalfacility.com" 
                className="bg-blue-800 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
              >
                Email Quote Request
              </a>
            </div>
            <p className="text-sm mt-4 text-blue-100">
              {c.parkingNote} • {c.unionStatus}
            </p>
          </div>
        </div>

        {/* State licensing info */}
        <div className="bg-gray-50 rounded-lg p-6 mb-8">
          <h3 className="text-lg font-semibold mb-3">Licensed & Insured in {s.name}</h3>
          <ul className="space-y-2 text-gray-700">
            <li><strong>License:</strong> {s.licenseNumber}</li>
            <li><strong>Insurance:</strong> {s.insurance}</li>
            <li><strong>Emergency Line:</strong> {s.emergencyPhone}</li>
          </ul>
        </div>

        {/* Other services in this city */}
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

        {/* Other cities */}
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

        {/* Footer navigation */}
        <div className="text-center border-t pt-6">
          <p className="text-gray-600 mb-4">
            Professional {svc.name.toLowerCase()} serving {c.areasCovered.join(', ')}
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
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