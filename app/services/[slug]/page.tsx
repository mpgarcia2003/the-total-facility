import { notFound } from 'next/navigation'
import Link from 'next/link'
import { services, stateData } from '@/app/lib/locations'
import QuoteForm from '@/components/QuoteForm'
import { FaPhone, FaClock, FaCheckCircle, FaMapMarkerAlt } from 'react-icons/fa'

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }))
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services.find(s => s.slug === params.slug)
  
  if (!service) {
    notFound()
  }

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">{service.name}</h1>
            <p className="text-2xl mb-8">{service.shortDesc}</p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 bg-white/10 px-6 py-3 rounded-lg">
                <FaClock className="text-xl" />
                <span>24/7 Available</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-6 py-3 rounded-lg">
                <FaCheckCircle className="text-xl" />
                <span>MBE Certified</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-6 py-3 rounded-lg">
                <FaMapMarkerAlt className="text-xl" />
                <span>42 Cities Served</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Description */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">About This Service</h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">{service.longDesc}</p>
            
            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <p className="text-sm text-gray-600">Starting Price</p>
                  <p className="text-2xl font-bold text-blue-900">{service.basePrice}</p>
                </div>
                <a 
                  href="tel:8444543101"
                  className="bg-blue-900 text-white px-8 py-3 rounded-lg hover:bg-blue-800 transition flex items-center gap-2"
                >
                  <FaPhone />
                  Call Now: (844) 454-3101
                </a>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-4">What&apos;s Included</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {service.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                  <FaCheckCircle className="text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-bold mb-4">Industries We Serve</h3>
            <div className="flex flex-wrap gap-3 mb-8">
              {service.industries.map((industry, index) => (
                <span 
                  key={index}
                  className="bg-blue-100 text-blue-900 px-4 py-2 rounded-full font-semibold"
                >
                  {industry}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Locations */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4">
              Available in 42 Cities Across 4 States
            </h2>
            <p className="text-xl text-center text-gray-600 mb-12">
              Professional {service.name.toLowerCase()} services near you
            </p>

            {/* Group cities by state */}
            {Object.entries(stateData).map(([stateKey, stateInfo]) => (
              <div key={stateKey} className="mb-12">
                <h3 className="text-2xl font-bold text-blue-900 mb-6 flex items-center gap-3">
                  <FaMapMarkerAlt />
                  {stateInfo.name}
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {stateInfo.cities.map((city) => (
                    <Link
                      key={city.slug}
                      href={`/locations/${stateKey}/${city.slug}/${service.slug}`}
                      className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
                    >
                      <h4 className="text-lg font-bold text-blue-900 mb-2">{city.name}</h4>
                      <p className="text-sm text-gray-600 mb-3">
                        Areas: {city.areasCovered.slice(0, 3).join(', ')}
                        {city.areasCovered.length > 3 && '...'}
                      </p>
                      <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                        <FaClock className="text-blue-600" />
                        {city.responseTime}
                      </div>
                      <div className="text-blue-600 hover:underline font-semibold">
                        View Details &amp; Get Quote →
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4">
              Get Your Free Quote in 60 Seconds
            </h2>
            <p className="text-xl text-center mb-12">
              Professional {service.name.toLowerCase()} • 24/7 Response • MBE Certified
            </p>
            <QuoteForm />
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="py-8 bg-gray-900 text-white text-center">
        <div className="container mx-auto px-4">
          <p className="text-2xl mb-4">Need Immediate Service?</p>
          <a 
            href="tel:8444543101" 
            className="inline-block bg-red-600 text-white px-8 py-4 rounded-lg text-xl font-bold hover:bg-red-700 transition"
          >
            Call Now: (844) 454-3101
          </a>
        </div>
      </section>
    </div>
  )
}
