export type Location = {
  id: "northside" | "downtown"
  name: string
  addressLines: string[]
  phone: string
  email: string
  hours: string[]
  mapUrl: string
  orderUrl: string
}

export type NavLink = {
  label: string
  href: string
  children?: { label: string; href: string }[]
}

export type EventItem = {
  slug: string
  title: string
  dateLabel: string
  timeLabel: string
  locationId: Location["id"] | "both"
  description: string
  lineup?: string[]
  specials?: string[]
  tags?: string[]
}

export type MenuCategory = {
  title: string
  description?: string
  items: { name: string; price?: string; details?: string }[]
}

export type EventSpace = {
  slug: string
  name: string
  size?: string
  capacitySeated: number
  capacityCocktail: number
  description: string
  amenities: string[]
  rentalFee: string
  minimums: string[]
  notes?: string[]
}

export const quickActions = [
  {
    label: "Delivery + Carry-out",
    href: "https://order.online/",
  },
  {
    label: "Book an Event",
    href: "https://www.perfectvenue.com/",
  },
  {
    label: "Order Catering",
    href: "https://order.online/",
  },
]

export const navLinks: NavLink[] = [
  {
    label: "About",
    href: "/about",
    children: [{ label: "Who We Are", href: "/about/who-we-are" }],
  },
  {
    label: "Menu",
    href: "/menu",
    children: [
      { label: "Lunch + Dinner", href: "/menu/lunch-and-dinner" },
      { label: "Drinks", href: "/menu/drinks" },
    ],
  },
  { label: "Live Music & Events", href: "/events" },
  {
    label: "Private Events",
    href: "/private-events",
    children: [
      { label: "Northside", href: "/private-events/northside" },
      { label: "Downtown", href: "/private-events/downtown" },
    ],
  },
  { label: "Catering", href: "/catering" },
  { label: "Loyalty", href: "/loyalty" },
  { label: "Gift Cards", href: "/gift-cards" },
  {
    label: "Contact",
    href: "/contact",
    children: [
      { label: "Careers", href: "/careers" },
      { label: "Northside Application", href: "/careers/northside-application" },
      { label: "Downtown Application", href: "/careers/downtown-application" },
    ],
  },
]

export const locations: Record<Location["id"], Location> = {
  northside: {
    id: "northside",
    name: "Northside",
    addressLines: ["3720 E. 82nd St.", "Indianapolis, IN 46240"],
    phone: "(317) 846-5888",
    email: "northside@thedistricttap.com",
    hours: [
      "Mon-Thu: 11 AM - 10 PM",
      "Fri: 11 AM - 11 PM",
      "Sat: 10 AM - 11 PM",
      "Sun: 10 AM - 9 PM",
      "Brunch: Sun 11 AM - 3 PM",
    ],
    mapUrl: "https://maps.google.com/?q=3720+E+82nd+St+Indianapolis+IN",
    orderUrl: "https://order.online/",
  },
  downtown: {
    id: "downtown",
    name: "Downtown",
    addressLines: ["141 S. Meridian St.", "Indianapolis, IN 46225"],
    phone: "(317) 989-9441",
    email: "downtown@thedistricttap.com",
    hours: [
      "Mon-Thu: 11 AM - 10 PM",
      "Fri: 11 AM - 12 AM",
      "Sat: 10 AM - 12 AM",
      "Sun: 10 AM - 9 PM",
      "Happy Hour: Daily 3 PM - 6 PM",
    ],
    mapUrl: "https://maps.google.com/?q=141+S+Meridian+St+Indianapolis+IN",
    orderUrl: "https://order.online/",
  },
}

export const aboutHighlights = [
  "Opened in 2014 with a focus on craft beer and damn good food.",
  "Two locations offering lunch, dinner, cocktails, and live music.",
  "Plays every major game with wall-to-wall TVs and shuffleboard.",
  "Built for every vibe: date night, game day, and private parties.",
]

export const menuLinks = [
  {
    label: "Downtown Menu (PDF)",
    href: "/menu/lunch-and-dinner/downtown",
  },
  {
    label: "Downtown Event Menu (PDF)",
    href: "/menu/lunch-and-dinner/event",
  },
  {
    label: "Northside Menu (PDF)",
    href: "/menu/lunch-and-dinner/northside",
  },
  {
    label: "Northside Brunch (PDF)",
    href: "/menu/lunch-and-dinner/brunch",
  },
]

