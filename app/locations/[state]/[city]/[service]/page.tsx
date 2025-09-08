import { notFound } from 'next/navigation'
import { stateData, services, type StateKey } from '@/lib/locations'

export const dynamicParams = false
export function generateStaticParams() {
  const out: { state: StateKey; city: string; service: string }[] = []
  ;(Object.keys(stateData) as StateKey[]).forEach((state) => {
    stateData[state].cities.forEach((c) => {
      services.forEach((s) => out.push({ state, city: c.slug, service: s.slug }))
    })
  })
  return out
}

export default function ServicePage({ params }: { params: { state: StateKey; city: string; service: string } }) {
  const { state, city, service } = params
  const s = stateData[state]
  const c = s?.cities.find((x) => x.slug === city)
  const svc = services.find((x) => x.slug === service)
  if (!s || !c || !svc) return notFound()

  return (
    <div className="container mx-auto px-4 py-16 max-w-3xl">
      <h1 className="text-3xl font-bold mb-4">{svc.name} in {c.name}, {s.name}</h1>
      <p className="text-gray-700 mb-6">
        Trusted commercial {svc.name.toLowerCase()} services by The Total Facility Services. 
        24/7 emergency response, fully insured, OSHA-compliant, MBE certified.
      </p>
      
      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-semibold mb-4">Why Choose The Total Facility for {svc.name}?</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Same-day quotes and rapid scheduling</li>
          <li>Background-checked, uniformed professionals</li>
          <li>Quality inspections after every service</li>
          <li>Eco-friendly cleaning options available</li>
          <li>Serving {c.name} businesses since establishment</li>
        </ul>
      </div>

      <div className="bg-gray-100 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-semibold mb-4">Service Coverage in {c.name}</h2>
        <p className="mb-4">
          Our {svc.name.toLowerCase()} teams are strategically positioned throughout {s.name} 
          to ensure rapid response times for businesses in {c.name} and surrounding areas.
        </p>
        <p>
          From small offices to large commercial facilities, we deliver consistent, 
          high-quality {svc.name.toLowerCase()} that meets the unique demands of {c.name}'s 
          business environment.
        </p>
      </div>

      <div className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Get Your Free Quote</h2>
        <p className="mb-4">
          Ready to experience premium {svc.name.toLowerCase()} in {c.name}? 
          Contact The Total Facility Services today.
        </p>
        <div className="space-y-2">
          <p><strong>Phone:</strong> 1-800-TOTAL-FS</p>
          <p><strong>Email:</strong> Info@TheTotalFacility.com</p>
          <p><strong>Address:</strong> 211 East 43rd Street FL 7-100, New York, NY 10017</p>
        </div>
      </div>
    </div>
  )
}