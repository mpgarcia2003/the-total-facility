import Link from 'next/link'

interface ServiceCardProps {
  title: string
  description: string
  icon: string
  link: string
}

export default function ServiceCard({ title, description, icon, link }: ServiceCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link href={link} className="text-blue-600 font-semibold hover:text-blue-800">
        Learn More →
      </Link>
    </div>
  )
}