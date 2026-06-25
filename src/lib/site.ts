// Azure Blob CDN base
const AZ = "https://teambee.blob.core.windows.net";

// Logo served from public/ so it works on Lovable, dev, and GitHub Pages subpaths
export const IMG = {
  logo: `${import.meta.env.BASE_URL}images/logo.png`,
  logoWhite: `${import.meta.env.BASE_URL}images/logo-white.png`,
};

export const WEDDING = [
  `${AZ}/wedding/AJI00101.jpg`,
  `${AZ}/wedding/AJI01043.jpg`,
  `${AZ}/wedding/ARU04100.jpg`,
  `${AZ}/wedding/ARU06076.JPG`,
  `${AZ}/wedding/ARU08627.jpg`,
  `${AZ}/wedding/ARU08654%20CC.jpg`,
  `${AZ}/wedding/DSC08772.jpg`,
  `${AZ}/wedding/DSC08821.jpg`,
  `${AZ}/wedding/DSC08890.jpg`,
  `${AZ}/wedding/DSC_7964%20CC.jpg`,
];

export const PRE_WEDDING = [
  `${AZ}/pre-wedding/dsc08531.jpg`,
  `${AZ}/pre-wedding/dsc08407.jpg`,
  `${AZ}/pre-wedding/dsc08216.jpg`,
  `${AZ}/pre-wedding/cam01704.jpg`,
  `${AZ}/pre-wedding/aru02267.jpg`,
  `${AZ}/pre-wedding/aru02130_.jpg`,
  `${AZ}/pre-wedding/aru02073.jpg`,
  `${AZ}/pre-wedding/aru01944.jpg`,
];

export const DESTINATION = [
  `${AZ}/destination-wedding/ARU00954%20CC.jpg`,
  `${AZ}/destination-wedding/ARU01217%20CC.jpg`,
];

export const MATERNITY = [
  `${AZ}/maternity-baby-shower/DSC07816.jpg`,
  `${AZ}/maternity-baby-shower/DSC07983.jpg`,
  `${AZ}/maternity-baby-shower/DSC08317.jpg`,
];

export const FILMS = [
  { title: "BVM Wedding Highlight", src: `${AZ}/flims/BVM%20highlight.mp4`, poster: WEDDING[0], category: "Wedding" },
  { title: "Wedding Highlight", src: `${AZ}/flims/Wedding%20highlight%20new.mp4`, poster: WEDDING[2], category: "Wedding" },
  { title: "Tanvee Ear Piercing Ceremony", src: `${AZ}/flims/Tanvee%20Ear%20piercing%20ceremony.mp4`, poster: MATERNITY[0], category: "Ceremony" },
  { title: "Sirpa Engagement", src: `${AZ}/flims/SIRPA%20Engagement%20-%20Teambee%20HD.mp4`, poster: WEDDING[4], category: "Engagement" },
  { title: "Raunak Highlights", src: `${AZ}/flims/Raunak%20Highlights_New%20Version.mp4`, poster: WEDDING[6], category: "Wedding" },
  { title: "Pre-Wedding Highlight", src: `${AZ}/flims/Pre-wedding%20highlight%20new.mp4`, poster: PRE_WEDDING[0], category: "Pre Wedding" },
  { title: "Mansi & Kuashal Wedding", src: `${AZ}/flims/Mansi%20&%20Kuashal%20Wedding%20Highlight.mp4`, poster: WEDDING[8], category: "Wedding" },
  { title: "Karthik & Priyanka Wedding Film", src: `${AZ}/flims/Karthik%20&%20Priyanka%20Wedding%20film.mp4`, poster: WEDDING[7], category: "Wedding" },
  { title: "Fraiza Reception Teaser", src: `${AZ}/flims/Fraiza%20Reception%20Teaser.mp4`, poster: WEDDING[1], category: "Reception" },
];

export const TESTIMONIALS = [
  { name: "Advocate Karthic", src: `${AZ}/testimonial/Advocate%20Karthic%20testimonial.mp4`, poster: WEDDING[5] },
  { name: "Gopala Krishnan", src: `${AZ}/testimonial/Gopala%20Krishnan%20Testimonial%20wa.mp4`, poster: WEDDING[3] },
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
    "https://www.google.com/maps?q=R.S.+Puram,+Coimbatore,+Tamil+Nadu&output=embed",
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
