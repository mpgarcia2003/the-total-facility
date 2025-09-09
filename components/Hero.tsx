export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Your Complete Facility Services Partner
          </h1>
          <p className="text-2xl mb-8">
            One call. Total solutions. Complete confidence.
          </p>
          <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center">
            <a 
              href="/contact"
              className="inline-block bg-green-600 text-white px-8 py-4 rounded-lg text-xl font-bold hover:bg-green-700"
            >
              Get Free Quote
            </a>
            <a 
              href="tel:1-800-TOTAL-FS"
              className="inline-block bg-red-600 text-white px-8 py-4 rounded-lg text-xl font-bold hover:bg-red-700"
            >
              24/7 Emergency: 1-800-TOTAL-FS
            </a>
          </div>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <p className="text-4xl font-bold">42</p>
              <p>Cities Served</p>
            </div>
            <div>
              <p className="text-4xl font-bold">24/7</p>
              <p>Emergency Ready</p>
            </div>
            <div>
              <p className="text-4xl font-bold">100%</p>
              <p>Satisfaction</p>
            </div>
            <div>
              <p className="text-4xl font-bold">MBE</p>
              <p>Certified</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}