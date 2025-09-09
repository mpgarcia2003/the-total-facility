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
    mainPhone: '1-800-TOTAL-FS',
    emergencyPhone: '1-800-TOTAL-FS',
    cities: [
      { 
        slug: 'new-york', 
        name: 'New York City',
        areasCovered: ['Manhattan', 'Brooklyn', 'Queens', 'Bronx', 'Staten Island'],
        neighborhoods: 'Financial District, Midtown, Upper East Side, Upper West Side, Chelsea, Tribeca, SoHo, Harlem, Long Island City',
        localPhone: '1-800-TOTAL-FS',
        responseTime: '2 hours or less',

        majorClients: 'Serving over 200 office buildings in Manhattan',
        localTestimonial: {
          text: 'The Total Facility has maintained our 40-floor office building for 3 years. Their attention to detail is exceptional.',
          author: 'Property Manager, Midtown Manhattan'
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
        localPhone: '1-800-TOTAL-FS',
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
        localPhone: '1-800-TOTAL-FS',
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
        localPhone: '1-800-TOTAL-FS',
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
        localPhone: '1-800-TOTAL-FS',
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
        localPhone: '1-800-TOTAL-FS',
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
        localPhone: '1-800-TOTAL-FS',
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
        localPhone: '1-800-TOTAL-FS',
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
        localPhone: '1-800-TOTAL-FS',
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
        localPhone: '1-800-TOTAL-FS',
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
    mainPhone: '1-800-TOTAL-FS',
    emergencyPhone: '1-800-TOTAL-FS',
    cities: [
      { 
        slug: 'newark', 
        name: 'Newark',
        areasCovered: ['Downtown Newark', 'Ironbound', 'University Heights', 'North Newark', 'West Newark'],
        neighborhoods: 'Military Park, Penn Station area, Prudential Center area, Newark Airport area',
        localPhone: '1-800-TOTAL-FS',
        responseTime: '90 minutes or less',
        majorClients: 'Serving Newark business district and airport area facilities',
        localTestimonial: {
          text: 'Reliable service for our corporate headquarters. Always professional.',
          author: 'Facility Manager, Newark Corporate Center'
        },
        competitorPricing: 'Best rates in Essex County',
        specialties: ['Corporate offices', 'Transportation facilities', 'Educational buildings'],
        certifications: ['NJ State Licensed', 'Port Authority Approved', 'MBE Certified'],
        localKeywords: ['Newark commercial cleaning', 'Newark janitorial services', 'Essex County office cleaning'],
        parkingNote: 'Newark parking permits available',
        unionStatus: 'Union workforce available'
      },
      { 
        slug: 'jersey-city', 
        name: 'Jersey City',
        areasCovered: ['Downtown Jersey City', 'Newport', 'Exchange Place', 'Journal Square', 'The Heights'],
        neighborhoods: 'Waterfront, Grove Street, Hamilton Park, Paulus Hook',
        localPhone: '1-800-TOTAL-FS',
        responseTime: '90 minutes or less',

        majorClients: 'Serving Jersey City financial district and waterfront developments',
        localTestimonial: {
          text: 'Excellent service for our high-rise office building. Very detail-oriented.',
          author: 'Building Manager, Exchange Place Tower'
        },
        competitorPricing: 'Competitive with NYC rates',
        specialties: ['High-rise buildings', 'Financial offices', 'Luxury residential'],
        certifications: ['NJ Licensed', 'High-rise certified', 'MBE Certified'],
        localKeywords: ['Jersey City commercial cleaning', 'Hudson County janitorial', 'Jersey City office cleaning'],
        parkingNote: 'PATH accessible locations',
        unionStatus: 'Union and non-union options'
      },
      { 
        slug: 'paterson', 
        name: 'Paterson',
        areasCovered: ['Downtown Paterson', 'Eastside', 'South Paterson', 'Totowa section', 'Hillcrest'],
        neighborhoods: 'Great Falls area, Market Street, Main Street corridor',
        localPhone: '1-800-TOTAL-FS',
        responseTime: '2 hours or less',
        majorClients: 'Serving Paterson industrial and healthcare facilities',
        localTestimonial: {
          text: 'Dependable service for our manufacturing facility. Great value.',
          author: 'Operations Manager, Paterson Industrial Park'
        },
        competitorPricing: 'Most affordable in Passaic County',
        specialties: ['Industrial facilities', 'Healthcare', 'Manufacturing plants'],
        certifications: ['NJ State Certified', 'Industrial cleaning certified', 'MBE Certified'],
        localKeywords: ['Paterson commercial cleaning', 'Passaic County janitorial', 'Paterson industrial cleaning'],
        parkingNote: 'Ample free parking',
        unionStatus: 'Flexible workforce'
      },
      { 
        slug: 'elizabeth', 
        name: 'Elizabeth',
        areasCovered: ['Downtown Elizabeth', 'Midtown', 'The Port', 'Elmora', 'Westminster'],
        neighborhoods: 'Broad Street, Elizabeth Avenue, North Avenue corridor',
        localPhone: '1-800-TOTAL-FS',
        responseTime: '90 minutes or less',
        majorClients: 'Serving Port Elizabeth area and downtown businesses',
        localTestimonial: {
          text: 'Great service for our logistics facility. Understands our 24/7 needs.',
          author: 'Facility Director, Elizabeth Port Complex'
        },
        competitorPricing: 'Competitive port-area rates',
        specialties: ['Logistics facilities', 'Port operations', 'Transportation hubs'],
        certifications: ['Port Authority approved', 'TWIC cleared staff', 'MBE Certified'],
        localKeywords: ['Elizabeth commercial cleaning', 'Elizabeth port cleaning', 'Union County janitorial'],
        parkingNote: 'Port area access available',
        unionStatus: 'Union workforce'
      },
      { 
        slug: 'edison', 
        name: 'Edison',
        areasCovered: ['Edison Township', 'Menlo Park', 'Oak Tree', 'Clara Barton', 'New Durham'],
        neighborhoods: 'Route 1 corridor, Oak Tree Road, Raritan Center',
        localPhone: '1-800-TOTAL-FS',
        responseTime: '90 minutes or less',
        majorClients: 'Serving Raritan Center and Route 1 businesses',
        localTestimonial: {
          text: 'Excellent service for our corporate campus. Very professional team.',
          author: 'Facilities Manager, Edison Corporate Park'
        },
        competitorPricing: 'Best value in Middlesex County',
        specialties: ['Corporate campuses', 'Tech offices', 'Warehouse facilities'],
        certifications: ['NJ State Licensed', 'Green cleaning certified', 'MBE Certified'],
        localKeywords: ['Edison commercial cleaning', 'Middlesex County janitorial', 'Edison office cleaning'],
        parkingNote: 'Easy highway access',
        unionStatus: 'Flexible options'
      },
      { 
        slug: 'trenton', 
        name: 'Trenton',
        areasCovered: ['Downtown Trenton', 'North Trenton', 'West Trenton', 'Chambersburg', 'Mill Hill'],
        neighborhoods: 'State House area, Hanover Street, Market Street',
        localPhone: '1-800-TOTAL-FS',
        responseTime: '90 minutes or less',
        majorClients: 'Serving state government buildings and downtown offices',
        localTestimonial: {
          text: 'Reliable service for our state office building. Security cleared staff.',
          author: 'Building Administrator, Trenton State Complex'
        },
        competitorPricing: 'State contract rates available',
        specialties: ['Government buildings', 'Historic properties', 'Office complexes'],
        certifications: ['State approved vendor', 'Security clearances', 'MBE Certified'],
        localKeywords: ['Trenton commercial cleaning', 'Mercer County janitorial', 'Trenton government cleaning'],
        parkingNote: 'State garage access',
        unionStatus: 'Union workforce'
      },
      { 
        slug: 'hoboken', 
        name: 'Hoboken',
        areasCovered: ['Hoboken Waterfront', 'Downtown', 'Uptown', 'The Heights', 'West Hoboken'],
        neighborhoods: 'Washington Street, River Street, PATH station area',
        localPhone: '1-800-TOTAL-FS',
        responseTime: '60 minutes or less',
        majorClients: 'Serving Hoboken tech companies and luxury buildings',
        localTestimonial: {
          text: 'Perfect for our boutique office space. Attention to detail is outstanding.',
          author: 'Office Manager, Hoboken Tech Hub'
        },
        competitorPricing: 'Premium service at fair rates',
        specialties: ['Tech offices', 'Luxury residential', 'Boutique commercial'],
        certifications: ['NJ Licensed', 'Green certified', 'MBE Certified'],
        localKeywords: ['Hoboken commercial cleaning', 'Hoboken office cleaning', 'Hudson County janitorial'],
        parkingNote: 'Street parking permits available',
        unionStatus: 'Professional workforce'
      },
      { 
        slug: 'paramus', 
        name: 'Paramus',
        areasCovered: ['Garden State Plaza area', 'Route 4 corridor', 'Route 17 North', 'Fashion Center', 'Corporate parks'],
        neighborhoods: 'Retail capital of NJ, office parks, shopping centers',
        localPhone: '1-800-TOTAL-FS',
        responseTime: '90 minutes or less',
        majorClients: 'Serving Paramus retail centers and corporate office parks',
        localTestimonial: {
          text: 'Outstanding service for our retail complex. Understands high-traffic needs.',
          author: 'Facility Manager, Paramus Shopping Center'
        },
        competitorPricing: 'Competitive Bergen County rates',
        specialties: ['Retail centers', 'Office parks', 'Shopping complexes', 'Corporate facilities'],
        certifications: ['NJ State Licensed', 'Retail facility certified', 'MBE Certified'],
        localKeywords: ['Paramus commercial cleaning', 'Bergen County janitorial', 'Paramus retail cleaning'],
        parkingNote: 'Mall and office park parking available',
        unionStatus: 'Flexible workforce'
      },
      { 
        slug: 'princeton', 
        name: 'Princeton',
        areasCovered: ['Princeton University area', 'Route 1 corridor', 'Princeton Junction', 'Lawrenceville', 'West Windsor'],
        neighborhoods: 'University campus, biotech corridor, research facilities',
        localPhone: '1-800-TOTAL-FS',
        responseTime: '90 minutes or less',
        majorClients: 'Serving Princeton University and biotech research facilities',
        localTestimonial: {
          text: 'Excellent service for our research facility. Understands laboratory requirements.',
          author: 'Operations Director, Princeton Biotech Center'
        },
        competitorPricing: 'Competitive university and research rates',
        specialties: ['Universities', 'Biotech facilities', 'Research labs', 'Corporate headquarters'],
        certifications: ['University approved', 'Laboratory safety certified', 'MBE Certified'],
        localKeywords: ['Princeton commercial cleaning', 'Princeton University cleaning', 'biotech facility cleaning'],
        parkingNote: 'Campus and research facility parking',
        unionStatus: 'Professional academic workforce'
      },
      { 
        slug: 'secaucus', 
        name: 'Secaucus / Meadowlands',
        areasCovered: ['Secaucus business district', 'Meadowlands complex', 'Harmon Cove', 'Park Plaza', 'Corporate campuses'],
        neighborhoods: 'Corporate campuses, hotels, event venues, logistics hubs',
        localPhone: '1-800-TOTAL-FS',
        responseTime: '60 minutes or less',
        majorClients: 'Serving Meadowlands corporate campuses and event venues',
        localTestimonial: {
          text: 'Reliable service for our corporate campus. Great for event cleanup too.',
          author: 'Facility Manager, Meadowlands Corporate Center'
        },
        competitorPricing: 'Premium corporate campus rates',
        specialties: ['Corporate campuses', 'Hotels', 'Event venues', 'Conference centers'],
        certifications: ['NJ Licensed', 'Event facility certified', 'MBE Certified'],
        localKeywords: ['Secaucus commercial cleaning', 'Meadowlands cleaning', 'corporate campus cleaning'],
        parkingNote: 'Ample corporate campus parking',
        unionStatus: 'Union and non-union options'
      },
      { 
        slug: 'morristown', 
        name: 'Morristown',
        areasCovered: ['Downtown Morristown', 'Morris Corporate Center', 'Headquarters Plaza', 'Madison Avenue', 'Corporate offices'],
        neighborhoods: 'Corporate headquarters, professional services, historic district',
        localPhone: '1-800-TOTAL-FS',
        responseTime: '90 minutes or less',
        majorClients: 'Serving Morristown corporate headquarters and professional services',
        localTestimonial: {
          text: 'Professional service for our corporate HQ. Very responsive team.',
          author: 'Operations Manager, Morristown Corporate Plaza'
        },
        competitorPricing: 'Competitive Morris County rates',
        specialties: ['Corporate headquarters', 'Professional services', 'Law firms', 'Financial offices'],
        certifications: ['NJ State Licensed', 'Professional services certified', 'MBE Certified'],
        localKeywords: ['Morristown commercial cleaning', 'Morris County janitorial', 'Morristown office cleaning'],
        parkingNote: 'Downtown and corporate parking available',
        unionStatus: 'Professional workforce'
      },
      { 
        slug: 'cherry-hill', 
        name: 'Cherry Hill / Camden',
        areasCovered: ['Cherry Hill Township', 'Camden business district', 'Route 70 corridor', 'Haddonfield', 'Voorhees'],
        neighborhoods: 'South Jersey corridor, corporate offices, healthcare facilities',
        localPhone: '1-800-TOTAL-FS',
        responseTime: '2 hours or less',
        majorClients: 'Serving South Jersey corporate and healthcare facilities',
        localTestimonial: {
          text: 'Excellent service for our healthcare facility. Understands medical standards.',
          author: 'Administrator, Cherry Hill Medical Center'
        },
        competitorPricing: 'Best value in South Jersey',
        specialties: ['Healthcare facilities', 'Corporate offices', 'Medical centers', 'Professional services'],
        certifications: ['Healthcare compliant', 'NJ State Licensed', 'MBE Certified'],
        localKeywords: ['Cherry Hill commercial cleaning', 'Camden janitorial', 'South Jersey cleaning'],
        parkingNote: 'Free parking at most locations',
        unionStatus: 'Flexible workforce options'
      }
    ]
  },
  connecticut: {
    name: 'Connecticut',
    licenseNumber: 'CT-JAN-2024-5544',
    insurance: 'General Liability $2M, Workers Comp Active',
    mainPhone: '1-800-TOTAL-FS',
    emergencyPhone: '1-800-TOTAL-FS',
    cities: [
      { 
        slug: 'stamford', 
        name: 'Stamford',
        areasCovered: ['Downtown Stamford', 'Harbor Point', 'Bulls Head', 'North Stamford', 'Springdale'],
        neighborhoods: 'Bedford Street, Atlantic Street, Washington Boulevard, High Ridge Road',
        localPhone: '1-800-TOTAL-FS',
        responseTime: '90 minutes or less',
        majorClients: 'Serving Stamford financial district and corporate headquarters',
        localTestimonial: {
          text: 'Outstanding service for our corporate headquarters. Consistently excellent.',
          author: 'Facilities Director, Stamford Fortune 500'
        },
        competitorPricing: 'Competitive Fairfield County rates',
        specialties: ['Corporate headquarters', 'Financial services', 'Tech companies'],
        certifications: ['CT State Licensed', 'LEED compliant', 'MBE Certified'],
        localKeywords: ['Stamford commercial cleaning', 'Fairfield County janitorial', 'Stamford office cleaning'],
        parkingNote: 'Downtown garage access',
        unionStatus: 'Professional workforce'
      },
      { 
        slug: 'hartford', 
        name: 'Hartford',
        areasCovered: ['Downtown Hartford', 'West Hartford', 'Asylum Hill', 'Frog Hollow', 'South End'],
        neighborhoods: 'Constitution Plaza, Bushnell area, Capitol area',
        localPhone: '1-800-TOTAL-FS',
        responseTime: '90 minutes or less',
        majorClients: 'Serving Hartford insurance companies and state buildings',
        localTestimonial: {
          text: 'Excellent service for our insurance headquarters. Very reliable.',
          author: 'Facility Manager, Hartford Insurance District'
        },
        competitorPricing: 'Best rates in Greater Hartford',
        specialties: ['Insurance offices', 'Government buildings', 'Healthcare facilities'],
        certifications: ['CT Licensed', 'State approved vendor', 'MBE Certified'],
        localKeywords: ['Hartford commercial cleaning', 'Hartford janitorial services', 'Capitol area cleaning'],
        parkingNote: 'Downtown parking available',
        unionStatus: 'Union options available'
      },
      { 
        slug: 'new-haven', 
        name: 'New Haven',
        areasCovered: ['Downtown New Haven', 'Yale area', 'East Rock', 'Westville', 'Fair Haven'],
        neighborhoods: 'Chapel Street, Broadway, Whitney Avenue, Science Park',
        localPhone: '1-800-TOTAL-FS',
        responseTime: '90 minutes or less',
        majorClients: 'Serving Yale University area and medical district',
        localTestimonial: {
          text: 'Great service for our medical facility. Understands healthcare requirements.',
          author: 'Operations Director, New Haven Medical Center'
        },
        competitorPricing: 'Competitive academic and medical rates',
        specialties: ['University buildings', 'Medical facilities', 'Research labs'],
        certifications: ['Healthcare compliant', 'University approved', 'MBE Certified'],
        localKeywords: ['New Haven commercial cleaning', 'Yale area janitorial', 'New Haven medical cleaning'],
        parkingNote: 'University area parking',
        unionStatus: 'Flexible workforce'
      },
      { 
        slug: 'bridgeport', 
        name: 'Bridgeport',
        areasCovered: ['Downtown Bridgeport', 'Black Rock', 'North End', 'East Side', 'West Side'],
        neighborhoods: 'Main Street, Fairfield Avenue, Boston Avenue, Park Avenue',
        localPhone: '1-800-TOTAL-FS',
        responseTime: '90 minutes or less',
        majorClients: 'Serving Bridgeport businesses and healthcare facilities',
        localTestimonial: {
          text: 'Reliable and affordable service for our facility. Great communication.',
          author: 'Building Manager, Bridgeport Business Center'
        },
        competitorPricing: 'Most affordable in the region',
        specialties: ['Healthcare', 'Industrial', 'Educational facilities'],
        certifications: ['CT State Certified', 'OSHA compliant', 'MBE Certified'],
        localKeywords: ['Bridgeport commercial cleaning', 'Bridgeport janitorial', 'Fairfield County cleaning'],
        parkingNote: 'Ample parking available',
        unionStatus: 'Union workforce'
      },
      { 
        slug: 'norwalk', 
        name: 'Norwalk',
        areasCovered: ['Downtown Norwalk', 'East Norwalk', 'South Norwalk', 'Rowayton', 'Cranbury'],
        neighborhoods: 'Wall Street, Washington Street, Connecticut Avenue, Main Avenue',
        localPhone: '1-800-TOTAL-FS',
        responseTime: '90 minutes or less',
        majorClients: 'Serving Norwalk corporate offices and retail centers',
        localTestimonial: {
          text: 'Excellent service for our office complex. Always responsive to requests.',
          author: 'Property Manager, Norwalk Corporate Park'
        },
        competitorPricing: 'Fair Fairfield County pricing',
        specialties: ['Corporate offices', 'Retail centers', 'Mixed-use properties'],
        certifications: ['CT Licensed', 'Green cleaning', 'MBE Certified'],
        localKeywords: ['Norwalk commercial cleaning', 'Norwalk office cleaning', 'SoNo janitorial'],
        parkingNote: 'Convenient parking',
        unionStatus: 'Professional staff'
      },
      { 
        slug: 'greenwich', 
        name: 'Greenwich',
        areasCovered: ['Greenwich Avenue', 'Stamford border', 'Cos Cob', 'Old Greenwich', 'Riverside'],
        neighborhoods: 'Hedge funds, luxury retail, boutique offices, financial district',
        localPhone: '1-800-TOTAL-FS',
        responseTime: '60 minutes or less',
        majorClients: 'Serving Greenwich hedge funds and luxury retail spaces',
        localTestimonial: {
          text: 'Exceptional service for our hedge fund office. Understands confidentiality needs.',
          author: 'Office Manager, Greenwich Financial Group'
        },
        competitorPricing: 'Premium Greenwich rates',
        specialties: ['Hedge funds', 'Luxury retail', 'Boutique offices', 'Financial services'],
        certifications: ['CT State Licensed', 'Financial services approved', 'MBE Certified'],
        localKeywords: ['Greenwich commercial cleaning', 'hedge fund cleaning', 'Greenwich luxury cleaning'],
        parkingNote: 'Valet and premium parking available',
        unionStatus: 'Professional discretionary workforce'
      },
      { 
        slug: 'westport', 
        name: 'Westport',
        areasCovered: ['Downtown Westport', 'Post Road East', 'Saugatuck', 'Compo', 'Greens Farms'],
        neighborhoods: 'Professional offices, retail, luxury services, corporate facilities',
        localPhone: '1-800-TOTAL-FS',
        responseTime: '90 minutes or less',
        majorClients: 'Serving Westport professional offices and luxury retail',
        localTestimonial: {
          text: 'Perfect service for our professional office complex. Very reliable.',
          author: 'Property Manager, Westport Corporate Center'
        },
        competitorPricing: 'Competitive Fairfield County luxury rates',
        specialties: ['Professional offices', 'Retail spaces', 'Luxury services', 'Corporate facilities'],
        certifications: ['CT Licensed', 'Luxury service certified', 'MBE Certified'],
        localKeywords: ['Westport commercial cleaning', 'Westport office cleaning', 'Fairfield County luxury cleaning'],
        parkingNote: 'Downtown and office complex parking',
        unionStatus: 'Professional staff'
      },
      { 
        slug: 'danbury', 
        name: 'Danbury',
        areasCovered: ['Downtown Danbury', 'Mill Plain Road', 'New York border', 'Industrial parks', 'Corporate centers'],
        neighborhoods: 'Industrial complexes, corporate parks, manufacturing facilities',
        localPhone: '1-800-TOTAL-FS',
        responseTime: '90 minutes or less',
        majorClients: 'Serving Danbury industrial and corporate parks',
        localTestimonial: {
          text: 'Reliable service for our manufacturing facility. Understands industrial needs.',
          author: 'Operations Manager, Danbury Industrial Park'
        },
        competitorPricing: 'Competitive industrial rates',
        specialties: ['Industrial facilities', 'Corporate parks', 'Manufacturing', 'Warehouses'],
        certifications: ['CT State Licensed', 'Industrial safety certified', 'MBE Certified'],
        localKeywords: ['Danbury commercial cleaning', 'Danbury industrial cleaning', 'Connecticut manufacturing cleaning'],
        parkingNote: 'Free industrial facility parking',
        unionStatus: 'Union and non-union workforce'
      },
      { 
        slug: 'fairfield', 
        name: 'Fairfield',
        areasCovered: ['Fairfield University area', 'Post Road', 'Black Rock Turnpike', 'Southport', 'Greenfield Hill'],
        neighborhoods: 'Education facilities, professional offices, retail centers',
        localPhone: '1-800-TOTAL-FS',
        responseTime: '90 minutes or less',
        majorClients: 'Serving Fairfield University and surrounding professional offices',
        localTestimonial: {
          text: 'Great service for our university facilities. Very professional team.',
          author: 'Facilities Director, Fairfield University'
        },
        competitorPricing: 'Competitive educational and professional rates',
        specialties: ['Educational facilities', 'Professional offices', 'Retail centers', 'University buildings'],
        certifications: ['University approved', 'Educational facility certified', 'MBE Certified'],
        localKeywords: ['Fairfield commercial cleaning', 'Fairfield University cleaning', 'educational facility cleaning'],
        parkingNote: 'Campus and office parking available',
        unionStatus: 'Educational workforce'
      },
      { 
        slug: 'waterbury', 
        name: 'Waterbury',
        areasCovered: ['Downtown Waterbury', 'Chase Parkway', 'Wolcott Street', 'Industrial corridor', 'Medical district'],
        neighborhoods: 'Healthcare facilities, manufacturing, government buildings',
        localPhone: '1-800-TOTAL-FS',
        responseTime: '2 hours or less',
        majorClients: 'Serving Waterbury healthcare and manufacturing facilities',
        localTestimonial: {
          text: 'Dependable service for our medical center. Understands healthcare standards.',
          author: 'Administrator, Waterbury Medical Center'
        },
        competitorPricing: 'Affordable healthcare and industrial rates',
        specialties: ['Healthcare facilities', 'Manufacturing', 'Government buildings', 'Medical centers'],
        certifications: ['Healthcare compliant', 'Industrial safety certified', 'MBE Certified'],
        localKeywords: ['Waterbury commercial cleaning', 'Waterbury healthcare cleaning', 'Connecticut medical cleaning'],
        parkingNote: 'Hospital and facility parking available',
        unionStatus: 'Union workforce options'
      }
    ]
  },
  florida: {
    name: 'Florida',
    licenseNumber: 'FL-JANITORIAL-2024-8745',
    insurance: 'General Liability $2M, Hurricane damage coverage',
    mainPhone: '1-800-TOTAL-FS',
    emergencyPhone: '1-800-TOTAL-FS',
    cities: [
      { 
        slug: 'miami', 
        name: 'Miami',
        areasCovered: ['Downtown Miami', 'Brickell', 'Coral Gables', 'Coconut Grove', 'Miami Beach'],
        neighborhoods: 'Financial District, Design District, Wynwood, Midtown, Aventura',
        localPhone: '1-800-TOTAL-FS',
        responseTime: '90 minutes in Dade County',
        majorClients: 'Serving Brickell financial district and Miami Beach hotels',
        localTestimonial: {
          text: 'Outstanding hurricane cleanup and regular maintenance. True professionals.',
          author: 'Property Manager, Brickell City Centre'
        },
        competitorPricing: 'Competitive Miami-Dade rates',
        specialties: ['High-rise buildings', 'Hurricane cleanup', 'Luxury properties', 'Hotels'],
        certifications: ['Florida Licensed', 'Hurricane response certified', 'MBE Certified'],
        localKeywords: ['Miami commercial cleaning', 'Brickell janitorial', 'Miami office cleaning', 'Miami Beach cleaning'],
        parkingNote: 'Valet and garage arrangements',
        unionStatus: 'Non-union workforce'
      },
      { 
        slug: 'orlando', 
        name: 'Orlando',
        areasCovered: ['Downtown Orlando', 'Lake Nona', 'Winter Park', 'Dr. Phillips', 'International Drive'],
        neighborhoods: 'Church Street, Orange Avenue, Mills District, Thornton Park',
        localPhone: '1-800-TOTAL-FS',
        responseTime: '90 minutes or less',
        majorClients: 'Serving Orlando theme park area and medical city',
        localTestimonial: {
          text: 'Excellent service for our hospitality facility. Understands tourism industry needs.',
          author: 'Director of Operations, Orlando Resort'
        },
        competitorPricing: 'Best value in Central Florida',
        specialties: ['Hospitality', 'Medical facilities', 'Entertainment venues', 'Convention centers'],
        certifications: ['Florida State Licensed', 'Theme park approved', 'MBE Certified'],
        localKeywords: ['Orlando commercial cleaning', 'Orlando janitorial', 'International Drive cleaning', 'Orlando hotel cleaning'],
        parkingNote: 'Easy interstate access',
        unionStatus: 'Flexible workforce'
      },
      { 
        slug: 'tampa', 
        name: 'Tampa',
        areasCovered: ['Downtown Tampa', 'Westshore', 'Hyde Park', 'Ybor City', 'Channelside'],
        neighborhoods: 'Bayshore Boulevard, Dale Mabry, Kennedy Boulevard, Florida Avenue',
        localPhone: '1-800-TOTAL-FS',
        responseTime: '90 minutes or less',
        majorClients: 'Serving Tampa Bay financial district and medical facilities',
        localTestimonial: {
          text: 'Reliable service through hurricane season. Always prepared and professional.',
          author: 'Facility Manager, Tampa Bay Plaza'
        },
        competitorPricing: 'Competitive Tampa Bay rates',
        specialties: ['Corporate offices', 'Medical facilities', 'Sports venues', 'Retail centers'],
        certifications: ['Florida Licensed', 'Storm response ready', 'MBE Certified'],
        localKeywords: ['Tampa commercial cleaning', 'Tampa Bay janitorial', 'Westshore cleaning', 'Tampa office cleaning'],
        parkingNote: 'Downtown parking available',
        unionStatus: 'Professional workforce'
      },
      { 
        slug: 'fort-lauderdale', 
        name: 'Fort Lauderdale',
        areasCovered: ['Downtown Fort Lauderdale', 'Las Olas', 'Beach Area', 'Wilton Manors', 'Victoria Park'],
        neighborhoods: 'Las Olas Boulevard, Federal Highway, Sunrise Boulevard, A1A',
        localPhone: '1-800-TOTAL-FS',
        responseTime: '90 minutes or less',
        majorClients: 'Serving Fort Lauderdale marine industry and beach hotels',
        localTestimonial: {
          text: 'Perfect for our beachfront property. Handles salt air challenges expertly.',
          author: 'General Manager, Fort Lauderdale Beach Resort'
        },
        competitorPricing: 'Premium service at fair rates',
        specialties: ['Marine facilities', 'Beach properties', 'Luxury hotels', 'Yacht clubs'],
        certifications: ['Florida State Licensed', 'Marine industry approved', 'MBE Certified'],
        localKeywords: ['Fort Lauderdale commercial cleaning', 'Las Olas janitorial', 'Fort Lauderdale beach cleaning'],
        parkingNote: 'Beach and downtown access',
        unionStatus: 'Professional staff'
      },
      { 
        slug: 'west-palm-beach', 
        name: 'West Palm Beach',
        areasCovered: ['Downtown West Palm Beach', 'CityPlace', 'Rosemary Square', 'Palm Beach Gardens', 'Wellington'],
        neighborhoods: 'Luxury retail, hedge funds, corporate offices, medical centers',
        localPhone: '1-800-TOTAL-FS',
        responseTime: '90 minutes or less',
        majorClients: 'Serving West Palm Beach luxury retail and financial offices',
        localTestimonial: {
          text: 'Excellent service for our luxury office complex. Very professional.',
          author: 'Property Manager, West Palm Beach Corporate Center'
        },
        competitorPricing: 'Premium Palm Beach County rates',
        specialties: ['Luxury retail', 'Hedge funds', 'Corporate offices', 'Medical facilities'],
        certifications: ['Florida Licensed', 'Luxury service certified', 'MBE Certified'],
        localKeywords: ['West Palm Beach commercial cleaning', 'Palm Beach County janitorial', 'luxury office cleaning'],
        parkingNote: 'Valet and garage parking available',
        unionStatus: 'Professional staff'
      },
      { 
        slug: 'jacksonville', 
        name: 'Jacksonville',
        areasCovered: ['Downtown Jacksonville', 'Southside', 'Beaches', 'Airport area', 'St. Johns County'],
        neighborhoods: 'Logistics hubs, healthcare facilities, corporate headquarters',
        localPhone: '1-800-TOTAL-FS',
        responseTime: '2 hours or less',
        majorClients: 'Serving Jacksonville logistics and healthcare facilities',
        localTestimonial: {
          text: 'Reliable service for our distribution center. Great logistics support.',
          author: 'Operations Manager, Jacksonville Distribution Hub'
        },
        competitorPricing: 'Competitive Northeast Florida rates',
        specialties: ['Logistics facilities', 'Healthcare', 'Corporate headquarters', 'Distribution centers'],
        certifications: ['Florida Licensed', 'Logistics facility certified', 'MBE Certified'],
        localKeywords: ['Jacksonville commercial cleaning', 'Northeast Florida janitorial', 'logistics cleaning'],
        parkingNote: 'Free parking at most facilities',
        unionStatus: 'Flexible workforce'
      },
      { 
        slug: 'naples', 
        name: 'Naples',
        areasCovered: ['Downtown Naples', 'Fifth Avenue South', 'Waterside Shops', 'Pelican Bay', 'North Naples'],
        neighborhoods: 'Ultra-luxury residential, retail, medical facilities',
        localPhone: '1-800-TOTAL-FS',
        responseTime: '90 minutes or less',
        majorClients: 'Serving Naples ultra-luxury residential and retail spaces',
        localTestimonial: {
          text: 'Outstanding service for our luxury development. Attention to detail is exceptional.',
          author: 'Property Manager, Naples Luxury Residences'
        },
        competitorPricing: 'Premium Southwest Florida luxury rates',
        specialties: ['Ultra-luxury residential', 'Luxury retail', 'Medical facilities', 'Country clubs'],
        certifications: ['Florida Licensed', 'Luxury residential certified', 'MBE Certified'],
        localKeywords: ['Naples commercial cleaning', 'luxury residential cleaning', 'Southwest Florida cleaning'],
        parkingNote: 'Valet and concierge parking services',
        unionStatus: 'Professional luxury staff'
      },
      { 
        slug: 'fort-myers', 
        name: 'Fort Myers',
        areasCovered: ['Downtown Fort Myers', 'Gulf Coast Town Center', 'Coconut Point', 'Colonial Boulevard', 'Medical corridor'],
        neighborhoods: 'Growing commercial hubs, medical centers, retail developments',
        localPhone: '1-800-TOTAL-FS',
        responseTime: '90 minutes or less',
        majorClients: 'Serving Fort Myers medical centers and commercial developments',
        localTestimonial: {
          text: 'Great service for our medical facility. Understands healthcare needs.',
          author: 'Administrator, Fort Myers Medical Center'
        },
        competitorPricing: 'Competitive Southwest Florida rates',
        specialties: ['Medical centers', 'Commercial hubs', 'Retail developments', 'Healthcare facilities'],
        certifications: ['Healthcare compliant', 'Florida Licensed', 'MBE Certified'],
        localKeywords: ['Fort Myers commercial cleaning', 'Southwest Florida medical cleaning', 'Fort Myers janitorial'],
        parkingNote: 'Medical center and retail parking',
        unionStatus: 'Professional healthcare workforce'
      },
      { 
        slug: 'boca-raton', 
        name: 'Boca Raton',
        areasCovered: ['Corporate Center', 'Town Center', 'Mizner Park', 'University campus', 'Technology parks'],
        neighborhoods: 'Corporate offices, financial institutions, universities, tech companies',
        localPhone: '1-800-TOTAL-FS',
        responseTime: '90 minutes or less',
        majorClients: 'Serving Boca Raton corporate offices and financial institutions',
        localTestimonial: {
          text: 'Professional service for our corporate headquarters. Very reliable team.',
          author: 'Facilities Manager, Boca Raton Corporate Center'
        },
        competitorPricing: 'Premium South Florida corporate rates',
        specialties: ['Corporate offices', 'Financial institutions', 'Universities', 'Technology companies'],
        certifications: ['Financial services approved', 'University certified', 'MBE Certified'],
        localKeywords: ['Boca Raton commercial cleaning', 'South Florida corporate cleaning', 'Boca office cleaning'],
        parkingNote: 'Corporate campus parking available',
        unionStatus: 'Professional corporate workforce'
      },
      { 
        slug: 'st-petersburg', 
        name: 'St. Petersburg',
        areasCovered: ['Downtown St. Petersburg', 'Central Avenue', 'Westshore', 'Gateway area', 'Medical district'],
        neighborhoods: 'Downtown office market, retail centers, healthcare facilities',
        localPhone: '1-800-TOTAL-FS',
        responseTime: '90 minutes or less',
        majorClients: 'Serving St. Petersburg downtown offices and healthcare facilities',
        localTestimonial: {
          text: 'Excellent service for our downtown office building. Very professional.',
          author: 'Building Manager, St. Petersburg Office Tower'
        },
        competitorPricing: 'Competitive Tampa Bay area rates',
        specialties: ['Downtown offices', 'Retail centers', 'Healthcare facilities', 'Medical centers'],
        certifications: ['Florida Licensed', 'Healthcare compliant', 'MBE Certified'],
        localKeywords: ['St. Petersburg commercial cleaning', 'Tampa Bay cleaning', 'St. Pete office cleaning'],
        parkingNote: 'Downtown parking garages available',
        unionStatus: 'Professional workforce'
      }
    ]
  }
}