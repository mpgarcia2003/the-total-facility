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
    longDesc: 'Our day porters maintain pristine facilities during business hours, handling everything from lobby maintenance to restroom monitoring and emergency cleanups.',
    keywords: ['day porter', 'daytime cleaning', 'lobby maintenance', 'commercial porter'],
    features: [
      'Continuous lobby and entrance maintenance',
      'Restroom monitoring and restocking',
      'Kitchen and break room upkeep',
      'Meeting room turnovers',
      'Spill and emergency response',
      'Trash removal throughout the day'
    ],
    basePrice: '$25-30/hour',
    industries: ['Corporate Offices', 'Medical Facilities', 'Schools', 'Retail']
  },
  { 
    slug: 'night-porter', 
    name: 'Night Porter Services',
    shortDesc: 'After-hours deep cleaning and maintenance',
    longDesc: 'Our night porters work when your facility is empty, performing deep cleaning and maintenance tasks that cannot be done during business hours.',
    keywords: ['night porter', 'overnight cleaning', 'after hours cleaning'],
    features: [
      'Deep carpet and floor cleaning',
      'Detailed desk and workstation cleaning',
      'Kitchen deep cleaning',
      'High dusting and vent cleaning',
      'Floor stripping and waxing',
      'Comprehensive restroom sanitization'
    ],
    basePrice: '$25-30/hour',
    industries: ['Banks', 'Corporate Offices', 'Healthcare', 'Educational']
  },
  { 
    slug: 'office-cleaning', 
    name: 'Office Cleaning',
    shortDesc: 'Complete office cleaning solutions',
    longDesc: 'Comprehensive office cleaning services tailored to your business needs, from daily maintenance to deep cleaning programs.',
    keywords: ['office cleaning', 'commercial cleaning', 'business cleaning'],
    features: [
      'Workstation and desk cleaning',
      'Conference room maintenance',
      'Kitchen and break area cleaning',
      'Restroom sanitization',
      'Floor care and vacuuming',
      'Waste management'
    ],
    basePrice: '$0.05-0.15/sq ft',
    industries: ['Corporate Offices', 'Law Firms', 'Tech Companies', 'Financial Services']
  },
  { 
    slug: 'emergency-cleaning', 
    name: 'Emergency Cleaning (24/7)',
    shortDesc: '24/7 emergency response cleaning',
    longDesc: 'Round-the-clock emergency cleaning services for floods, fires, storms, and other urgent facility needs.',
    keywords: ['emergency cleaning', '24/7 cleaning', 'disaster cleanup'],
    features: [
      'Water damage and flood cleanup',
      'Fire and smoke damage restoration',
      'Storm and wind damage cleanup',
      'Biohazard cleaning',
      'Rapid response within 2 hours',
      'Insurance coordination'
    ],
    basePrice: '$65-85/hour',
    industries: ['All Industries', 'Property Management', 'Healthcare', 'Retail']
  },
  { 
    slug: 'post-construction', 
    name: 'Post-Construction Cleaning',
    shortDesc: 'Construction site final cleaning',
    longDesc: 'Detailed post-construction cleanup to prepare your space for occupancy, removing all debris, dust, and construction materials.',
    keywords: ['post construction cleaning', 'construction cleanup', 'final cleaning'],
    features: [
      'Debris and material removal',
      'Detailed dust removal',
      'Window and glass cleaning',
      'Floor cleaning and finishing',
      'Fixture and surface polishing',
      'HVAC vent cleaning'
    ],
    basePrice: '$0.35-0.55/sq ft',
    industries: ['Construction', 'Real Estate', 'Property Development', 'Renovation']
  },
  { 
    slug: 'carpet-shampoo', 
    name: 'Carpet Shampoo/Extraction',
    shortDesc: 'Deep carpet cleaning and extraction',
    longDesc: 'Professional carpet cleaning using hot water extraction and specialized equipment to remove dirt, stains, and allergens.',
    keywords: ['carpet cleaning', 'carpet shampoo', 'carpet extraction'],
    features: [
      'Hot water extraction cleaning',
      'Stain and spot treatment',
      'Deodorizing and sanitizing',
      'Quick drying techniques',
      'Carpet protection application',
      'High-traffic area treatment'
    ],
    basePrice: '$0.30-0.45/sq ft',
    industries: ['Offices', 'Hotels', 'Retail', 'Healthcare']
  },
  { 
    slug: 'wood-floor-screen-poly', 
    name: 'Wood Floor Screening + Polyurethane',
    shortDesc: 'Wood floor screening and refinishing',
    longDesc: 'Professional wood floor screening followed by polyurethane application to restore shine and protection without full sanding.',
    keywords: ['wood floor screening', 'polyurethane', 'floor refinishing'],
    features: [
      'Surface screening preparation',
      'Multiple polyurethane coats',
      'Dust-free screening process',
      'Choice of finish types',
      'Traffic lane repair',
      '24-48 hour cure time'
    ],
    basePrice: '$2-4/sq ft',
    industries: ['Corporate Offices', 'Retail', 'Museums', 'Educational']
  },
  { 
    slug: 'wood-floor-sand-poly', 
    name: 'Wood Floor Sanding + Polyurethane',
    shortDesc: 'Complete wood floor sanding and refinishing',
    longDesc: 'Full wood floor sanding and refinishing service to completely restore damaged or worn floors to like-new condition.',
    keywords: ['wood floor sanding', 'floor refinishing', 'polyurethane'],
    features: [
      'Complete floor sanding',
      'Gap filling and repairs',
      'Stain application (optional)',
      'Multiple polyurethane coats',
      'Dustless sanding system',
      '3-5 day project timeline'
    ],
    basePrice: '$3-7/sq ft',
    industries: ['Historic Buildings', 'Luxury Offices', 'High-End Retail', 'Hotels']
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
      }
    ]
  }
}