export const site = {
  name: "R3LIA Realty",
  tagline: "Luxury real estate, intelligently represented.",
  url: "https://r3liarealty.com",
  navCta: "Private Consultation",

  hero: {
    eyebrow: "Private Real Estate Advisory",
    headline: "Luxury real estate, intelligently represented.",
    subheadline:
      "Elevated marketing, strategic communication, and data-informed advisory for premium residential properties.",
    primaryCta: { label: "View Current Offering", href: "/properties/highland" },
    secondaryCta: { label: "Request Private Consultation", href: "/contact" }
  },

  contact: {
    brokerName: "K. JP Castera",
    brokerTitle: "Broker",
    email: "jp@r3liarealty.com",
    phone: "(754) 272-5890",
    phoneHref: "tel:+17542725890",
    address: "2719 Hollywood Boulevard #H-47, Hollywood, FL 33020, USA"
  },

  // HAVN — the buyer decision workspace R3LIA builds and operates (havnway.com).
  // Agents who receive a HAVN invitation from R3LIA land here when they ask
  // "who is R3LIA?"; this block is the answer, in the site's own voice.
  havn: {
    name: "HAVN",
    url: "https://havnway.com",
    eyebrow: "Built by R3LIA",
    headline: "HAVN. One place for a buyer to decide.",
    summary:
      "HAVN is a buyer decision workspace built and operated by R3LIA Realty. An agent pastes one home — an MLS number, a listing link, or an address — and HAVN creates a calm, private space where their buyer can revisit it, save what matters, compare it with other options, and ask questions about the property. The agent's name stays attached, and the agent sees useful activity without ever reading the buyer's private notes.",
    forAgents: [
      "Start with one home. Paste the MLS #, listing link, or address; HAVN creates a buyer-ready link in seconds.",
      "Your buyer gets a quiet place to think — not another portal to scroll.",
      "You see saved homes, comparisons, questions and tour requests as they happen. Private notes stay private.",
      "Your first three buyer HAVNs are free."
    ],
    invitation:
      "HAVN is offered to buyer agents by invitation. If you received an email from R3LIA Realty, the button in it is your personalized way in. Otherwise, write to us and we will send one.",
    cta: { label: "Visit HAVN", href: "https://havnway.com" }
  },

  legal: {
    listingBrokerage: "Castera Realty Corp",
    /** The licensed name behind the R3LIA Realty trade name (Florida DBPR). */
    licensedName: "Rate Rebate Realty, PLLC d/b/a R3LIA Realty",
    licenseLine: "R3LIA Realty is the registered trade name of Rate Rebate Realty, PLLC, a Florida licensed real estate brokerage (DBPR CQ1069806).",
    footerNotice:
      "Highland is listed by Castera Realty Corp and marketed by R3LIA Realty with the listing brokerage's permission. Property information is provided for marketing purposes, deemed reliable but not guaranteed, and should be independently verified. Equal Housing Opportunity.",
    stagingDisclosure:
      "Select interior images may be virtually staged or digitally edited for presentation purposes. Actual property conditions should be verified during a private showing."
  }
};

export const representationPillars = [
  {
    title: "Positioning",
    description:
      "Every residence is framed through narrative, design, and market context so its value is understood before it is discussed."
  },
  {
    title: "Intelligence",
    description:
      "Decision guidance combines local expertise with structured intelligence models, shaped to support timing and negotiation."
  },
  {
    title: "Discretion",
    description:
      "Private communication, controlled visibility, and selective buyer qualification define how opportunities are represented."
  }
];
