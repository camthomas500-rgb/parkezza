import { PRIMARY_STATES_PHRASE, UTAH_LOCAL_PHRASE } from "@/lib/regions";

export type ResourceGuide = {
  slug: string;
  title: string;
  description: string;
  /** Short card blurb on the hub */
  summary: string;
  sections: { heading: string; body: string }[];
};

/**
 * Specifier / buyer guides — educational pages that capture research-phase
 * searches and give AI engines citable answers (not a product catalog).
 */
export const RESOURCE_GUIDES: ResourceGuide[] = [
  {
    slug: "specifying-outdoor-site-furnishings",
    title: "How to Specify Outdoor Site Furnishings",
    description:
      "A practical checklist for landscape architects, contractors, HOAs, and municipalities specifying commercial outdoor site furnishings—materials, mounting, quantities, and coordinated packages.",
    summary:
      "Checklist for architects, contractors, and project managers starting a park, resort, or amenity package.",
    sections: [
      {
        heading: "Start with the site plan, not a single product",
        body: `Commercial outdoor site furnishings work best as a coordinated package: seating, litter and recycling, shade, and circulation elements that share finishes and materials. Note use zones (plaza, trail, picnic grove, pool deck), expected traffic, and maintenance staff capabilities before picking models.`,
      },
      {
        heading: "Decide materials for climate and maintenance",
        body: `Intermountain climates in ${PRIMARY_STATES_PHRASE} can be hard on outdoor products—UV, freeze-thaw, and wind matter. Recycled plastic, powder-coated steel, thermoplastic coating, aluminum, and selected woods each trade durability, look, and upkeep. Call out preferred materials early so quotes stay accurate.`,
      },
      {
        heading: "Capture mounting, accessibility, and quantities",
        body: `For benches and tables, specify portable, surface-mount, or inground preferences. Flag ADA or accessible picnic needs. List quantities by zone (not just a site total) so lead times and freight can be estimated correctly.`,
      },
      {
        heading: "What to send with a Parkezza quote request",
        body: `Include product categories, model references if known, quantities, finish preferences, drawings or site plans, and timeline. Parkezza supports projects across ${PRIMARY_STATES_PHRASE} and nationwide—including civic, hospitality, HOA, and federal or military facility work.`,
      },
    ],
  },
  {
    slug: "landscape-architect-site-furnishings",
    title: "Landscape Architect Site Furnishings: Placeholders to Procurement",
    description:
      "How landscape architects use Parkezza from spec placeholders and schematic design through aesthetic selection, quantities, and a procurement-ready outdoor site furnishing package.",
    summary:
      "For LAs: replace generic placeholders, align finishes with the design, then quote a coordinated procurement package.",
    sections: [
      {
        heading: "Start with the placeholder—not a catalog hunt",
        body: `Most site plans begin with a generic note: bench, litter receptacle, picnic table, shade, bollard. Parkezza helps landscape architects turn those placeholders into specified commercial products that match the design intent, the climate, and the maintenance reality—without forcing a residential patio look into a public or hospitality site.`,
      },
      {
        heading: "Aesthetic design: one family across the plan",
        body: `Clients notice when seating, trash, shade, and circulation elements look unrelated. We help you select Signature or Essential lines so frame colors, slat materials, and design language align across benches, litter receptacles, picnic tables, bollards, and related amenities. Send a finish palette, rendering, or mood board if you have one; we will propose options that hold the aesthetic.`,
      },
      {
        heading: "What to send at schematic, DD, and CD",
        body: `Schematic: categories and zones (plaza, trail, picnic grove, pool deck). Design development: preferred materials, mounting (portable, surface-mount, inground), ADA notes, and rough quantities. Construction documents: model references when known, finish callouts, quantities by zone, and site plans or drawings. Incomplete packages are welcome—we help fill gaps so specs stay bid-ready.`,
      },
      {
        heading: "Procurement package, not a product dump",
        body: `Parkezza quotes coordinated packages with options, quantities, and lead-time context so landscape architects, contractors, and owners can move from specification to purchase. Include drawings in Project Details on the quote form. We typically respond within one business day. Utah meetings are available when in-person review helps; quotes are nationwide.`,
      },
      {
        heading: "Typical searches landscape architects make",
        body: `Landscape architects find Parkezza when looking for commercial outdoor site furnishings, park amenities for developments, matching benches and litter receptacles, ADA picnic tables, dog waste stations for trails, and specifier support for site furniture packages—not residential patio furniture.`,
      },
    ],
  },
  {
    slug: "dog-waste-stations-for-trails-and-paths",
    title: "Dog Waste Stations for Trails and Walking Paths",
    description:
      "How landscape architects, contractors, and HOAs specify dog waste stations along community walking paths, trail corridors, and amenity loops—not only inside fenced dog parks—plus how to package stations with benches and litter receptacles.",
    summary:
      "Trail and pathway pet-waste stations for HOAs, developments, and parks—plus packaging with seating and litter.",
    sections: [
      {
        heading: "Walking paths need stations too—not only dog parks",
        body: `Pet owners use community walking paths, resort trails, and HOA amenity loops every day. Without dog waste stations and bag dispensers at natural intervals, paths and turf become the cleanup zone. Specifying stations along circulation—not only inside a fenced off-leash area—keeps developments cleaner and shows residents the amenity package was planned for real use.`,
      },
      {
        heading: "Where to place stations on the site plan",
        body: `Place stations at trailheads, path intersections, near parking or mail kiosks, and at regular intervals along longer loops. Pair a station with a bench or litter receptacle where people naturally pause. For master-planned communities around ${UTAH_LOCAL_PHRASE}, path networks between parks, open space, and resort edges are prime locations.`,
      },
      {
        heading: "Package with benches, litter, and dog-park amenities",
        body: `A complete pet-friendly amenity package often includes dog waste stations, matching or nearby park benches, litter receptacles, and—where the program calls for it—agility obstacles or a dedicated dog park. Parkezza quotes multi-category packages so finishes and materials can align across the site. Browse featured stations on the dog waste gallery; the expanded catalog of stations, liners, dispensers, and agility equipment is on dogparkstations.com.`,
      },
      {
        heading: "Local proof in Summit County and the Utah resort corridor",
        body: `Parkezza has supplied dog-park benches and obstacles for Summit County, Utah projects, alongside municipal benches and litter receptacles. Landscape contractors and architects working Wasatch and Summit County developments can use the Installed Projects page for field examples, then request a quote for path stations and coordinated seating.`,
      },
      {
        heading: "What to include on a quote request",
        body: `Note path length or number of stations, preferred style (with can, mesh can, no can, trail-proven recycled wood look, etc.), mounting preferences, whether bags/liners are needed, and any companion products (benches, litter, shade, agility). Mention the city or development when the project is in ${UTAH_LOCAL_PHRASE} or elsewhere in ${PRIMARY_STATES_PHRASE}. Nationwide trail and HOA projects are welcome on the same form.`,
      },
    ],
  },
  {
    slug: "matching-benches-and-litter-receptacles",
    title: "Matching Benches and Litter Receptacles",
    description:
      "Why landscape plans look more finished when commercial park benches and litter receptacles share materials and finishes—and how to specify a coordinated package.",
    summary:
      "How to specify benches and trash/recycling units that look like one family on the site plan.",
    sections: [
      {
        heading: "Why matching matters",
        body: `Buyers and the public notice when seating is one style and trash units are another. Coordinated benches and litter receptacles—steel with steel, recycled-plastic “wood” with matching seating—make parks, resorts, campuses, and HOA amenities feel intentional.`,
      },
      {
        heading: "What to align",
        body: `Align frame color, slat material, and overall design language. Dual-stream recycling can still match the litter family while meeting municipal diversion goals. Bollards and bike racks can follow the same finish language for streetscapes.`,
      },
      {
        heading: "Typical project types",
        body: `Municipal parks, school campuses, resort pathways, golf clubhouses, and HOA amenity centers in ${PRIMARY_STATES_PHRASE} and across the U.S. regularly specify matching seating and receptacles in one package.`,
      },
      {
        heading: "How to request a matched package",
        body: `Browse Parkezza benches and litter receptacles, note preferred models or materials, and request a quote for both categories together. Mention if you also need shade, picnic tables, or dog-waste stations on the same site.`,
      },
    ],
  },
  {
    slug: "ada-picnic-tables-for-parks",
    title: "ADA Picnic Tables for Parks and Recreation",
    description:
      "Guidance for specifying ADA-oriented commercial picnic tables for parks, schools, and community sites—plus how to include accessibility notes on a quote.",
    summary:
      "What to note when your picnic area needs accessible table configurations.",
    sections: [
      {
        heading: "Accessible picnic areas are a common bid requirement",
        body: `Parks and recreation departments, schools, and community centers often need picnic tables in ADA-oriented configurations so accessible routes connect to usable tables—not only standard tables nearby.`,
      },
      {
        heading: "What to tell your supplier",
        body: `On the quote request, note required accessible clearances, preferred materials (expanded metal, concrete, etc.), quantities of accessible vs standard tables, and whether tables sit under a shade shelter. Site photos or plans help.`,
      },
      {
        heading: "Package with shade and litter",
        body: `Accessible picnic zones usually need nearby litter receptacles and often a shade structure. Specifying tables, shelter, and receptacles together avoids mismatched finishes and incomplete amenity islands.`,
      },
      {
        heading: "Regional and nationwide support",
        body: `Parkezza quotes ADA-oriented picnic table packages for projects in ${PRIMARY_STATES_PHRASE} and nationwide. Ask for suitable models when you submit quantities and accessibility requirements.`,
      },
    ],
  },
  {
    slug: "intermountain-west-and-nationwide-projects",
    title: "Utah Resort Corridor, Intermountain West, and Nationwide",
    description:
      `Parkezza supports commercial outdoor site furnishings around ${UTAH_LOCAL_PHRASE}, across ${PRIMARY_STATES_PHRASE}, and nationwide—including resorts, HOAs, municipalities, and federal or military facilities.`,
    summary:
      "Park City, Kamas City, Heber City, Wasatch & Summit Counties, plus Intermountain and nationwide projects.",
    sections: [
      {
        heading:
          "Northern Utah: Park City, Kamas City, Heber City, and nearby counties",
        body: `Parkezza’s local footing is in Utah’s resort and mountain-community corridor—${UTAH_LOCAL_PHRASE}. We have supplied municipal benches and litter receptacles and dog-park benches and obstacles for Summit County projects. HOA amenities and new resort developments in this area regularly need coordinated outdoor packages.`,
      },
      {
        heading: "Intermountain West",
        body: `Beyond northern Utah, we emphasize the Intermountain West—${PRIMARY_STATES_PHRASE}—where landscape contractors, resorts, golf clubs, HOAs, and municipalities specify commercial outdoor furnishings for harsh sun, elevation, and seasonal weather.`,
      },
      {
        heading: "Nationwide delivery and quotes",
        body: `Projects outside the Intermountain region are welcome. We provide specification support, quantities, and freight-aware quoting for parks, campuses, hospitality, and civic sites across the United States.`,
      },
      {
        heading: "Federal and military facilities",
        body: `As East Coast and other military or federal facility work comes online, the same quote process applies: categories, quantities, finishes, site constraints, and timeline. Flagpole, bollard, seating, and litter packages are common on secure campuses.`,
      },
      {
        heading: "See installed work",
        body: `Visit the Installed Projects page for Utah and regional installation photos as they are published, and use the Resources guides when building a specification package.`,
      },
    ],
  },
];

export function getResourceGuides(): ResourceGuide[] {
  return RESOURCE_GUIDES;
}

export function getResourceGuide(slug: string): ResourceGuide | undefined {
  return RESOURCE_GUIDES.find((g) => g.slug === slug);
}

export function getResourceSlugs(): string[] {
  return RESOURCE_GUIDES.map((g) => g.slug);
}
