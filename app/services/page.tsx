import Link from 'next/link'
import { services } from '../lib/locations'

export default function ServicesPage() {
  return (
    <div className="min-h-screen py-16 pt-24">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4">Our Services</h1>
        <p className="text-xl text-center text-gray-600 mb-12">
          Professional commercial cleaning and facility management services across NY, NJ, CT, and FL
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow group"
            >
              <h2 className="text-xl font-bold text-blue-900 mb-3 group-hover:text-blue-700 transition">
                {service.name}
              </h2>
              <p className="text-gray-600 text-sm mb-4">
                {service.shortDesc}
              </p>
              <div className="text-sm text-gray-500 mb-4">
                Starting at <span className="font-bold text-blue-900">{service.basePrice}</span>
              </div>
              <div className="text-blue-600 hover:underline font-semibold">
                View Details & Locations →
              </div>
            </Link>
          ))}
        </div>
        
        <div className="text-center bg-blue-50 p-8 rounded-lg max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Serving 42 Cities Across 4 States</h2>
          <p className="mb-6">
            Click any service above to see availability in your area and get a free quote
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-white px-4 py-2 rounded-lg shadow">New York • 10 Cities</span>
            <span className="bg-white px-4 py-2 rounded-lg shadow">New Jersey • 12 Cities</span>
            <span className="bg-white px-4 py-2 rounded-lg shadow">Connecticut • 10 Cities</span>
            <span className="bg-white px-4 py-2 rounded-lg shadow">Florida • 10 Cities</span>
          </div>
        </div>
      </div>
    </div>
  )
}
