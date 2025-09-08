import Link from 'next/link'

export default function EmergencyPage() {
  return (
    <div className="min-h-screen py-16 pt-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-red-50 border-2 border-red-200 rounded-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-center text-red-900 mb-4">
            24/7 Emergency Cleaning Services
          </h1>
          <div className="text-center">
            <p className="text-2xl font-semibold text-red-800 mb-2">
              Call Now for Immediate Response
            </p>
            <a 
              href="tel:1-800-TOTAL-FS" 
              className="text-3xl font-bold text-red-900 hover:text-red-700"
            >
              1-800-TOTAL-FS
            </a>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Emergency Services Available 24/7</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Water Damage & Flooding</h3>
              <p className="text-gray-700">
                Rapid water extraction, drying, and restoration to prevent mold and structural damage.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Fire & Smoke Damage</h3>
              <p className="text-gray-700">
                Complete cleanup, odor removal, and restoration after fire incidents.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Biohazard Cleanup</h3>
              <p className="text-gray-700">
                Safe, compliant cleanup of biological hazards following OSHA standards.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Storm Damage</h3>
              <p className="text-gray-700">
                Debris removal, structural cleaning, and facility restoration after severe weather.
              </p>
            </div>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Our Emergency Response Promise</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✓ Response within 2 hours</li>
              <li>✓ Available 24 hours a day, 365 days a year</li>
              <li>✓ Fully equipped emergency response vehicles</li>
              <li>✓ Trained and certified emergency cleanup crews</li>
              <li>✓ Direct insurance billing available</li>
            </ul>
          </div>
        </div>

        <div className="text-center space-y-4">
          <p className="text-gray-600">
            For non-emergency services or scheduled cleaning:
          </p>
          <Link 
            href="/services" 
            className="bg-gray-700 text-white px-8 py-3 rounded-lg hover:bg-gray-600 transition inline-block"
          >
            View All Services
          </Link>
        </div>
      </div>
    </div>
  )
}