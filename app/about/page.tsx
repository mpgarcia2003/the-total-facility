import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="min-h-screen py-16 pt-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-center mb-8">About The Total Facility</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Your Total Facility Partner</h2>
          <p className="text-gray-700 mb-4">
            The Total Facility Services LLC is a full-service commercial cleaning and facility management company 
            serving the Tri-State area (New York, New Jersey, Connecticut) and Florida. We specialize in 
            comprehensive facility solutions that keep your business running smoothly.
          </p>
          <p className="text-gray-700 mb-4">
            As an MBE-certified company, we bring diversity, innovation, and excellence to every project. 
            Our team of trained professionals is available 24/7 for both scheduled services and emergency responses.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
            <p className="text-gray-700">
              To provide exceptional facility services that exceed expectations, delivered by trained professionals 
              who care about your success as much as you do.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Why Choose Us</h3>
            <ul className="text-gray-700 space-y-1">
              <li>• MBE Certified</li>
              <li>• Licensed, Bonded & Insured</li>
              <li>• 24/7 Emergency Response</li>
              <li>• OSHA Compliant</li>
            </ul>
          </div>
        </div>

        <div className="text-center">
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