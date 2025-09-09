// lib/locations.ts
export type Service = {
  slug: string
  name: string
  shortDesc: string
  longDesc: string
  keywords: string[]
  features: string[]
  basePrice: string
  industries: string[]
}

export type City = {
  slug: string
  name: string
  areasCovered: string[]
  neighborhoods: string
  localPhone: string
  responseTime: string
  majorClients: string
  localTestimonial: {
    text: string
    author: string
  }
  competitorPricing: string
  specialties: string[]
  certifications: string[]
  localKeywords: string[]
  parkingNote: string
  unionStatus: string
}

export type StateInfo = {
  name: string
  licenseNumber: string
  insurance: string
  mainPhone: string
  emergencyPhone: string
  cities: City[]
}

export type StateKey = 'new-york' | 'new-jersey' | 'connecticut' | 'florida'

export const services: Service[] = [
  { 
    slug: 'day-porter', 
    name: 'Day Porter Services',
    shortDesc: 'Professional day porters for your facility',
    longDesc: 'At The Total Facility Services (MBE Certified • Licensed • Bonded • Insured), we know that in New York, first impressions matter. Our day porters work behind the scenes to ensure your building runs smoothly, looks spotless, and delivers a five-star experience for tenants, visitors, and staff — all day, every day. We\'re trusted by 200+ office buildings across Manhattan, including Fortune 500 firms, luxury retailers, medical facilities, and financial institutions.',
    keywords: ['day porter', 'daytime cleaning', 'lobby maintenance', 'commercial porter'],
    features: [
      'Continuous lobby & entrance upkeep',
      'Restroom monitoring, sanitization & restocking',
      'Kitchen & breakroom maintenance',
      'Meeting room turnovers & conference support',
      'Spill & emergency cleanup (2-hr response or less)',
      'Trash & recycling removal throughout the day',
      'Elevator, glass, & high-touch surface cleaning',
      'Event setup and breakdown assistance',
      'Package & delivery coordination with building staff',
      'Recycling & sustainability program support'
    ],
    basePrice: '$25-30/hour',
    industries: ['Corporate Offices', 'Medical Facilities', 'Schools', 'Retail']
  },
  { 
    slug: 'night-porter', 
    name: 'Night Porter Services',
    shortDesc: 'After-hours deep cleaning and maintenance',
    longDesc: 'When the city quiets down, our night porters get to work. We handle the deep cleaning and maintenance tasks that can\'t be done during business hours — ensuring your facility looks brand new every morning. Trusted by over 200 office buildings in Manhattan, we are the reliable, certified partner that property managers count on for spotless facilities, safer workspaces, and healthier environments.',
    keywords: ['night porter', 'overnight cleaning', 'after hours cleaning'],
    features: [
      'Floor Care & Restoration — deep carpet cleaning, machine scrubbing, stripping & waxing',
      'Workstation & Desk Detailing — sanitize keyboards, phones, and desktops',
      'Kitchen & Breakroom Deep Cleaning — appliances, counters, and sinks fully sanitized',
      'Comprehensive Restroom Sanitization — disinfecting, restocking, odor control',
      'High Dusting & Vent Cleaning — improved air quality and allergen reduction',
      'Trash Removal & Recycling — emptied nightly with recycling compliance',
      'Glass & Entry Cleaning — spotless doors, lobbies, and display areas',
      'Special Projects — event cleanup, move-in/move-out preparation, light maintenance'
    ],
    basePrice: '$25-30/hour',
    industries: ['Banks', 'Corporate Offices', 'Healthcare', 'Educational']
  },
  { 
    slug: 'office-cleaning', 
    name: 'Office Cleaning',
    shortDesc: 'Complete office cleaning solutions',
    longDesc: 'In New York, where every detail matters, a spotless office isn\'t optional — it\'s a business advantage. At The Total Facility Services (MBE Certified • Licensed • Bonded • Insured), we deliver tailored cleaning programs for offices of all sizes, from boutique law firms to Fortune 500 trading floors. We\'re trusted by 200+ Manhattan office buildings for reliability, flexibility, and measurable results — helping property managers and business leaders maintain professional, safe, and productive workplaces.',
    keywords: ['office cleaning', 'commercial cleaning', 'business cleaning'],
    features: [
      'Workstation & Desk Cleaning — sanitize keyboards, phones, and desktops',
      'Conference Room Maintenance — ready for every client meeting',
      'Kitchen & Breakroom Cleaning — hygienic, refreshed employee spaces',
      'Restroom Sanitization — disinfecting, restocking, and odor control',
      'Floor Care & Vacuuming — from carpeted trading floors to polished hardwoods',
      'Trash & Waste Management — daily removal with recycling compliance',
      'Glass & High-Touch Surface Care — spotless lobbies, elevators, and entryways',
      'Special Project Cleaning — move-ins, event cleanup, or seasonal deep cleans'
    ],
    basePrice: '$0.05-0.15/sq ft',
    industries: ['Corporate Offices', 'Law Firms', 'Tech Companies', 'Financial Services']
  },
  { 
    slug: 'emergency-cleaning', 
    name: 'Emergency Cleaning (24/7)',
    shortDesc: '24/7 emergency response cleaning',
    longDesc: 'When disaster strikes, you need more than a cleaning crew — you need a certified rapid-response partner who can mobilize immediately. At The Total Facility Services (MBE Certified • Licensed • Bonded • Insured), we specialize in 24/7 emergency cleaning and restoration for New York City\'s most demanding facilities. From floods and fires to biohazards and storm damage, our trained teams are on call day and night to restore safety and order fast. Trusted by over 200 Manhattan office buildings, we\'re the company property managers call first when every second counts.',
    keywords: ['emergency cleaning', '24/7 cleaning', 'disaster cleanup'],
    features: [
      'Water Damage & Flood Cleanup — extraction, drying, and sanitation',
      'Fire & Smoke Damage Restoration — soot removal, odor neutralization, structural cleaning',
      'Storm & Wind Damage Cleanup — debris clearing, glass removal, entry restoration',
      'Biohazard Cleaning — bloodborne pathogen, trauma, medical, and hazardous waste response',
      'Rapid Response Teams — on-site in 2 hours or less',
      'Insurance Coordination — direct documentation and reporting for faster claims'
    ],
    basePrice: '$65-85/hour',
    industries: ['All Industries', 'Property Management', 'Healthcare', 'Retail']
  },
  { 
    slug: 'post-construction', 
    name: 'Post-Construction Cleaning',
    shortDesc: 'Construction site final cleaning',
    longDesc: 'After construction or renovation, your project isn\'t complete until it\'s spotless. At The Total Facility Services (MBE Certified • Licensed • Bonded • Insured), we specialize in detailed post-construction cleanup that prepares spaces for inspection, handover, or immediate occupancy. Our certified crews handle everything from debris removal to fine-detail polishing, ensuring your property makes the right impression from day one. Trusted by NYC developers, general contractors, and property managers, we\'ve completed post-construction projects in high-rise towers, medical facilities, luxury condos, and corporate offices across Manhattan and beyond.',
    keywords: ['post construction cleaning', 'construction cleanup', 'final cleaning'],
    features: [
      'Debris & Material Removal — safe disposal of leftover construction waste',
      'Detailed Dust Removal — walls, ceilings, fixtures, ledges, and trim',
      'Window & Glass Cleaning — streak-free results inside and out',
      'Floor Cleaning & Finishing — scrubbing, vacuuming, polishing, waxing',
      'Fixture & Surface Polishing — lights, hardware, counters, cabinetry',
      'HVAC Vent Cleaning — improved air quality and system protection',
      'Final Touch Detailing — prepping kitchens, restrooms, and lobbies for move-in',
      'Multi-Phase Options: Rough clean • Final clean • Touch-up clean'
    ],
    basePrice: '$0.35-0.55/sq ft',
    industries: ['Construction', 'Real Estate', 'Property Development', 'Renovation']
  },
  { 
    slug: 'carpet-shampoo', 
    name: 'Carpet Shampoo/Extraction',
    shortDesc: 'Deep carpet cleaning and extraction',
    longDesc: 'New York City\'s busiest offices and retail spaces demand more than surface cleaning. Over time, dirt, allergens, and stains build up — shortening carpet life and leaving a poor impression on tenants, guests, and clients. At The Total Facility Services (MBE Certified • Licensed • Bonded • Insured), we use professional hot water extraction and advanced cleaning systems to restore carpets to like-new condition. From high-rise trading floors to luxury hotels, our crews deliver spotless, fresh, and safe environments that reflect the highest standards.',
    keywords: ['carpet cleaning', 'carpet shampoo', 'carpet extraction'],
    features: [
      'Hot Water Extraction Cleaning — industry-standard deep cleaning for long-lasting results',
      'Targeted Stain & Spot Treatment — removing coffee, ink, grease, and high-traffic soiling',
      'Deodorizing & Sanitizing — neutralizing odors and improving indoor air quality',
      'Quick-Dry Technology — minimizing downtime with rapid drying systems',
      'Carpet Protection Application — Scotchgard & fiber guards to prevent re-soiling',
      'High-Traffic Area Treatment — extending the life of lobbies, corridors, and trading floors'
    ],
    basePrice: '$0.30-0.45/sq ft',
    industries: ['Offices', 'Hotels', 'Retail', 'Healthcare']
  },
  { 
    slug: 'wood-floor-screen-poly', 
    name: 'Wood Floor Screening + Polyurethane',
    shortDesc: 'Wood floor screening and refinishing',
    longDesc: 'Hardwood floors are a major investment — but heavy traffic, spills, and daily wear take their toll. Replacing or fully sanding floors can be disruptive and costly. That\'s where The Total Facility Services (MBE Certified • Licensed • Bonded • Insured) comes in. Our wood floor screening + polyurethane system restores shine, protects against future damage, and extends floor life without the mess or downtime of a full refinish. Perfect for corporate offices, trading floors, luxury retail, medical facilities, and museums that demand a pristine look with minimal disruption.',
    keywords: ['wood floor screening', 'polyurethane', 'floor refinishing'],
    features: [
      'Surface Screening Preparation — gentle abrasion to remove surface scratches & dullness',
      'Multiple Polyurethane Coats — durable, protective finish for long-lasting results',
      'Dust-Free Process — no heavy sanding required, minimal disruption to tenants',
      'Choice of Finish Types — matte, satin, semi-gloss, or high-gloss to match design needs',
      'Traffic Lane Repair — restores worn paths in high-traffic areas',
      'Fast Turnaround — 24–48 hour cure time, keeping downtime to a minimum'
    ],
    basePrice: '$2-4/sq ft',
    industries: ['Corporate Offices', 'Retail', 'Museums', 'Educational']
  },
  { 
    slug: 'wood-floor-sand-poly', 
    name: 'Wood Floor Sanding + Polyurethane',
    shortDesc: 'Complete wood floor sanding and refinishing',
    longDesc: 'When regular maintenance isn\'t enough, full sanding and refinishing is the only way to restore wood floors to their original beauty and durability. At The Total Facility Services (MBE Certified • Licensed • Bonded • Insured), we provide complete wood floor restoration for New York City\'s most demanding spaces — from luxury hotels and historic properties to high-rise trading floors and Class A offices. Our dustless sanding system and multi-coat polyurethane application deliver a flawless, durable finish that stands up to heavy NYC traffic while maintaining a high-end look.',
    keywords: ['wood floor sanding', 'floor refinishing', 'polyurethane'],
    features: [
      'Complete Floor Sanding — removing deep scratches, discoloration, and surface damage',
      'Gap Filling & Repairs — correcting cracks, separations, and minor imperfections',
      'Custom Stain Application (Optional) — match your design vision with rich tones & finishes',
      'Multiple Polyurethane Coats — durable protection in matte, satin, semi-gloss, or gloss',
      'Dustless Sanding System — minimal mess and disruption to tenants or guests',
      'Professional Project Timeline — most projects completed in 3–5 days'
    ],
    basePrice: '$3-7/sq ft',
    industries: ['Historic Buildings', 'Luxury Offices', 'High-End Retail', 'Hotels']
  },
  { 
    slug: 'floor-stripping-waxing', 
    name: 'Floor Stripping & Waxing',
    shortDesc: 'Professional floor stripping and waxing services',
    longDesc: 'Hard-surface floors endure constant foot traffic, spills, and wear that gradually dulls their appearance and compromises their protective coating. At The Total Facility Services (MBE Certified • Licensed • Bonded • Insured), we provide professional floor stripping and waxing services that remove old buildup and apply fresh, durable protection. From corporate lobbies and medical facilities to retail spaces and educational institutions, our certified crews restore floors to a brilliant, long-lasting shine that enhances your facility\'s professional image.',
    keywords: ['floor stripping', 'floor waxing', 'floor maintenance', 'commercial floor care'],
    features: [
      'Complete Floor Stripping — removing old wax, dirt, and surface buildup',
      'Deep Cleaning & Preparation — thorough cleaning before wax application',
      'Multi-Coat Wax Application — durable protection with high-gloss finish',
      'Edge & Corner Detailing — complete coverage in hard-to-reach areas',
      'Quick Cure Technology — faster drying times to minimize downtime',
      'Slip-Resistant Options — safety-focused finishes for high-traffic areas',
      'Maintenance Planning — scheduled touch-ups to extend floor life',
      'Eco-Friendly Products — green-certified strippers and waxes available'
    ],
    basePrice: '$0.75-1.25/sq ft',
    industries: ['Corporate Offices', 'Healthcare', 'Retail', 'Educational']
  },
  { 
    slug: 'educational-facility-cleaning', 
    name: 'Educational Facility Cleaning',
    shortDesc: 'Specialized cleaning for schools and universities',
    longDesc: 'Educational facilities require specialized cleaning protocols that prioritize student and staff safety while maintaining the highest standards of cleanliness. At The Total Facility Services (MBE Certified • Licensed • Bonded • Insured), we understand the unique challenges of schools, universities, and training centers — from managing high-traffic areas and cafeterias to ensuring healthy learning environments. Our certified teams use child-safe, eco-friendly products and follow strict protocols to keep educational spaces clean, safe, and conducive to learning.',
    keywords: ['school cleaning', 'university cleaning', 'educational facility cleaning', 'classroom cleaning'],
    features: [
      'Classroom Deep Cleaning — desks, chairs, whiteboards, and learning materials sanitized',
      'Cafeteria & Kitchen Sanitization — food service areas with strict health compliance',
      'Restroom Disinfection — high-frequency cleaning with child-safe products',
      'Gymnasium & Athletic Facility Care — specialized cleaning for sports equipment and floors',
      'Library & Computer Lab Maintenance — delicate equipment and book preservation',
      'High-Touch Surface Disinfection — door handles, railings, light switches, and lockers',
      'Floor Care Programs — slip-resistant treatments for hallways and stairwells',
      'Emergency Response Cleaning — rapid cleanup for spills, accidents, and health incidents'
    ],
    basePrice: '$0.08-0.18/sq ft',
    industries: ['K-12 Schools', 'Universities', 'Training Centers', 'Daycare Facilities']
  }
]

