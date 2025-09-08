// lib/locations.ts
export type City = { slug: string; name: string }
export type StateKey = 'new-york' | 'new-jersey' | 'connecticut' | 'florida'

export const stateData: Record<StateKey, { name: string; cities: City[] }> = {
  'new-york': {
    name: 'New York',
    cities: [
      { slug: 'new-york', name: 'New York City' },
      { slug: 'buffalo', name: 'Buffalo' },
      { slug: 'rochester', name: 'Rochester' },
      { slug: 'syracuse', name: 'Syracuse' },
      { slug: 'albany', name: 'Albany' },
      { slug: 'yonkers', name: 'Yonkers' },
      { slug: 'white-plains', name: 'White Plains' },
    ],
  },
  'new-jersey': {
    name: 'New Jersey',
    cities: [
      { slug: 'newark', name: 'Newark' },
      { slug: 'jersey-city', name: 'Jersey City' },
      { slug: 'paterson', name: 'Paterson' },
      { slug: 'elizabeth', name: 'Elizabeth' },
      { slug: 'edison', name: 'Edison' },
      { slug: 'trenton', name: 'Trenton' },
      { slug: 'hoboken', name: 'Hoboken' },
    ],
  },
  connecticut: {
    name: 'Connecticut',
    cities: [
      { slug: 'stamford', name: 'Stamford' },
      { slug: 'hartford', name: 'Hartford' },
      { slug: 'new-haven', name: 'New Haven' },
      { slug: 'bridgeport', name: 'Bridgeport' },
      { slug: 'norwalk', name: 'Norwalk' },
    ],
  },
  florida: {
    name: 'Florida',
    cities: [
      { slug: 'miami', name: 'Miami' },
      { slug: 'orlando', name: 'Orlando' },
      { slug: 'tampa', name: 'Tampa' },
      { slug: 'fort-lauderdale', name: 'Fort Lauderdale' },
    ],
  },
}

export const services = [
  { slug: 'day-porter', name: 'Day Porter Services' },
  { slug: 'night-porter', name: 'Night Porter Services' },
  { slug: 'office-cleaning', name: 'Office Cleaning' },
  { slug: 'emergency-cleaning', name: 'Emergency Cleaning (24/7)' },
  { slug: 'post-construction', name: 'Post-Construction Cleaning' },
  { slug: 'carpet-shampoo', name: 'Carpet Shampoo/Extraction' },
  { slug: 'wood-floor-screen-poly', name: 'Wood Floor Screening + Polyurethane' },
  { slug: 'wood-floor-sand-poly', name: 'Wood Floor Sanding + Polyurethane' },
]
// 23 cities × 8 services = 184 pages
