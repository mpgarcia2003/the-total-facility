import Link from 'next/link'
import { services } from '@/lib/locations'

export default function ServicesPage() {
  return (
    <div className="min-h-screen py-16 pt-24">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4">Our Services</h1>
        <p className="text-xl text-center text-gray-600 mb-12">
          Professional commercial cleaning and facility management services
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
          {services.map((service) => (
            <div
              key={service.slug}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <h2 className="text-lg font-bold text-blue-900 mb-2">
                {service.name}
              </h2>
              <p className="text-gray-600 text-sm mb-4">
                Professional {service.name.toLowerCase()} for commercial facilities across NY, NJ, CT, and FL
              </p>
              <Link 
                href="/locations" 
                className="text-blue-600 hover:underline"
              >
                View Locations →
              </Link>
            </div>
          ))}
        </div>
        
        <div className="text-center bg-blue-50 p-8 rounded-lg max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="mb-6">
            Choose your location to see detailed service information and get a free quote
          </p>
          <Link 
            href="/locations" 
            className="bg-blue-900 text-white px-8 py-3 rounded-lg hover:bg-blue-800 transition inline-block"
          >
            Find Your Location
          </Link>
        </div>
      </div>
    </div>
  )
}