export const stateData: Record<StateKey, StateInfo> = {
  'new-york': {
    name: 'New York',
    licenseNumber: 'NY-CSL-2024-1847',
    insurance: 'General Liability $2M, Workers Comp Active',
    mainPhone: '(844) 454-3101',
    emergencyPhone: '(844) 454-3101',
    cities: [
      { 
        slug: 'new-york', 
        name: 'New York City',
        areasCovered: ['Manhattan', 'Brooklyn', 'Queens', 'Bronx', 'Staten Island'],
        neighborhoods: 'Financial District, Midtown, Upper East Side, Upper West Side, Chelsea, Tribeca, SoHo, Harlem, Long Island City',
        localPhone: '(844) 454-3101',
        responseTime: '2 hours or less',
        majorClients: 'Serving over 200 office buildings in Manhattan',
        localTestimonial: {
          text: 'The Total Facility has maintained our 40-floor office building for 3 years. Their attention to detail is exceptional.',
          author: 'Property Manager, Midtown Manhattan'
        },
        competitorPricing: 'Save 15-20% compared to other Manhattan commercial cleaners',
        specialties: ['High-rise buildings', 'Trading floors', 'Luxury retail spaces', 'Medical offices'],
        certifications: ['NYC DOB Licensed', 'REBNY Approved Vendor', 'MBE Certified'],
        localKeywords: ['Manhattan commercial cleaning', 'NYC janitorial services', 'New York office cleaning', 'NYC day porter'],
        parkingNote: 'COI for all NYC parking garages included',
        unionStatus: 'Union and non-union options available'
      },
      { 
        slug: 'buffalo', 
        name: 'Buffalo',
        areasCovered: ['Downtown Buffalo', 'North Buffalo', 'South Buffalo', 'Amherst', 'Cheektowaga'],
        neighborhoods: 'Allentown, Elmwood Village, Delaware District, Canalside, Medical Campus',
        localPhone: '(844) 454-3101',
        responseTime: '90 minutes or less',
        majorClients: 'Trusted by Buffalo medical corridor and downtown businesses',
        localTestimonial: {
          text: 'Excellent service through harsh Buffalo winters. They never miss a day, snow or shine.',
          author: 'Facility Director, Buffalo Medical Center'
        },
        competitorPricing: 'Most competitive rates in Western NY',
        specialties: ['Medical facilities', 'Educational institutions', 'Winter maintenance', 'Snow removal'],
        certifications: ['NYS Certified', 'OSHA Compliant', 'MBE Certified'],
        localKeywords: ['Buffalo commercial cleaning', 'Western NY janitorial', 'Buffalo office cleaning'],
        parkingNote: 'Free parking at all Buffalo locations',
        unionStatus: 'Union-friendly workforce'
      },
      { 
        slug: 'rochester', 
        name: 'Rochester',
        areasCovered: ['Downtown Rochester', 'Brighton', 'Pittsford', 'Henrietta', 'Greece'],
        neighborhoods: 'East End, Park Avenue, South Wedge, High Falls, College Town',
        localPhone: '(844) 454-3101',
        responseTime: '90 minutes or less',
        majorClients: 'Serving Rochester tech companies and healthcare facilities',
        localTestimonial: {
          text: 'Professional team that understands our tech company needs. Highly recommend.',
          author: 'Operations Manager, Rochester Tech Park'
        },
        competitorPricing: 'Competitive pricing with superior service',
        specialties: ['Tech offices', 'Healthcare facilities', 'Educational institutions'],
        certifications: ['NYS Licensed', 'Green Cleaning Certified', 'MBE Certified'],
        localKeywords: ['Rochester commercial cleaning', 'Rochester janitorial services', 'Rochester office cleaning'],
        parkingNote: 'Ample parking available',
        unionStatus: 'Flexible workforce options'
      },
      { 
        slug: 'syracuse', 
        name: 'Syracuse',
        areasCovered: ['Downtown Syracuse', 'University Hill', 'Eastwood', 'Liverpool', 'DeWitt'],
        neighborhoods: 'Armory Square, Hanover Square, Franklin Square, University Area',
        localPhone: '(844) 454-3101',
        responseTime: '2 hours or less',
        majorClients: 'Serving Syracuse University area and downtown businesses',
        localTestimonial: {
          text: 'Reliable service for our entire office complex. Great communication and results.',
          author: 'Building Manager, Downtown Syracuse'
        },
        competitorPricing: 'Best value in Central New York',
        specialties: ['University buildings', 'Government facilities', 'Medical offices'],
        certifications: ['NYS Certified', 'OSHA Compliant', 'MBE Certified'],
        localKeywords: ['Syracuse commercial cleaning', 'Central NY janitorial', 'Syracuse office cleaning'],
        parkingNote: 'Downtown parking permits available',
        unionStatus: 'Union and non-union options'
      },
      { 
        slug: 'albany', 
        name: 'Albany',
        areasCovered: ['Downtown Albany', 'Empire State Plaza', 'Pine Hills', 'Delmar', 'Guilderland'],
        neighborhoods: 'Center Square, Washington Park, Lark Street, State Street',
        localPhone: '(844) 454-3101',
        responseTime: '90 minutes or less',
        majorClients: 'Serving state government buildings and corporate offices',
        localTestimonial: {
          text: 'Excellent service for our government facility. Security cleared and professional.',
          author: 'Facility Manager, Albany Government Building'
        },
        competitorPricing: 'Government contract rates available',
        specialties: ['Government buildings', 'Corporate offices', 'Historic buildings'],
        certifications: ['NYS Certified', 'Security Cleared Staff', 'MBE Certified'],
        localKeywords: ['Albany commercial cleaning', 'Capital Region janitorial', 'Albany office cleaning'],
        parkingNote: 'State employee parking areas accessible',
        unionStatus: 'Union workforce available'
      },
      { 
        slug: 'yonkers', 
        name: 'Yonkers',
        areasCovered: ['Downtown Yonkers', 'Getty Square', 'Crestwood', 'Bronxville border', 'Hastings border'],
        neighborhoods: 'Waterfront, Ridge Hill, Colonial Heights, Lincoln Park',
        localPhone: '(844) 454-3101',
        responseTime: '90 minutes or less',
        majorClients: 'Serving Yonkers waterfront developments and corporate parks',
        localTestimonial: {
          text: 'Great service for our entire office park. Very responsive to our needs.',
          author: 'Property Manager, Ridge Hill Complex'
        },
        competitorPricing: 'Competitive Westchester County rates',
        specialties: ['Corporate parks', 'Retail complexes', 'Residential buildings'],
        certifications: ['NYS Licensed', 'Westchester Approved', 'MBE Certified'],
        localKeywords: ['Yonkers commercial cleaning', 'Westchester janitorial', 'Yonkers office cleaning'],
        parkingNote: 'Easy access from all major highways',
        unionStatus: 'Flexible workforce options'
      },
      { 
        slug: 'white-plains', 
        name: 'White Plains',
        areasCovered: ['Downtown White Plains', 'North White Plains', 'Gedney', 'Battle Hill', 'Fisher Hill'],
        neighborhoods: 'Mamaroneck Avenue, Post Road, City Center, Hospital District',
        localPhone: '(844) 454-3101',
        responseTime: '90 minutes or less',
        majorClients: 'Serving White Plains financial district and hospital campuses',
        localTestimonial: {
          text: 'Top-notch service for our medical facility. Understands healthcare standards.',
          author: 'Director of Operations, White Plains Hospital Campus'
        },
        competitorPricing: 'Premium service at competitive rates',
        specialties: ['Medical facilities', 'Financial offices', 'Corporate headquarters'],
        certifications: ['Healthcare compliant', 'OSHA Certified', 'MBE Certified'],
        localKeywords: ['White Plains commercial cleaning', 'Westchester office cleaning', 'White Plains janitorial'],
        parkingNote: 'Garage parking available',
        unionStatus: 'Union and non-union available'
      },
      { 
        slug: 'long-island', 
        name: 'Long Island',
        areasCovered: ['Hempstead', 'Garden City', 'Melville', 'Uniondale', 'Westbury'],
        neighborhoods: 'Nassau County corridor, Suffolk corporate parks, business districts',
        localPhone: '(844) 454-3101',
        responseTime: '90 minutes or less',
        majorClients: 'Serving Long Island suburban corporate headquarters and office parks',
        localTestimonial: {
          text: 'Professional service for our corporate campus. Great value for Long Island.',
          author: 'Facility Manager, Garden City Corporate Center'
        },
        competitorPricing: 'Competitive Long Island rates',
        specialties: ['Corporate headquarters', 'Office parks', 'Medical facilities', 'Retail centers'],
        certifications: ['NYS Licensed', 'Nassau County approved', 'MBE Certified'],
        localKeywords: ['Long Island commercial cleaning', 'Nassau County janitorial', 'Hempstead office cleaning'],
        parkingNote: 'Ample free parking at all locations',
        unionStatus: 'Flexible workforce options'
      },
      { 
        slug: 'staten-island', 
        name: 'Staten Island',
        areasCovered: ['St. George', 'New Springville', 'Tottenville', 'West Brighton', 'Stapleton'],
        neighborhoods: 'Industrial corridor, Teleport business park, Richmond Avenue',
        localPhone: '(844) 454-3101',
        responseTime: '90 minutes or less',
        majorClients: 'Serving Staten Island warehouses and logistics facilities',
        localTestimonial: {
          text: 'Reliable service for our distribution center. Understands industrial needs.',
          author: 'Operations Manager, Staten Island Logistics Hub'
        },
        competitorPricing: 'Best rates for Staten Island industrial facilities',
        specialties: ['Warehouses', 'Logistics facilities', 'Industrial complexes', 'Distribution centers'],
        certifications: ['NYS Licensed', 'Industrial safety certified', 'MBE Certified'],
        localKeywords: ['Staten Island commercial cleaning', 'Staten Island industrial cleaning', 'warehouse cleaning'],
        parkingNote: 'Free parking at all Staten Island locations',
        unionStatus: 'Union and non-union workforce'
      },
      { 
        slug: 'new-rochelle', 
        name: 'New Rochelle',
        areasCovered: ['Downtown New Rochelle', 'North Avenue', 'Echo Bay', 'Beechmont', 'Wykagyl'],
        neighborhoods: 'Main Street corridor, luxury developments, mixed-use properties',
        localPhone: '(844) 454-3101',
        responseTime: '90 minutes or less',
        majorClients: 'Serving New Rochelle luxury residential and mixed-use developments',
        localTestimonial: {
          text: 'Excellent service for our luxury residential tower. Very professional team.',
          author: 'Property Manager, New Rochelle Luxury Residences'
        },
        competitorPricing: 'Premium Westchester County rates',
        specialties: ['Luxury residential', 'Mixed-use developments', 'Retail spaces', 'Corporate offices'],
        certifications: ['NYS Licensed', 'Westchester approved', 'MBE Certified'],
        localKeywords: ['New Rochelle commercial cleaning', 'Westchester janitorial', 'New Rochelle luxury cleaning'],
        parkingNote: 'Garage and street parking available',
        unionStatus: 'Professional workforce'
      }
    ]
  },
  'new-jersey': {
    name: 'New Jersey',
    licenseNumber: 'NJ-BUS-2024-9821',
    insurance: 'General Liability $2M, Workers Comp Active',
    mainPhone: '(844) 454-3101',
    emergencyPhone: '(844) 454-3101',
    cities: []
  },
  connecticut: {
    name: 'Connecticut',
    licenseNumber: 'CT-JAN-2024-5544',
    insurance: 'General Liability $2M, Workers Comp Active',
    mainPhone: '(844) 454-3101',
    emergencyPhone: '(844) 454-3101',
    cities: []
  },
  florida: {
    name: 'Florida',
    licenseNumber: 'FL-JANITORIAL-2024-8745',
    insurance: 'General Liability $2M, Hurricane damage coverage',
    mainPhone: '(844) 454-3101',
    emergencyPhone: '(844) 454-3101',
    cities: []
  }
}
