import Link from 'next/link'
import { FaMapMarkerAlt } from 'react-icons/fa'

export default function LocationsPage() {
  return (
    <div className="min-h-screen py-16 pt-24">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4">Service Locations</h1>
        <p className="text-xl text-center text-gray-600 mb-12">
          Select your state to find The Total Facility services near you
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <Link href="/locations/new-york" className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow text-center">
            <FaMapMarkerAlt className="text-4xl text-blue-900 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-blue-900 mb-2">New York</h2>
            <p className="text-gray-600">7 Cities Served</p>
          </Link>
          
          <Link href="/locations/new-jersey" className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow text-center">
            <FaMapMarkerAlt className="text-4xl text-blue-900 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-blue-900 mb-2">New Jersey</h2>
            <p className="text-gray-600">7 Cities Served</p>
          </Link>
          
          <Link href="/locations/connecticut" className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow text-center">
            <FaMapMarkerAlt className="text-4xl text-blue-900 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-blue-900 mb-2">Connecticut</h2>
            <p className="text-gray-600">5 Cities Served</p>
          </Link>
          
          <Link href="/locations/florida" className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow text-center">
            <FaMapMarkerAlt className="text-4xl text-blue-900 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-blue-900 mb-2">Florida</h2>
            <p className="text-gray-600">4 Cities Served</p>
          </Link>
        </div>
      </div>
    </div>
  )
}