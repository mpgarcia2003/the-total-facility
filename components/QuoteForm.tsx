'use client'
import { useState } from 'react'

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    sqft: '',
    city: '',
    address: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          name: '', company: '', email: '', phone: '', 
          service: '', sqft: '', city: '', address: '', message: ''
        })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div className="max-w-2xl mx-auto">
      {submitStatus === 'success' && (
        <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
          ✅ Quote request received! We&apos;ll contact you within 1 hour.
        </div>
      )}
      
      {submitStatus === 'error' && (
        <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
          ❌ There was an error submitting your request. Please call (844) 454-3101 directly.
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name*"
            required
            value={formData.name}
            onChange={handleChange}
            className="px-4 py-3 rounded text-gray-900"
            disabled={isSubmitting}
          />
          <input
            type="text"
            name="company"
            placeholder="Company Name*"
            required
            value={formData.company}
            onChange={handleChange}
            className="px-4 py-3 rounded text-gray-900"
            disabled={isSubmitting}
          />
          <input
            type="email"
            name="email"
            placeholder="Email*"
            required
            value={formData.email}
            onChange={handleChange}
            className="px-4 py-3 rounded text-gray-900"
            disabled={isSubmitting}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone*"
            required
            value={formData.phone}
            onChange={handleChange}
            className="px-4 py-3 rounded text-gray-900"
            disabled={isSubmitting}
          />
          <select
            name="service"
            required
            value={formData.service}
            onChange={handleChange}
            className="px-4 py-3 rounded text-gray-900"
            disabled={isSubmitting}
          >
            <option value="">Select Service*</option>
            <option value="day-porter">Day Porter Services</option>
            <option value="night-porter">Night Porter Services</option>
            <option value="office-cleaning">Office Cleaning</option>
            <option value="emergency-cleaning">Emergency Cleaning (24/7)</option>
            <option value="post-construction">Post-Construction Cleaning</option>
            <option value="carpet-shampoo">Carpet Shampoo/Extraction</option>
            <option value="floor-stripping-waxing">Floor Stripping & Waxing</option>
            <option value="wood-floor-refinishing">Wood Floor Refinishing</option>
            <option value="educational-facility">Educational Facility Cleaning</option>
          </select>
          <input
            type="text"
            name="sqft"
            placeholder="Facility Sq Ft"
            value={formData.sqft}
            onChange={handleChange}
            className="px-4 py-3 rounded text-gray-900"
            disabled={isSubmitting}
          />
          <select
            name="city"
            required
            value={formData.city}
            onChange={handleChange}
            className="px-4 py-3 rounded text-gray-900"
            disabled={isSubmitting}
          >
            <option value="">Select City*</option>
            <optgroup label="New York (10 Cities)">
              <option value="manhattan-nyc">Manhattan/NYC</option>
              <option value="buffalo">Buffalo</option>
              <option value="rochester">Rochester</option>
              <option value="syracuse">Syracuse</option>
              <option value="albany">Albany</option>
              <option value="yonkers">Yonkers</option>
              <option value="white-plains">White Plains</option>
              <option value="long-island">Long Island</option>
              <option value="staten-island">Staten Island</option>
              <option value="new-rochelle">New Rochelle</option>
            </optgroup>
            <optgroup label="New Jersey (12 Cities)">
              <option value="newark">Newark</option>
              <option value="jersey-city">Jersey City</option>
              <option value="hoboken">Hoboken</option>
              <option value="princeton">Princeton</option>
              <option value="paramus">Paramus</option>
              <option value="paterson">Paterson</option>
              <option value="elizabeth">Elizabeth</option>
              <option value="edison">Edison</option>
              <option value="trenton">Trenton</option>
              <option value="secaucus">Secaucus/Meadowlands</option>
              <option value="morristown">Morristown</option>
              <option value="cherry-hill">Cherry Hill/Camden</option>
            </optgroup>
            <optgroup label="Connecticut (10 Cities)">
              <option value="stamford">Stamford</option>
              <option value="greenwich">Greenwich</option>
              <option value="hartford">Hartford</option>
              <option value="new-haven">New Haven</option>
              <option value="westport">Westport</option>
              <option value="bridgeport">Bridgeport</option>
              <option value="norwalk">Norwalk</option>
              <option value="danbury">Danbury</option>
              <option value="fairfield">Fairfield</option>
              <option value="waterbury">Waterbury</option>
            </optgroup>
            <optgroup label="Florida (10 Cities)">
              <option value="miami">Miami & Brickell</option>
              <option value="fort-lauderdale">Fort Lauderdale</option>
              <option value="west-palm-beach">West Palm Beach</option>
              <option value="orlando">Orlando</option>
              <option value="tampa">Tampa</option>
              <option value="jacksonville">Jacksonville</option>
              <option value="naples">Naples</option>
              <option value="fort-myers">Fort Myers</option>
              <option value="boca-raton">Boca Raton</option>
              <option value="st-petersburg">St. Petersburg</option>
            </optgroup>
          </select>
          <input
            type="text"
            name="address"
            placeholder="Facility Address"
            value={formData.address}
            onChange={handleChange}
            className="px-4 py-3 rounded text-gray-900"
            disabled={isSubmitting}
          />
        </div>
        <textarea
          name="message"
          placeholder="Additional Details (current cleaning schedule, special requirements, etc.)"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="w-full mt-4 px-4 py-3 rounded text-gray-900"
          disabled={isSubmitting}
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full mt-4 bg-green-600 text-white py-4 rounded-lg text-xl font-bold hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Submitting...' : 'Get Your Free Quote'}
        </button>
        <p className="text-center text-sm mt-2 opacity-75">
          Or call us directly: <a href="tel:8444543101" className="underline">(844) 454-3101</a>
        </p>
      </form>
    </div>
  )
}