export const allergenNotice =
  "Please inform your server of food allergies before ordering. Our kitchens contain peanuts, tree nuts, fish, shellfish, eggs, milk, soy, and gluten. Cross-contamination is possible."

export const downtownMenu: MenuCategory[] = [
  {
    title: "Shareables",
    description: "Dirty-style wings, nachos, pretzels, and craveable starters.",
    items: [
      {
        name: "Dirty Wings",
        details: "House wet + dry rub, ranch or blue cheese.",
      },
      {
        name: "Texas Guac",
        details: "Avocado mash, roasted corn salsa, tortilla chips.",
      },
      {
        name: "District Nachos",
        details: "Pulled chicken, queso, pico, jalapenos, crema.",
      },
    ],
  },
  {
    title: "Handhelds",
    description: "Sandwiches, tacos, and stacked burgers.",
    items: [
      {
        name: "Tap Burger",
        details: "Angus patty, white cheddar, lettuce, tomato, aioli.",
      },
      {
        name: "Nashville Hot Chicken Sandwich",
        details: "Pickle brine fried chicken, slaw, heat sauce.",
      },
      {
        name: "Blackened Fish Tacos",
        details: "Cabbage, cilantro crema, pico.",
      },
    ],
  },
  {
    title: "Entrees",
    description: "Chef-driven plates with bold flavor.",
    items: [
      { name: "Smothered Chicken", details: "House gravy, mashed potatoes, veg." },
      { name: "Hanger Steak", details: "Garlic butter, roasted veg, fries." },
      { name: "Pesto Mac + Cheese", details: "Baked, topped with parmesan." },
    ],
  },
]

export const northsideMenu: MenuCategory[] = [
  {
    title: "District Favorites",
    items: [
      {
        name: "Wet + Dirty Wings",
        details: "Signature rub, house wet sauce, ranch.",
      },
      {
        name: "Firecracker Shrimp",
        details: "Sweet heat glaze, sesame, scallion.",
      },
      {
        name: "Loaded Pub Fries",
        details: "Bacon, cheddar, scallion, ranch drizzle.",
      },
    ],
  },
  {
    title: "Pizzas + Flatbreads",
    items: [
      { name: "Hot Honey Pepperoni", details: "Mozzarella, chili oil." },
      { name: "Buffalo Chicken Flatbread", details: "Ranch, celery, blue cheese." },
      { name: "Margherita", details: "Basil pesto, tomatoes, balsamic." },
    ],
  },
  {
    title: "Burgers + Sandwiches",
    items: [
      { name: "District Smash Burger", details: "Double patty, cheddar, aioli." },
      { name: "Turkey Avocado Club", details: "Bacon, swiss, tomato." },
      { name: "Crispy BBQ Chicken", details: "Onion straws, house slaw." },
    ],
  },
]

export const eventMenu: MenuCategory[] = [
  {
    title: "Large Format Shareables",
    description: "Perfect for parties, office events, and game-day groups.",
    items: [
      { name: "Texas Guac Tray", price: "$55", details: "Serves 10-12." },
      { name: "Wings by the Dozen", price: "$24", details: "Wet + dirty or dry rub." },
      { name: "Pretzel Board", price: "$38", details: "House queso and mustards." },
    ],
  },
  {
    title: "Sandwich + Salad Trays",
    items: [
      { name: "Slider Trio", price: "$60", details: "Cheeseburger, chicken, pulled pork." },
      { name: "Wrap Platter", price: "$58", details: "Buffalo chicken, turkey club, veggie." },
      { name: "District Salad", price: "$45", details: "Mixed greens, cheddar, tomato." },
    ],
  },
]

export const brunchMenu: MenuCategory[] = [
  {
    title: "Brunch Shareables",
    items: [
      {
        name: "Boujee Batter Board",
        details: "Pancakes, berries, sauces, whipped butter.",
      },
      {
        name: "Yeah Toast",
        details: "Texas toast, citrus ricotta, candied bacon.",
      },
    ],
  },
  {
    title: "Brunch Plates",
    items: [
      { name: "Hanger Steak + Eggs", details: "Breakfast potatoes, chimichurri." },
      { name: "Smothered Chicken + Biscuit", details: "Pepper gravy." },
      { name: "Bananas Foster French Toast", details: "Vanilla crema." },
    ],
  },
  {
    title: "Brunch Libations",
    items: [
      { name: "TDT Bloody Mary", details: "Classic or spicy." },
      { name: "Mimosa Flight", details: "Classic, peach, pineapple." },
      { name: "Crandaddy Shareable", details: "Tequila, cranberry, citrus." },
    ],
  },
]

