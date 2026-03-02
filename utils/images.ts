/**
 * Royalty-free image URLs from Unsplash (https://unsplash.com)
 * Used with Next.js Image for optimization. All images are free to use.
 */

const UNSPLASH = 'https://images.unsplash.com';

export const IMAGES = {
  hero: `${UNSPLASH}/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1920&q=80`,
  about: `${UNSPLASH}/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80`,
  services: {
    life: `${UNSPLASH}/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=600&q=80`,
    health: `${UNSPLASH}/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80`,
    motor: `${UNSPLASH}/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=600&q=80`,
    business: `${UNSPLASH}/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80`,
    investment: `${UNSPLASH}/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=600&q=80`,
  },
  testimonials: [
    `${UNSPLASH}/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80`,
    `${UNSPLASH}/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80`,
    `${UNSPLASH}/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80`,
  ],
  contact: `${UNSPLASH}/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1920&q=80`,
  footer: `${UNSPLASH}/photo-1557683316-973673baf926?auto=format&fit=crop&w=1920&q=60`,
  loans: `${UNSPLASH}/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1920&q=80`,
  companyRegistration: `${UNSPLASH}/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1920&q=80`,
  loanCards: {
    personal: `${UNSPLASH}/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80`,
    home: `${UNSPLASH}/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=600&q=80`,
    business: `${UNSPLASH}/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=600&q=80`,
    education: `${UNSPLASH}/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80`,
    car: `${UNSPLASH}/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=600&q=80`,
    gold: `${UNSPLASH}/photo-1610375461246-83df859d849d?auto=format&fit=crop&w=600&q=80`,
    'loan-against-property': `${UNSPLASH}/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=600&q=80`,
    startup: `${UNSPLASH}/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80`,
    msme: `${UNSPLASH}/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=600&q=80`,
  },
  companyCards: {
    'private-limited': `${UNSPLASH}/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80`,
    llp: `${UNSPLASH}/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=600&q=80`,
    opc: `${UNSPLASH}/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80`,
    partnership: `${UNSPLASH}/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=600&q=80`,
    gst: `${UNSPLASH}/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=600&q=80`,
    'msme-reg': `${UNSPLASH}/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=600&q=80`,
    trademark: `${UNSPLASH}/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=600&q=80`,
    'startup-india': `${UNSPLASH}/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80`,
    iso: `${UNSPLASH}/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80`,
  },
} as const;
