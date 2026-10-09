export type ServiceDetail = {
  slug: string;
  name: string;
  image: string;
  heading: [string, string];
  intro: string;
  comfortTitle: string;
  comfortText: string;
  comfortImage: string;
  occasionText: string;
  occasionImage: string;
  highlights: string[];
};

export const serviceDetails: ServiceDetail[] = [
  {
    slug: "local-car-rental",
    name: "Local Car Rental",
    image: "/images/about-car.jpg",
    heading: ["Everyday Travel,", "Made Simple"],
    intro:
      "Our local car rental service is designed for your daily travel needs — office commutes, shopping trips, family outings or quick errands around the city. Choose from a wide range of clean, comfortable and budget-friendly vehicles, available by the hour or by the day.",
    comfortTitle: "Comfort, Style & Convenience",
    comfortText:
      "Travel in well-maintained, regularly serviced cars with or without a driver. Transparent pricing, easy booking and on-time pickups make getting around your city completely stress-free.",
    comfortImage: "/images/services/interior.jpg",
    occasionText:
      "Whether it's a business meeting across town, a day of shopping, a family function or a hospital visit, our local rentals give you the flexibility to move around the city on your own schedule.",
    occasionImage: "/images/services/occasion.jpg",
    highlights: [
      "Hourly and full-day rental packages",
      "Clean, sanitised and well-maintained cars",
      "Transparent pricing with no hidden charges",
      "Option to rent with a professional driver",
      "Quick doorstep pickup and drop",
    ],
  },
  {
    slug: "outstation-car-rental",
    name: "Outstation Car Rental",
    image: "/images/blog/road-trip.jpg",
    heading: ["Long Journeys,", "Complete Comfort"],
    intro:
      "Planning a trip to another city or a weekend getaway? Our outstation car rental service offers comfortable and reliable vehicles for long-distance travel, with experienced drivers who know the highways well.",
    comfortTitle: "Comfort, Style & Convenience",
    comfortText:
      "Spacious seating, ample luggage room and well-serviced engines keep you relaxed through every mile. Choose one-way or round-trip options to suit your plans.",
    comfortImage: "/images/services/interior.jpg",
    occasionText:
      "From family vacations and pilgrimages to business trips and road adventures, our outstation rentals are perfect for every long-distance journey.",
    occasionImage: "/images/services/occasion.jpg",
    highlights: [
      "One-way and round-trip options",
      "Experienced highway drivers",
      "Sedans, SUVs and MUVs for every group size",
      "24/7 roadside assistance",
      "Flexible multi-day packages",
    ],
  },
  {
    slug: "airport-transfer",
    name: "Airport Transfer",
    image: "/images/services/airport.jpg",
    heading: ["On Time, Every Time,", "Airport Transfers"],
    intro:
      "Start and end your trip without stress. Our airport transfer service offers punctual pickups and drops, flight tracking and professional chauffeurs who help with your luggage.",
    comfortTitle: "Comfort, Style & Convenience",
    comfortText:
      "Relax in a clean, air-conditioned vehicle with plenty of room for your bags. We monitor your flight so your driver is waiting for you even if your plans change.",
    comfortImage: "/images/services/interior.jpg",
    occasionText:
      "Ideal for business travellers, families and tourists, our airport transfers ensure a smooth ride between the airport, your hotel, office or home — at any hour of the day.",
    occasionImage: "/images/services/occasion.jpg",
    highlights: [
      "Real-time flight tracking",
      "Meet & greet at arrivals",
      "Help with luggage loading",
      "Available 24/7, including late-night flights",
      "Fixed, upfront pricing",
    ],
  },
  {
    slug: "luxury-car-rental",
    name: "Luxury Car Rental",
    image: "/images/services/chauffeur.jpg",
    heading: ["More Than a Ride,", "A Premium Travel Experience"],
    intro:
      "Our luxury car service is designed for those who value comfort, punctuality and professionalism. Whether it's a business meeting, a special occasion, or a city tour, our experienced chauffeurs ensure a safe, smooth and stress-free journey from start to finish.",
    comfortTitle: "Comfort, Style & Convenience",
    comfortText:
      "Travel in well-maintained, luxury vehicles driven by trained and courteous chauffeurs who understand your time and preferences. Sit back, relax and enjoy a first-class travel experience without the hassle of driving or navigation.",
    comfortImage: "/images/services/interior.jpg",
    occasionText:
      "From important business meetings to airport transfers, weddings and special events, our chauffeur service suits all types of travel needs. Experience the convenience of having a dedicated driver who understands your schedule and provides a personalized, reliable service.",
    occasionImage: "/images/services/occasion.jpg",
    highlights: [
      "Professional and well-trained chauffeurs",
      "Luxury and well-maintained vehicles",
      "Punctual and reliable service",
      "Comfortable and private travel experience",
      "Suitable for business, leisure and special occasions",
    ],
  },
  {
    slug: "corporate-car-rental",
    name: "Corporate Car Rental",
    image: "/images/hero-car.jpg",
    heading: ["Professional Travel,", "For Your Business"],
    intro:
      "Keep your business moving with our corporate car rental service. We provide reliable transportation for executives, employees and clients, with dedicated account management and monthly billing.",
    comfortTitle: "Comfort, Style & Convenience",
    comfortText:
      "Impress clients and keep your team productive with premium sedans and SUVs driven by courteous, well-groomed chauffeurs who value punctuality.",
    comfortImage: "/images/services/interior.jpg",
    occasionText:
      "Perfect for client meetings, conferences, roadshows, employee transport and executive airport transfers — all managed through a single, hassle-free corporate account.",
    occasionImage: "/images/services/occasion.jpg",
    highlights: [
      "Dedicated corporate account manager",
      "Monthly billing and GST invoices",
      "Premium sedans and executive SUVs",
      "Trained, well-groomed chauffeurs",
      "Flexible daily, weekly and monthly plans",
    ],
  },
  {
    slug: "wedding-car-rental",
    name: "Wedding Car Rental",
    image: "/images/services/wedding.jpg",
    heading: ["Arrive in Style,", "On Your Special Day"],
    intro:
      "Make your wedding day truly unforgettable with our premium wedding car rentals. From elegant luxury sedans to classic cars, we offer beautifully decorated vehicles for the bride, groom and guests.",
    comfortTitle: "Elegance, Style & Convenience",
    comfortText:
      "Our cars arrive spotless and decorated to match your theme, driven by experienced chauffeurs who make sure you reach every ceremony on time and in style.",
    comfortImage: "/images/services/interior.jpg",
    occasionText:
      "Ideal for the baraat, bridal entry, reception, pre-wedding shoots and guest transport — we handle every detail so you can focus on celebrating.",
    occasionImage: "/images/services/occasion.jpg",
    highlights: [
      "Custom floral decoration on request",
      "Luxury and vintage car options",
      "Professional, well-dressed chauffeurs",
      "Guest transport packages",
      "Punctual service for every ceremony",
    ],
  },
  {
    slug: "city-tour-packages",
    name: "City Tour Packages",
    image: "/images/blog/getaways.jpg",
    heading: ["Explore the City,", "Your Way"],
    intro:
      "Discover the best of the city with our customised city tour packages. Visit popular landmarks, hidden gems and local favourites in comfort, with a friendly driver who knows the area.",
    comfortTitle: "Comfort, Style & Convenience",
    comfortText:
      "Choose half-day or full-day tours in a clean, air-conditioned car. Stop wherever you like, take your time at every location and enjoy a relaxed sightseeing experience.",
    comfortImage: "/images/services/interior.jpg",
    occasionText:
      "Great for tourists, visiting family, corporate guests and weekend explorers — every tour can be tailored to your interests and schedule.",
    occasionImage: "/images/services/occasion.jpg",
    highlights: [
      "Half-day and full-day tour options",
      "Customisable sightseeing routes",
      "Local, knowledgeable drivers",
      "Comfortable cars for families and groups",
      "Affordable all-inclusive pricing",
    ],
  },
  {
    slug: "self-drive-car-rental",
    name: "Self Drive Car Rental",
    image: "/images/why-choose.jpg",
    heading: ["The Freedom to Drive,", "On Your Terms"],
    intro:
      "Prefer to be behind the wheel? Our self-drive car rental service gives you the freedom to travel at your own pace with well-maintained cars, simple paperwork and flexible rental durations.",
    comfortTitle: "Comfort, Style & Convenience",
    comfortText:
      "Every car is inspected, cleaned and fully serviced before handover. Pick from hatchbacks, sedans and SUVs with unlimited-kilometre plans available.",
    comfortImage: "/images/services/interior.jpg",
    occasionText:
      "Perfect for road trips, weekend getaways, business travel or simply when you need a car for a few days — drive wherever life takes you.",
    occasionImage: "/images/showroom.jpg",
    highlights: [
      "Quick and simple documentation",
      "Hourly, daily, weekly and monthly plans",
      "Fully insured and serviced vehicles",
      "Unlimited-kilometre options",
      "24/7 roadside assistance",
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return serviceDetails.find((s) => s.slug === slug);
}
