export default async function StatePage({ 
  params 
}: { 
  params: Promise<{ state: string }> 
}) {
  const { state: stateParam } = await params
  const state = stateData[stateParam]
  
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
              href={`/locations/${stateParam}/${city.slug}`} 
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