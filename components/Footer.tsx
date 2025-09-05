import Link from 'next/link'
import Image from 'next/image'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <Image 
                src="/logo-white.png" 
                alt="The Total Facility Services" 
                width={180} 
                height={54}
                className="h-12 w-auto"
              />
            </div>
            <p className="text-gray-400 mb-4">
              Your complete commercial cleaning partner. MBE certified. 
              Serving NY, NJ, CT, and FL with total facility solutions.
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com/company/the-total-facility-services" className="hover:text-blue-400">
                <FaLinkedin size={24} />
              </a>
              <a href="https://facebook.com/TheTotalFacilityServices" className="hover:text-blue-400">
                <FaFacebook size={24} />
              </a>
              <a href="https://instagram.com/TotalFacilityLLC" className="hover:text-blue-400">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/services/janitorial" className="hover:text-white">Daily Janitorial</Link></li>
              <li><Link href="/services/emergency" className="hover:text-white">24/7 Emergency</Link></li>
              <li><Link href="/services/medical" className="hover:text-white">Medical Cleaning</Link></li>
              <li><Link href="/services/floor-care" className="hover:text-white">Floor Care</Link></li>
              <li><Link href="/services/day-porter" className="hover:text-white">Day Porter</Link></li>
              <li><Link href="/services/construction" className="hover:text-white">Post-Construction</Link></li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-xl font-bold mb-4">Service Areas</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/locations/ny" className="hover:text-white">New York</Link></li>
              <li><Link href="/locations/nj" className="hover:text-white">New Jersey</Link></li>
              <li><Link href="/locations/ct" className="hover:text-white">Connecticut</Link></li>
              <li><Link href="/locations/fl" className="hover:text-white">Florida</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-3 text-gray-400">
              <a href="tel:1-800-TOTAL-FS" className="flex items-center space-x-2 hover:text-white">
                <FaPhone />
                <span>1-800-TOTAL-FS</span>
              </a>
              <a href="mailto:Info@TheTotalFacility.com" className="flex items-center space-x-2 hover:text-white">
                <FaEnvelope />
                <span>Info@TheTotalFacility.com</span>
              </a>
              <div className="flex items-start space-x-2">
                <FaMapMarkerAlt className="mt-1" />
                <div>
                  <p>211 East 43rd Street FL 7-100</p>
                  <p>New York, NY 10017</p>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <Link 
                href="/contact"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
              >
                Get Free Quote
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© 2025 The Total Facility Services LLC. All rights reserved.</p>
          <p className="mt-2">
            MBE Certified • Licensed • Bonded • Insured • OSHA Compliant
          </p>
        </div>
      </div>
    </footer>
  )
}