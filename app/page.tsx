import Hero from '@/components/Hero'
import ServiceCard from '@/components/ServiceCard'
import QuoteForm from '@/components/QuoteForm'
import { FaShieldAlt, FaClock, FaAward, FaLeaf } from 'react-icons/fa'

const services = [
  {
    title: 'Daily Janitorial Services',
    description: 'Professional cleaning staff for your facility every day',
    icon: '🏢',
    link: '/services/janitorial'
  },
  {
    title: 'Emergency Response 24/7',
    description: 'Immediate response for floods, spills, and disasters',
    icon: '🚨',
    link: '/emergency'
  },
  {
    title: 'Floor Care Specialists',
    description: 'Strip, wax, buff, and carpet cleaning experts',
    icon: '✨',
    link: '/services/floor-care'
  },
  {
    title: 'Medical Grade Cleaning',
    description: 'HIPAA compliant, terminal cleaning for healthcare',
    icon: '🏥',
    link: '/services/medical'
  },
  {
    title: 'Post-Construction',
    description: 'Complete cleanup for renovations and new builds',
    icon: '🔨',
    link: '/services/construction'
  },
  {
    title: 'Day Porter Services',
    description: 'Professional staff during business hours',
    icon: '👔',
    link: '/services/day-porter'
  }
]

export default function HomePage() {
  return (
    <>
      <Hero />
      
      {/* Trust Indicators */}
      <section className="bg-blue-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-around items-center">
            <div className="flex items-center space-x-2 m-2">
              <FaShieldAlt className="text-2xl" />
              <div>
                <p className="font-bold">Fully Insured</p>
                <p className="text-sm">$5M Liability Coverage</p>
              </div>
            </div>
            <div className="flex items-center space-x-2 m-2">
              <FaClock className="text-2xl" />
              <div>
                <p className="font-bold">24/7 Service</p>
                <p className="text-sm">Emergency Response Ready</p>
              </div>
            </div>
            <div className="flex items-center space-x-2 m-2">
              <FaAward className="text-2xl" />
              <div>
                <p className="font-bold">MBE Certified</p>
                <p className="text-sm">Minority Business Enterprise</p>
              </div>
            </div>
            <div className="flex items-center space-x-2 m-2">
              <FaLeaf className="text-2xl" />
              <div>
                <p className="font-bold">Eco-Friendly</p>
                <p className="text-sm">Green Cleaning Products</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">
            Complete Facility Solutions
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12">
            One partner for all your commercial cleaning needs
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Serving Major Metro Areas
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-xl mb-4 text-blue-900">New York</h3>
              <ul className="space-y-2 text-gray-600">
                <li>✓ Manhattan</li>
                <li>✓ Brooklyn</li>
                <li>✓ Queens</li>
                <li>✓ Bronx</li>
                <li>✓ Westchester</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-4 text-blue-900">New Jersey</h3>
              <ul className="space-y-2 text-gray-600">
                <li>✓ Newark</li>
                <li>✓ Jersey City</li>
                <li>✓ Paterson</li>
                <li>✓ Elizabeth</li>
                <li>✓ Morristown</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-4 text-blue-900">Connecticut</h3>
              <ul className="space-y-2 text-gray-600">
                <li>✓ Hartford</li>
                <li>✓ New Haven</li>
                <li>✓ Stamford</li>
                <li>✓ Bridgeport</li>
                <li>✓ Norwalk</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-4 text-blue-900">Florida</h3>
              <ul className="space-y-2 text-gray-600">
                <li>✓ Miami</li>
                <li>✓ Miami Beach</li>
                <li>✓ Orlando</li>
                <li>✓ Winter Park</li>
                <li>✓ Coral Gables</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">
            Get Your Free Quote in 60 Seconds
          </h2>
          <p className="text-xl text-center mb-12">
            24/7 Response • No Obligation • MBE Certified
          </p>
          <QuoteForm />
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-8 bg-gray-900 text-white text-center">
        <div className="container mx-auto px-4">
          <p className="text-2xl mb-4">Need Emergency Cleaning?</p>
          <a 
            href="tel:1-800-TOTAL-FS" 
            className="inline-block bg-red-600 text-white px-8 py-4 rounded-lg text-xl font-bold hover:bg-red-700"
          >
            Call Now: 1-800-TOTAL-FS
          </a>
        </div>
      </section>
    </>
  )
}
