// Image paths resolve against Vite's BASE_URL so they work under /teambeestudio/.
const B = import.meta.env.BASE_URL;
const img = (name: string) => `${B}images/${name}`.replace(/\/+/g, "/");

export const IMG = {
  logo: img("logo.png"),
  weddingGarland: img("wedding-garland.jpg"),
  coupleBridge: img("couple-bridge.jpg"),
  coupleNature: img("couple-nature.jpg"),
  bridePortrait: img("bride-portrait.jpg"),
  streetArt: img("street-art.webp"),
};

export const SITE = {
  name: "Team Bee Creative Studios",
  tagline: "நினைவுகள் என்றும் நிஜமாய்.",
  taglineEn: "Memories, forever real.",
  established: 2017,
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
};

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/photography", label: "Photography" },
  { to: "/films", label: "Films" },
  { to: "/services", label: "Services" },
  { to: "/reviews", label: "Reviews" },
  { to: "/contact", label: "Contact" },
] as const;
