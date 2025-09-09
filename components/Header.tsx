'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { FaBars, FaTimes, FaPhone } from 'react-icons/fa'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-blue-900 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <p className="text-sm">MBE Certified • Licensed • Bonded • Insured</p>
          <a href="tel:8444543101" className="flex items-center space-x-2">
            <FaPhone />
            <span className="font-bold">(844) 454-3101</span>
          </a>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-3">
            <Image 
              src="/logo.png" 
              alt="The Total Facility Services" 
              width={200} 
              height={60}
              priority
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <Link href="/services" className="hover:text-blue-600">Services</Link>
            <Link href="/locations" className="hover:text-blue-600">Locations</Link>
            <Link href="/about" className="hover:text-blue-600">About</Link>
            <Link href="/emergency" className="text-red-600 font-bold">Emergency</Link>
            <Link 
              href="/contact" 
              className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-800"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-2">
            <Link href="/" className="block py-2 hover:text-blue-600">Home</Link>
            <Link href="/services" className="block py-2 hover:text-blue-600">Services</Link>
            <Link href="/locations" className="block py-2 hover:text-blue-600">Locations</Link>
            <Link href="/about" className="block py-2 hover:text-blue-600">About</Link>
            <Link href="/emergency" className="block py-2 text-red-600 font-bold">Emergency</Link>
            <Link href="/contact" className="block py-2 text-blue-900 font-bold">Get Quote</Link>
          </div>
        )}
      </nav>
    </header>
  )
}