import type { FaqItem } from "@/lib/seo";
import { PRIMARY_STATES_PHRASE } from "@/lib/regions";

const regionalServe = `We quote and support projects across ${PRIMARY_STATES_PHRASE} and nationwide.`;

/** Per-gallery FAQs — visible on category pages + FAQPage JSON-LD for Google/AI. */
export const GALLERY_FAQS: Record<string, FaqItem[]> = {
  benches: [
    {
      question: "What commercial outdoor benches does Parkezza offer?",
      answer:
        "Parkezza offers backed and backless commercial outdoor benches in recycled plastic, wood, powder-coated steel, thermoplastic coating, aluminum, and thermally modified ash—suited to parks, campuses, resorts, plazas, and HOA amenities.",
    },
    {
      question: "Can benches match litter receptacles and other site furnishings?",
      answer:
        "Yes. Many bench lines are designed to coordinate with litter receptacles, bollards, and other amenities in finish and material so landscape plans read as one package.",
    },
    {
      question: "What mounting options are available for park benches?",
      answer:
        "Depending on the model, options commonly include portable, surface-mount, inground, and wall-mounted installations. Note preferred mounting on your quote request.",
    },
    {
      question: "Do you supply commercial park benches in Utah and nearby states?",
      answer: `Yes. ${regionalServe}`,
    },
    {
      question: "How do I specify benches for a landscape or municipal project?",
      answer:
        "Share quantities, preferred materials or finishes, mounting type, ADA or accessibility notes if relevant, and drawings or site plans when available. We respond with model options and pricing, typically within one business day.",
    },
  ],
  "litter-receptacles": [
    {
      question: "What litter receptacles and recycling units are available?",
      answer:
        "Parkezza offers commercial litter receptacles and dual-stream or multi-stream recycling units in steel and recycled-plastic styles for parks, plazas, resorts, campuses, and municipal streetscapes.",
    },
    {
      question: "Can litter receptacles match our benches?",
      answer:
        "Yes. Many receptacles are selected specifically to pair with bench lines in style, finish, and materials for a cohesive outdoor package.",
    },
    {
      question: "Do you offer covered or swing-lid trash receptacles?",
      answer:
        "Yes. Covered and swing-lid options are available on selected models—useful for plazas and hospitality sites where weather and wildlife control matter.",
    },
    {
      question: "Can HOAs and municipalities order matching trash and recycling stations?",
      answer: `Yes. HOAs, parks departments, and campus facilities regularly specify coordinated litter and recycling packages. ${regionalServe}`,
    },
  ],
  "shade-structures": [
    {
      question: "What types of park shade structures does Parkezza offer?",
      answer:
        "Options include hip, arch, gable, octagon, and tiered roof shelters, plus wood trellis, covered walkways, and fabric sail shade systems for parks, recreation sites, dog parks, and campuses.",
    },
    {
      question: "Are shade structures suitable for parks and recreation departments?",
      answer:
        "Yes. These are commercial park shelters and shade systems specified for heavy outdoor use in municipal and recreation settings—not residential patio covers.",
    },
    {
      question: "Can shade structures be quoted with benches and picnic tables?",
      answer:
        "Yes. Many projects combine shelters with picnic tables, benches, and litter receptacles as one coordinated amenity package.",
    },
    {
      question: "Do you support shade projects in the Intermountain West?",
      answer: `Yes. ${regionalServe}`,
    },
  ],
  bollards: [
    {
      question: "What bollards does Parkezza supply?",
      answer:
        "Architectural and security bollards for campuses, streetscapes, plazas, and facility entries—including lighted, removable, and retractable options that can coordinate with surrounding site furnishings.",
    },
    {
      question: "Are bollards for traffic calming or only decoration?",
      answer:
        "Both roles are common. Specifiers use bollards for perimeter control, traffic calming, and architectural delineation. Tell us the use case so we recommend the right type.",
    },
    {
      question: "Can bollards match benches and litter receptacles?",
      answer:
        "Selected finishes and forms are chosen to pair with benches, receptacles, and other streetscape elements for a unified look.",
    },
    {
      question: "Do you ship bollards nationwide including Utah and Nevada?",
      answer: `Yes. ${regionalServe}`,
    },
  ],
  "dog-waste-stations": [
    {
      question: "What dog waste stations and dog-park amenities are available?",
      answer:
        "Featured dog waste stations and amenities appear on this Parkezza gallery. The expanded catalog—stations, liners, dispensers, and agility equipment—is on dogparkstations.com.",
    },
    {
      question: "Are dog waste stations suitable for HOA trails and municipal parks?",
      answer:
        "Yes. HOAs, municipalities, and trail managers commonly specify stations for off-leash areas and walking paths.",
    },
    {
      question: "Can dog-park amenities be packaged with benches and shade?",
      answer:
        "Yes. Many dog parks combine waste stations with benches, litter receptacles, and shade structures as one quote package through Parkezza.",
    },
    {
      question: "Do you support dog-park projects in Idaho, Montana, and nearby states?",
      answer: `Yes. ${regionalServe}`,
    },
  ],
  umbrellas: [
    {
      question: "What commercial umbrellas does Parkezza offer?",
      answer:
        "Wind-rated commercial patio umbrellas and cantilever shade for resorts, pool decks, restaurants, and hospitality outdoor dining. Featured systems are shown here; the full line is on heavydutyumbrellas.com.",
    },
    {
      question: "Are these residential patio umbrellas?",
      answer:
        "No. These are commercial, wind-rated systems intended for hospitality and high-use outdoor dining—not typical big-box residential patio umbrellas.",
    },
    {
      question: "Can umbrellas be specified with resort benches and shade structures?",
      answer:
        "Yes. Resorts and clubs often combine commercial umbrellas with seating, receptacles, and larger shade structures through Parkezza as the package hub.",
    },
    {
      question: "Do you quote commercial umbrellas for Utah resorts and nationwide?",
      answer: `Yes. ${regionalServe}`,
    },
  ],
  "pool-furniture": [
    {
      question: "What commercial pool furniture does Parkezza offer?",
      answer:
        "Chaise lounges, lounge chairs, and cafe seating for pool and amenity decks, plus a stackable mesh poolside line with arms for HOA, resort, and hospitality projects.",
    },
    {
      question: "What is the stackable mesh poolside line?",
      answer:
        "Stackable mesh chaise lounges with arms and matching mesh chairs—powder-coated aluminum frames and fade-resistant mesh fabric with no cushions and no strapping. Chaise seating height is approximately 15–16 inches. Ask about mesh colors on your quote.",
    },
    {
      question: "Can pool furniture be quoted with commercial umbrellas?",
      answer:
        "Yes. Many HOA and resort packages combine pool seating with wind-rated commercial umbrellas through Parkezza as one quote.",
    },
    {
      question: "Do you quote pool furniture for HOAs and resorts nationwide?",
      answer: `Yes. ${regionalServe}`,
    },
  ],
  "picnic-tables": [
    {
      question: "Do you offer ADA picnic tables?",
      answer:
        "Yes. Selected picnic tables are available in ADA-oriented configurations for accessible picnic areas. Note accessibility requirements on your quote so we can recommend suitable models.",
    },
    {
      question: "What picnic table materials are available?",
      answer:
        "Options commonly include expanded-metal and concrete models built for parks, recreation centers, schools, and outdoor dining.",
    },
    {
      question: "Can picnic tables be quoted with shade shelters?",
      answer:
        "Yes. Parks and recreation projects often package picnic tables under hip, arch, or gable shelters with nearby litter receptacles.",
    },
    {
      question: "Do you supply picnic tables for parks in Wyoming and Montana?",
      answer: `Yes. ${regionalServe}`,
    },
  ],
  "pergolas-gazebos": [
    {
      question: "What pergolas and trellis structures are available?",
      answer:
        "Architectural pergolas and trellis structures for resorts, golf courses, hospitality courtyards, and distinguished outdoor environments—open-lattice and covered forms that define gathering spaces.",
    },
    {
      question: "Are these residential backyard pergolas?",
      answer:
        "Parkezza focuses on commercial and hospitality-scale structures for resorts, clubs, and public or community environments—not typical residential DIY kits.",
    },
    {
      question: "Can pergolas coordinate with other site furnishings?",
      answer:
        "Yes. Specifiers often pair pergolas with benches, umbrellas, and litter receptacles for a complete courtyard or amenity package.",
    },
    {
      question: "Do you support pergola projects for golf clubs in Utah and Nevada?",
      answer: `Yes. ${regionalServe}`,
    },
  ],
  "bike-racks": [
    {
      question: "What commercial bike racks does Parkezza offer?",
      answer:
        "Loop and decorative commercial bike racks for campuses, streetscapes, transit stops, and public plazas—designed for secure bicycle parking that can coordinate with surrounding site furnishings.",
    },
    {
      question: "Can bike racks be specified with streetscape benches and bollards?",
      answer:
        "Yes. Campuses and municipalities often package bike racks with benches, bollards, and litter receptacles in one streetscape quote.",
    },
    {
      question: "Do you ship bike racks nationwide?",
      answer: `Yes. ${regionalServe}`,
    },
  ],
  flagpoles: [
    {
      question: "What commercial flagpoles are available?",
      answer:
        "Standard, Premium, and Heavy Duty flagpoles with internal or external halyards, including Vanguard options. Heights from 20 ft to 70 ft and butt diameters from 3\" to 12\", plus flags in multiple sizes.",
    },
    {
      question: "Are flagpoles suitable for civic, campus, and military sites?",
      answer:
        "Yes. Civic campuses, corporate sites, and federal or military facilities commonly specify commercial-grade poles. Share height, halyard preference, and site conditions with your quote.",
    },
    {
      question: "Do you support flagpole projects in the Intermountain West and nationwide?",
      answer: `Yes. ${regionalServe} East Coast and military facility projects are welcome as they come online.`,
    },
  ],
  "tree-guards": [
    {
      question: "What are tree guards used for?",
      answer:
        "Decorative tree guards protect trunks and root zones while completing streetscapes, campuses, and urban plantings—often specified with benches, bollards, and litter receptacles.",
    },
    {
      question: "Can tree guards match other streetscape furnishings?",
      answer:
        "Yes. Finishes are commonly coordinated with benches, bollards, and receptacles for a unified outdoor package.",
    },
    {
      question: "Do you quote tree guards for municipal and campus projects?",
      answer: `Yes. ${regionalServe}`,
    },
  ],
};

export function getGalleryFaqs(slug: string): FaqItem[] {
  return GALLERY_FAQS[slug] ?? [];
}
