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
    message: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // For now, just show an alert
    alert('Quote request received! We\'ll contact you within 1 hour.')
    setFormData({
      name: '', company: '', email: '', phone: '', 
      service: '', sqft: '', city: '', message: ''
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
      <div className="grid md:grid-cols-2 gap-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name*"
          required
          value={formData.name}
          onChange={handleChange}
          className="px-4 py-3 rounded text-gray-900"
        />
        <input
          type="text"
          name="company"
          placeholder="Company Name*"
          required
          value={formData.company}
          onChange={handleChange}
          className="px-4 py-3 rounded text-gray-900"
        />
        <input
          type="email"
          name="email"
          placeholder="Email*"
          required
          value={formData.email}
          onChange={handleChange}
          className="px-4 py-3 rounded text-gray-900"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone*"
          required
          value={formData.phone}
          onChange={handleChange}
          className="px-4 py-3 rounded text-gray-900"
        />
        <select
          name="service"
          required
          value={formData.service}
          onChange={handleChange}
          className="px-4 py-3 rounded text-gray-900"
        >
          <option value="">Select Service*</option>
          <option value="daily-cleaning">Daily Cleaning</option>
          <option value="emergency">Emergency Cleaning</option>
          <option value="floor-care">Floor Care</option>
          <option value="medical">Medical Facility</option>
          <option value="construction">Post-Construction</option>
          <option value="day-porter">Day Porter</option>
        </select>
        <input
          type="text"
          name="sqft"
          placeholder="Facility Sq Ft"
          value={formData.sqft}
          onChange={handleChange}
          className="px-4 py-3 rounded text-gray-900"
        />
        <select
          name="city"
          required
          value={formData.city}
          onChange={handleChange}
          className="px-4 py-3 rounded text-gray-900"
        >
          <option value="">Select City*</option>
          <optgroup label="New York">
            <option value="manhattan">Manhattan</option>
            <option value="brooklyn">Brooklyn</option>
            <option value="queens">Queens</option>
          </optgroup>
          <optgroup label="New Jersey">
            <option value="newark">Newark</option>
            <option value="jersey-city">Jersey City</option>
          </optgroup>
          <optgroup label="Connecticut">
            <option value="stamford">Stamford</option>
            <option value="hartford">Hartford</option>
          </optgroup>
          <optgroup label="Florida">
            <option value="miami">Miami</option>
            <option value="orlando">Orlando</option>
          </optgroup>
        </select>
        <input
          type="text"
          name="address"
          placeholder="Facility Address"
          className="px-4 py-3 rounded text-gray-900"
        />
      </div>
      <textarea
        name="message"
        placeholder="Additional Details"
        rows={4}
        value={formData.message}
        onChange={handleChange}
        className="w-full mt-4 px-4 py-3 rounded text-gray-900"
      />
      <button
        type="submit"
        className="w-full mt-4 bg-green-600 text-white py-4 rounded-lg text-xl font-bold hover:bg-green-700"
      >
        Get Your Free Quote
      </button>
    </form>
  )
}