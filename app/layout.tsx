import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'The Total Facility Services | Commercial Cleaning NYC, NJ, CT, FL',
  description: 'Complete commercial cleaning and facility management services. MBE certified. 24/7 emergency response. Serving NY, NJ, CT, Miami, and Orlando.',
  keywords: 'commercial cleaning, janitorial services, facility management, office cleaning, emergency cleaning',
  openGraph: {
    title: 'The Total Facility Services',
    description: 'Your Total Facility Partner - Complete Commercial Cleaning Solutions',
    url: 'https://thetotalfacility.com',
    siteName: 'The Total Facility Services',
    images: ['/og-image.jpg'],
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "The Total Facility Services",
              "url": "https://thetotalfacility.com",
              "telephone": "1-800-TOTAL-FS",
              "email": "Info@TheTotalFacility.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "211 East 43rd Street FL 7-100",
                "addressLocality": "New York",
                "addressRegion": "NY",
                "postalCode": "10017",
                "addressCountry": "US"
              },
              "priceRange": "$$",
              "image": "https://thetotalfacility.com/logo.png",
              "sameAs": [
                "https://www.linkedin.com/company/the-total-facility-services",
                "https://www.facebook.com/TheTotalFacilityServices"
              ]
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}