export const site = {
  name: "R3LIA Realty",
  tagline: "Thoughtful representation. Practical technology.",
  url: "https://r3liarealty.com",
  navCta: "Let's talk",

  hero: {
    eyebrow: "Real estate representation + practical technology",
    headline: "Real estate guidance. Better tools. Clearer decisions.",
    subheadline:
      "R3LIA Realty brings thoughtful representation and practical technology to the way people buy, sell, and consider a home.",
    primaryCta: { label: "Explore HAVN", href: "/havn" },
    secondaryCta: { label: "Buying or selling?", href: "/advisory" }
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
      "An agent starts with one home — an MLS number, a listing link, or an address — and HAVN gives their buyer a place to revisit it, save what matters, compare options, and ask questions. The inviting agent's name stays attached. Agents can see useful activity, but cannot read the buyer's private note text.",
    operatorStatement:
      "HAVN is a buyer decision workspace built and operated by Rate Rebate Realty, PLLC, doing business as R3LIA Realty.",
    forAgents: [
      "Start with one home. Paste the MLS #, listing link, or address; HAVN creates a buyer-ready link in seconds.",
      "Your buyer gets a quiet place to think — not another portal to scroll.",
      "See saved homes, comparisons and useful activity, with questions and tour requests shared when the buyer sends them. Agents cannot read private note text.",
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
    licenseLine: "R3LIA Realty is the registered trade name of Rate Rebate Realty, PLLC, a licensed Florida real estate brokerage (DBPR CQ1069806).",
    footerNotice:
      "Highland is listed by Castera Realty Corp and marketed by R3LIA Realty with the listing brokerage's permission. Property information is provided for marketing purposes, deemed reliable but not guaranteed, and should be independently verified. Equal Housing Opportunity.",
    stagingDisclosure:
      "Select interior images may be virtually staged or digitally edited for presentation purposes. Actual property conditions should be verified during a private showing."
  }
};

export const representationPillars = [
  {
    title: "Buying a home",
    description:
      "Clarify what matters, compare homes and market context, and prepare for offer discussions with a clearer view of the choices."
  },
  {
    title: "Selling a home",
    description:
      "Bring property presentation, pricing discussions and timing into a considered plan for reaching buyers."
  },
  {
    title: "Planning your next move",
    description:
      "Make sense of your options before committing to a move, with practical questions, relevant comparisons and next steps."
  }
];
