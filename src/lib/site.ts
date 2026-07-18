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
  { id: "EPhh_ZbQdg8", title: "Cinematic Wedding Highlight", category: "Wedding" },
  { id: "wROmiQJD2Dk", title: "Wedding Story Film", category: "Wedding" },
  { id: "eh0YahMyN6s", title: "Pre-Wedding Story", category: "Pre Wedding" },
  { id: "2n0wePDRof4", title: "Engagement Highlight", category: "Engagement" },
  { id: "_lpzfJDXmoA", title: "Destination Wedding Film", category: "Destination" },
  { id: "0fPvrrNCXkQ", title: "Reception Teaser", category: "Reception" },
  { id: "b2I5-o0Ug9M", title: "Wedding Highlight", category: "Wedding" },
  { id: "DjOYV3p-ojo", title: "Cinematic Wedding Film", category: "Wedding" },
  { id: "XpWzmZR_nak", title: "Pre-Wedding Cinematic", category: "Pre Wedding" },
  { id: "5VA-Cm1m9yM", title: "Wedding Highlight Film", category: "Wedding" },
  { id: "WUodVJ-svuU", title: "Ceremony Highlights", category: "Ceremony" },
  { id: "jtJHM-Q_7hQ", title: "Wedding Story", category: "Wedding" },
  { id: "2hitAPEUbTE", title: "Engagement Story", category: "Engagement" },
  { id: "dWpwaDgK3DU", title: "Destination Wedding Story", category: "Destination" },
  { id: "kpXFnQ4gX6k", title: "Reception Film", category: "Reception" },
  { id: "gwOW4lT57uE", title: "Wedding Highlight", category: "Wedding" },
  { id: "4K04LhA2LCg", title: "Pre-Wedding Highlight", category: "Pre Wedding" },
  { id: "VKsa27Mazv8", title: "Cinematic Wedding Story", category: "Wedding" },
  { id: "f79sF_RhRXE", title: "Wedding Teaser", category: "Wedding" },
  { id: "hFs9SYYSew0", title: "Ceremony Film", category: "Ceremony" },
  { id: "8lDVtvboebA", title: "Wedding Film", category: "Wedding" },
  { id: "EsFpa475oHA", title: "Engagement Cinematic", category: "Engagement" },
  { id: "0rlXMtL_yH8", title: "Reception Highlight", category: "Reception" },
  { id: "Zdwd6WjSy6Y", title: "Destination Story", category: "Destination" },
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
