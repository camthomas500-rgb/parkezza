/** Primary service emphasis for local/regional SEO — still ships nationwide. */
export const PRIMARY_STATES = [
  "Utah",
  "Nevada",
  "Idaho",
  "Wyoming",
  "Montana",
] as const;

export const PRIMARY_REGION_LABEL = "Intermountain West";

export const PRIMARY_STATES_PHRASE = "Utah, Nevada, Idaho, Wyoming, and Montana";

/** Core Northern Utah corridor — used in short prose / meta phrases. */
export const UTAH_LOCAL_CITIES = [
  "Park City",
  "Kamas City",
  "Heber City",
] as const;

export const UTAH_LOCAL_COUNTIES = ["Wasatch County", "Summit County"] as const;

/**
 * Broader Utah place names for local SEO / AI discovery (homepage small type).
 * Keep UTAH_LOCAL_PHRASE short so page copy stays readable.
 */
export const UTAH_LOCAL_CITY_SEO = [
  "Park City",
  "Kamas City",
  "Heber City",
  "Midway",
  "Oakley",
  "Coalville",
  "Salt Lake City",
  "Sandy",
  "Draper",
  "Lehi",
  "Alpine",
  "Highland",
  "American Fork",
  "Provo",
  "Orem",
  "Ogden",
  "Layton",
  "Farmington",
  "St. George",
] as const;

export const UTAH_LOCAL_PHRASE =
  "Park City, Kamas City, Heber City, and Wasatch and Summit Counties";

export const UTAH_LOCAL_COPY =
  `In Utah, Parkezza supports municipal, dog-park, resort, and amenity projects around ${UTAH_LOCAL_PHRASE}—where new resort and community developments continue to expand.`;

export const SERVICE_AREA_COPY =
  `Parkezza supports outdoor site furnishing projects across the ${PRIMARY_REGION_LABEL} (${PRIMARY_STATES_PHRASE}) and nationwide—including civic, hospitality, HOA, and federal or military facility work. ${UTAH_LOCAL_COPY}`;
