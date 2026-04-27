type GalleryImage = {
  src: string;
  alt: string;
  objectPosition?: string;
};

type GallerySection = {
  key: string;
  title: string;
  images: GalleryImage[];
  note?: string;
};

export const highland = {
  id: "Private Offering 001",
  slug: "highland",
  name: "Highland",
  price: "$1,500,000",

  heroImage: "/images/highland/hero-oceanfront.jpg",
  heroImageAlt: "Oceanfront view from Highland residence",

  currentOfferingImage: "/images/highland/current-offering-living.jpg",
  currentOfferingImageAlt: "Highland living area with ocean views",

  heroSubtitle: "An oceanfront residence offered at $1,500,000.",
  heroDescription:
    "Set along the sand with sweeping water views, Highland pairs a private residential rhythm with direct access to the coast, pool, grounds, and everyday resort-style amenities.",

  snapshot: {
    residence: "Details forthcoming",
    property: "Full specifications to be released",
    showings: "Showings by appointment"
  },

  narrative:
    "Highland is defined by light, openness, and the view. Wide ocean-facing windows frame the main living and dining areas, while a private suite, balcony moments, and clean-lined interiors create a residence designed around coastal ease.",

  gallery: [
    {
      key: "coastal-setting",
      title: "Coastal Setting",
      note: "Set directly along the sand, Highland's position places the coast at the center of everyday life.",
      images: [
        {
          src: "/images/highland/setting-aerial.jpg",
          alt: "Aerial view of Highland's oceanfront coastal setting",
          objectPosition: "center 40%"
        },
        {
          src: "/images/highland/beach-approach.jpg",
          alt: "Beach approach and shoreline access at Highland",
          objectPosition: "center 60%"
        }
      ]
    },
    {
      key: "living-dining",
      title: "Living & Dining",
      note: "Wide ocean-facing windows frame the main living and dining areas, creating an interior defined by light and view.",
      images: [
        {
          src: "/images/highland/living-dining-staged.jpg",
          alt: "Open living and dining area with ocean views at Highland",
          objectPosition: "center"
        }
      ]
    },
    {
      key: "kitchen",
      title: "Kitchen",
      note: "Clean-lined and thoughtfully proportioned, the kitchen supports both daily ease and elevated hosting.",
      images: [
        {
          src: "/images/highland/kitchen-clean.jpg",
          alt: "Clean-lined kitchen interior at Highland",
          objectPosition: "center"
        }
      ]
    },
    {
      key: "primary-suite",
      title: "Primary Suite",
      note: "The primary suite is oriented around retreat, light, and a direct relationship to the water.",
      images: [
        {
          src: "/images/highland/primary-ocean-staged.jpg",
          alt: "Primary bedroom suite with ocean views",
          objectPosition: "center"
        },
        {
          src: "/images/highland/primary-suite-staged.jpg",
          alt: "Primary suite seating and living area",
          objectPosition: "center"
        },
        {
          src: "/images/highland/primary-bath.jpg",
          alt: "Primary bathroom with refined finishes",
          objectPosition: "center"
        }
      ]
    },
    {
      key: "views-balcony",
      title: "Views & Balcony",
      note: "Private balcony moments extend the living environment outward, with open water on the horizon.",
      images: [
        {
          src: "/images/highland/balcony-ocean.jpg",
          alt: "Private balcony with sweeping ocean views at Highland",
          objectPosition: "center"
        }
      ]
    },
    {
      key: "grounds-beach",
      title: "Grounds & Beach Access",
      note: "Manicured grounds and direct beach access reinforce the coastal position that defines Highland's long-term appeal.",
      images: [
        {
          src: "/images/highland/grounds-lawn.jpg",
          alt: "Highland grounds with lawn and coastal setting",
          objectPosition: "center 70%"
        },
        {
          src: "/images/highland/beach-access.jpg",
          alt: "Private beach access at Highland",
          objectPosition: "center"
        }
      ]
    },
    {
      key: "amenities",
      title: "Amenities",
      note: "Pool, grounds, beach access, club space, and fitness amenities extend the residence beyond the unit itself.",
      images: [
        {
          src: "/images/highland/pool.jpg",
          alt: "Resort-style pool at Highland",
          objectPosition: "center"
        },
        {
          src: "/images/highland/clubroom.jpg",
          alt: "Club room and social amenity space at Highland",
          objectPosition: "center"
        },
        {
          src: "/images/highland/fitness.jpg",
          alt: "Fitness center amenity at Highland",
          objectPosition: "center"
        },
        {
          src: "/images/highland/tiki-amenity.jpg",
          alt: "Outdoor tiki and coastal amenity area at Highland",
          objectPosition: "center"
        }
      ]
    }
  ] satisfies GallerySection[],

  rareQualities: [
    {
      title: "Oceanfront Position",
      description:
        "Direct beach context and wide water views anchor the residence's long-term appeal."
    },
    {
      title: "Everyday Scale",
      description:
        "Open living and dining areas support both quiet daily use and elevated entertaining."
    },
    {
      title: "Private Suite",
      description:
        "The primary suite is oriented around retreat, light, and a direct relationship to the water."
    },
    {
      title: "Amenity Access",
      description:
        "Pool, grounds, beach access, club space, and fitness amenities extend the residence beyond the unit itself."
    }
  ],

  buyerAdvisoryNote:
    "Serious interest in Highland is met with a structured decision brief — covering oceanfront pricing context, comparable positioning, and long-term ownership scenarios specific to this offering. HAVN intelligence informs this process quietly behind the scenes.",

  stagingDisclosure:
    "Select interior images may be virtually staged or digitally edited for presentation purposes. Actual property conditions should be verified during a private showing."
};
