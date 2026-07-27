// Azure Blob CDN base
const AZ = "https://teambee.blob.core.windows.net";

// Logo served from public/ so it works on Lovable, dev, and GitHub Pages subpaths
export const IMG = {
  logo: `${import.meta.env.BASE_URL}images/logo.png`,
  logoWhite: `${import.meta.env.BASE_URL}images/logo-white.png`,
};

export const WEDDING = [
  `${AZ}/wedding/AJI00101.webp`,
  `${AZ}/wedding/AJI01043.webp`,
  `${AZ}/wedding/ARU04100.webp`,
  `${AZ}/wedding/ARU06076.webp`,
  `${AZ}/wedding/ARU08627.webp`,
  `${AZ}/wedding/ARU08654%20CC.webp`,
  `${AZ}/wedding/DSC08772.webp`,
  `${AZ}/wedding/DSC08821.webp`,
  `${AZ}/wedding/DSC08890.webp`,
  `${AZ}/wedding/DSC_7964%20CC.webp`,
];

export const PRE_WEDDING = [
  `${AZ}/pre-wedding/DSC08531.webp`,
  `${AZ}/pre-wedding/DSC08407.webp`,
  `${AZ}/pre-wedding/DSC08216.webp`,
  `${AZ}/pre-wedding/CAM01704.webp`,
  `${AZ}/pre-wedding/ARU02267.webp`,
  `${AZ}/pre-wedding/ARU02130_.webp`,
  `${AZ}/pre-wedding/ARU02073.webp`,
  `${AZ}/pre-wedding/aru01944.jpg`,
];

export const DESTINATION = [
  `${AZ}/destination-wedding/ARU00954%20CC.webp`,
  `${AZ}/destination-wedding/ARU01217%20CC.webp`,
];

export const MATERNITY = [
  `${AZ}/maternity-baby-shower/DSC07816.webp`,
  `${AZ}/maternity-baby-shower/DSC07983.webp`,
  `${AZ}/maternity-baby-shower/DSC08317.webp`,
];

// YouTube helpers
export const ytThumb = (id: string) => `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`;
export const ytThumbFallback = (id: string) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
export const ytEmbed = (id: string) =>
  `https://www.youtube.com/embed/${id}?autoplay=1&rel=0`;
export const ytOembed = (id: string) =>
  `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${id}&format=json`;
export const ytWatch = (id: string) => `https://youtu.be/${id}`;

export type Film = { id: string; title: string; category: string };

// Curated from official Team Bee YouTube channel
export const FILMS: Film[] = [
  { id: "EPhh_ZbQdg8", title: "Love In Bloom — He Arrived, She Smiled & Forever Began", category: "Wedding" },
  { id: "VKsa27Mazv8", title: "Hues of Romance — Wedding Highlights of Anwar & Sumaiya", category: "Wedding" },
  { id: "Zdwd6WjSy6Y", title: "A Romantic Tales — Grand Wedding Highlights of Rithik & Abi", category: "Wedding" },
  { id: "kDksNGgorAo", title: "Just Two Hearts, Beating in Perfect Sync — Wedding Highlights of Ashwin & Swati", category: "Wedding" },
  { id: "cWPzlbDNDhY", title: "Never Ending Love — Grand Wedding Film of Karthik & Priyanka", category: "Wedding" },
  { id: "xJzxeZ41mIY", title: "A White Heaven Fresco — Muslim Wedding Highlights of Safir Ali & Irfana Praveen", category: "Wedding" },
  { id: "sFkHNU8Vlj0", title: "Nazad & Shamla — Coimbatore Wedding Highlights", category: "Wedding" },
  { id: "8WGI3dQQms4", title: "A Glorious Tale — Wedding Teaser of Ameen & Fraiza", category: "Wedding" },
  { id: "bbKO6vqO1aU", title: "A Paradisal Zing — Wedding Teaser of Aneesh & Arifa", category: "Wedding" },
  { id: "WUodVJ-svuU", title: "Romantic Drizzle — Pre-Wedding Teaser of Yogesh & Raksha", category: "Pre Wedding" },
  { id: "qaFB2MzYtp4", title: "Ameen & Fraiza — Engagement Highlights", category: "Engagement" },
  { id: "2n0wePDRof4", title: "A Timeless Promise — Yogesh & Raksha's Reception Highlight", category: "Reception" },
  { id: "nU-EheyLga8", title: "The Wedding Vibe — Grand Reception Highlights of Raunak & Surabhi", category: "Reception" },
  { id: "b2I5-o0Ug9M", title: "A Yellow Trinket — Haldi Highlight of Yogesh & Raksha", category: "Ceremony" },
  { id: "rD4it41pi6Q", title: "Taj Destination Wedding — Akhil & Hitu", category: "Destination" },
  { id: "Fy6yLWKzKsA", title: "A Twine of True Love — Bangalore Destination Wedding of Sonal & Kaushal", category: "Destination" },
];

export const PHOTO_CATEGORIES = [
  { key: "wedding", label: "Wedding", images: WEDDING, blurb: "Sacred rituals, intimate glances, the joy of two families becoming one." },
  { key: "pre-wedding", label: "Pre Wedding", images: PRE_WEDDING, blurb: "Romantic, story-driven shoots designed around you as a couple." },
  { key: "destination", label: "Destination", images: DESTINATION, blurb: "Weddings beyond borders — coastlines, palaces, hill stations." },
  { key: "maternity", label: "Maternity", images: MATERNITY, blurb: "Soft light, tender moments — celebrating the journey to parenthood." },
] as const;

export const SITE = {
  name: "Team Bee Creative Studios",
  tagline: "நினைவுகள் என்றும் நிஜமாய்",
  taglineEn: "Ninaivugal Endrum Nijamai — Memories, forever real.",
  established: 2009,
  phone: "+91 98948 01912",
  phoneTel: "+919894801912",
  whatsapp: "919894801912",
  email: "teambeecreative@gmail.com",
  address: {
    line1: "No. 7/1, East Sambandham Road",
    line2: "R.S. Puram, Coimbatore",
    region: "Tamil Nadu — 641002",
  },
  socials: {
    instagram: "https://www.instagram.com/teambee_creative_studio/",
    facebook: "https://www.facebook.com/TeamBeeCreativeWeddin/",
    youtube: "https://youtube.com/@teambee",
  },
  mapEmbed:
    "https://www.google.com/maps?q=Team+Bee+Creative+Studios,+East+Sambandham+Road,+R.S.+Puram,+Coimbatore&output=embed",
  mapLink: "https://maps.app.goo.gl/jL6HRTSzAmrUyQTc7",
  mapDirections: "https://www.google.com/maps/dir/?api=1&destination=Team+Bee+Creative+Studios+RS+Puram+Coimbatore",
};

export const NAV: { to: string; label: string; submenu?: { to: string; label: string }[] }[] = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  {
    to: "/photography",
    label: "Photography",
    submenu: [
      { to: "/photography?cat=wedding", label: "Wedding" },
      { to: "/photography?cat=pre-wedding", label: "Pre Wedding" },
      { to: "/photography?cat=destination", label: "Destination" },
      { to: "/photography?cat=maternity", label: "Maternity" },
    ],
  },
  { to: "/films", label: "Films" },
  { to: "/services", label: "Services" },
  { to: "/reviews", label: "Reviews" },
  { to: "/contact", label: "Contact" },
];
