import logo from "@/assets/logo.png.asset.json";
import weddingGarland from "@/assets/wedding-garland.jpg.asset.json";
import coupleBridge from "@/assets/couple-bridge.jpg.asset.json";
import coupleNature from "@/assets/couple-nature.jpg.asset.json";
import bridePortrait from "@/assets/bride-portrait.jpg.asset.json";
import streetArt from "@/assets/street-art.webp.asset.json";

export const IMG = {
  logo: logo.url,
  weddingGarland: weddingGarland.url,
  coupleBridge: coupleBridge.url,
  coupleNature: coupleNature.url,
  bridePortrait: bridePortrait.url,
  streetArt: streetArt.url,
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
  { to: "/portfolio", label: "Portfolio" },
  { to: "/services", label: "Services" },
  { to: "/reviews", label: "Reviews" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;
