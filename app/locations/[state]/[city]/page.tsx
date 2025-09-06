import Link from 'next/link'
import { notFound } from 'next/navigation'
import { FaBuilding } from 'react-icons/fa'

const stateData = {
  'new-york': {
    name: 'New York',
    cities: [
      { slug: 'manhattan', name: 'Manhattan' },
      { slug: 'brooklyn', name: 'Brooklyn' },
      { slug: 'queens', name: 'Queens' },
      { slug: 'bronx', name: 'Bronx' },
      { slug: 'staten-island', name: 'Staten Island' },
      { slug: 'long-island', name: 'Long Island' },
      { slug: 'westchester', name: 'Westchester' }
    ]
  },
  'new-jersey': {
    name: 'New Jersey',
    cities: [
      { slug: 'newark', name: 'Newark' },
      { slug: 'jersey-city', name: 'Jersey City' },
      { slug: 'paterson', name: 'Paterson' },
      { slug: 'elizabeth', name: 'Elizabeth' },
      { slug: 'trenton', name: 'Trenton' },
      { slug: 'princeton', name: 'Princeton' },
      { slug: 'morristown', name: 'Morristown' }
    ]
  },
  'connecticut': {
    name: 'Connecticut',
    cities: [
      { slug: 'hartford', name: 'Hartford' },
      { slug: 'new-haven', name: 'New Haven' },
      { slug: 'stamford', name: 'Stamford' },
      { slug: 'bridgeport', name: 'Bridgeport' },
      { slug: 'norwalk', name: 'Norwalk' }
    ]
  },
  'florida': {
    name: 'Florida',
    cities: [
      { slug: 'miami', name: 'Miami' },
      { slug: 'miami-beach', name: 'Miami Beach' },
      { slug: 'orlando', name: 'Orlando' },
      { slug: 'winter-park', name: 'Winter Park' }
    ]
  }
}

export default function StatePage({ params }: { params: { state: string } }) {
  const state = stateData[params.state]
  
  if (!state) {
    notFound()
  }

  return (
    <div className="min-h-screen py-16 pt-24">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4">
          Commercial Cleaning Services in {state.name}
        </h1>
        <p className="text-xl text-center text-gray-600 mb-12">
          Select your city for local facility services
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {state.cities.map(city => (
            <Link 
              key={city.slug}
              href={`/locations/${params.state}/${city.slug}`} 
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
            >
              <FaBuilding className="text-3xl text-blue-900 mb-4" />
              <h2 className="text-xl font-bold text-blue-900 mb-2">{city.name}</h2>
              <p className="text-gray-600">8 Services Available</p>
              <p className="text-blue-600 mt-2">View Services →</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}