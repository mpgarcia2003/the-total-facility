export default async function CityPage({ 
  params 
}: { 
  params: Promise<{ state: string, city: string }> 
}) {
  const { state, city } = await params
  const cityName = cityNames[city]
  
  if (!cityName) {
    notFound()
  }

  return (
    <div className="min-h-screen py-16 pt-24">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4">
          Commercial Cleaning Services in {cityName}
        </h1>
        <p className="text-xl text-center text-gray-600 mb-12">
          Choose your service type for detailed information and pricing
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {services.map(service => (
            <Link 
              key={service.slug}
              href={`/locations/${state}/${city}/${service.slug}`} 
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow text-center"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h2 className="text-lg font-bold text-blue-900 mb-2">{service.name}</h2>
              <p className="text-blue-600 mt-4">Learn More →</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}