export const cocktails = [
  { name: "Southbound Greyhound", price: "$11", details: "Vodka, grapefruit, basil." },
  { name: "NapTown Chocolate-Tini", price: "$12", details: "Vodka, chocolate, espresso." },
  { name: "Basil Hayden Manhattan", price: "$14", details: "Bourbon, vermouth, bitters." },
  { name: "TDT Espresso Martini", price: "$13", details: "House espresso, vanilla." },
]

export const wineHighlights = [
  { name: "House Chardonnay", price: "$8 / $30" },
  { name: "Kendall Jackson Chardonnay", price: "$12 / $44" },
  { name: "Meiomi Pinot Noir", price: "$12 / $42" },
  { name: "Saint Cosme Cotes du Rhone", price: "$11 / $40" },
]

export const whiskeyHighlights = [
  { name: "Indiana Local", items: ["Starlight", "West Fork", "Hotel Tango"] },
  { name: "Kentucky Bourbon", items: ["Buffalo Trace", "Woodford Reserve", "Weller"] },
  { name: "American Whiskey", items: ["High West", "WhistlePig", "Jack Daniel's"] },
  { name: "Scotch", items: ["Macallan", "Balvenie", "Lagavulin"] },
]

export const events: EventItem[] = [
  {
    slug: "happy-hour-live-music",
    title: "Happy Hour Live Music",
    dateLabel: "Every Friday",
    timeLabel: "3 PM - 6 PM",
    locationId: "both",
    description:
      "Daily happy hour, with Friday live music in the summer lineup. Grab $2 off burgers, rotating drafts, and live sets on the patio.",
    lineup: ["Acoustic sets", "Local indie bands", "Surprise guests"],
    specials: ["$2 off burgers", "$1 off drafts", "$6 house cocktails"],
    tags: ["happy-hour", "live-music"],
  },
  {
    slug: "summer-concert-series",
    title: "Summer Concert Series Presented by Rhinegeist",
    dateLabel: "Thursdays",
    timeLabel: "6 PM - 9 PM",
    locationId: "northside",
    description:
      "Weekly patio series featuring curated performers, food specials, and Rhinegeist drink features.",
    lineup: ["Rotating weekly performers", "Patio DJ set"],
    specials: ["$5 Rhinegeist pints", "Half-off select wine bottles"],
    tags: ["concert-series"],
  },
  {
    slug: "berlin-brunch",
    title: "Berlin Brunch",
    dateLabel: "Select Sundays",
    timeLabel: "11 AM - 3 PM",
    locationId: "northside",
    description:
      "A special brunch takeover featuring Hangover Burritos, Colt-Country Breakfast, and drink specials all day.",
    specials: ["$4 mimosas", "$5 bloody marys"],
    tags: ["brunch"],
  },
]

export const northsideSpaces: EventSpace[] = [
  {
    slug: "rickhouse",
    name: "The Rickhouse",
    size: "Private room with full bar",
    capacitySeated: 80,
    capacityCocktail: 150,
    description:
      "Private room with a full bar, five TVs, full A/V capability, private patio, and restrooms.",
    amenities: ["Full bar", "5 TVs", "Full A/V", "Private patio", "Private restrooms"],
    rentalFee: "$200 room rental",
    minimums: ["$1000 food + beverage (Sun-Wed)", "$1800 food + beverage (Thu-Sat)"],
    notes: ["Loyalty points not valid on private events."],
  },
  {
    slug: "craft-cellar",
    name: "The Craft Cellar",
    size: "585 sq ft",
    capacitySeated: 56,
    capacityCocktail: 60,
    description:
      "Cocktail-style space with six TVs including a projection TV and a reclaimed wood table.",
    amenities: ["6 TVs", "Projection screen", "Full A/V"],
    rentalFee: "$100 room rental",
    minimums: ["$500 food + beverage (Sun-Wed)", "$800 food + beverage (Thu-Sat)"],
  },
  {
    slug: "game-room",
    name: "The Game Room",
    size: "Semi-private",
    capacitySeated: 70,
    capacityCocktail: 80,
    description:
      "Shuffleboard table, nine TVs, and partial A/V make this a game-day favorite.",
    amenities: ["Shuffleboard", "9 TVs", "Partial A/V"],
    rentalFee: "$200 room rental",
    minimums: ["$800 food + beverage (Sun-Wed)", "$1500 food + beverage (Thu-Sat)"],
  },
  {
    slug: "parlor",
    name: "The Parlor",
    size: "443 sq ft",
    capacitySeated: 50,
    capacityCocktail: 65,
    description:
      "Semi-private room with nine TVs and full A/V. Photos coming soon.",
    amenities: ["9 TVs", "Projection screen", "Full A/V"],
    rentalFee: "$200 room rental",
    minimums: ["$600 food + beverage (Sun-Wed)", "$1200 food + beverage (Thu-Sat)"],
    notes: ["Photos coming soon."],
  },
  {
    slug: "fieldhouse",
    name: "The Fieldhouse",
    size: "432 sq ft",
    capacitySeated: 36,
    capacityCocktail: 45,
    description:
      "Retractable windows overlook Georgia Street with three TVs and full A/V.",
    amenities: ["3 TVs", "Full A/V", "Retractable windows"],
    rentalFee: "$200 room rental",
    minimums: ["$500 food + beverage (Sun-Wed)", "$1000 food + beverage (Thu-Sat)"],
  },
]

export const downtownSpaces: EventSpace[] = [
  {
    slug: "downtown-parlor",
    name: "Downtown Parlor",
    size: "Private lounge",
    capacitySeated: 50,
    capacityCocktail: 70,
    description:
      "Downtown private lounge with dedicated bar service and flexible seating.",
    amenities: ["Dedicated bar", "6 TVs", "Full A/V"],
    rentalFee: "$200 room rental",
    minimums: ["$800 food + beverage (Sun-Wed)", "$1500 food + beverage (Thu-Sat)"],
  },
  {
    slug: "downtown-fieldhouse",
    name: "Downtown Fieldhouse",
    size: "Street-view room",
    capacitySeated: 36,
    capacityCocktail: 50,
    description:
      "Natural light and views of Meridian St. with full A/V setup.",
    amenities: ["Street view", "Full A/V", "5 TVs"],
    rentalFee: "$200 room rental",
    minimums: ["$700 food + beverage (Sun-Wed)", "$1400 food + beverage (Thu-Sat)"],
  },
]

export const cateringHighlights = [
  "$150 minimum order and 24-hour advance notice required.",
  "Delivery orders include a 20% service charge; pick-up includes 10%.",
  "Full-service catering available upon request.",
  "All packages include plates, utensils, and cutlery.",
]

export const loyaltyBenefits = [
  "1 point per $1 spent",
  "5% back in rewards",
  "100 points for signing up",
  "$10 birthday bonus",
  "Double points during happy hour",
]

export const staffContacts = [
  { name: "Michael Cranfill", role: "Proprietor", email: "michael@thedistricttap.com" },
  { name: "Nikki Snodgrass", role: "Events + Catering Manager", email: "events@thedistricttap.com" },
  { name: "Moira Vekovic", role: "Marketing Manager", email: "marketing@thedistricttap.com" },
]

export const careersBenefits = [
  "Flexible schedules",
  "Employee discounts",
  "Health benefits for eligible roles",
  "Career advancement paths",
  "Culture built on hospitality and craft",
]

export const careerRoles = [
  "Server",
  "Bartender",
  "Host",
  "Food Runner",
  "Busser",
  "Bar Back",
  "Security",
  "Line Cook",
  "Dishwasher",
]

export const applicationSections = [
  {
    title: "Personal Information",
    fields: ["Name", "Address", "Email", "Phone", "Age", "Eligible to work in the U.S."],
  },
  {
    title: "Availability",
    fields: ["Positions desired", "Date available", "Weekly availability", "Split shift availability"],
  },
  {
    title: "Experience",
    fields: ["Previous employment", "Education", "Extracurricular activities", "Volunteer work"],
  },
  {
    title: "Emergency Contact",
    fields: ["Contact name", "Phone", "Relationship"],
  },
]
