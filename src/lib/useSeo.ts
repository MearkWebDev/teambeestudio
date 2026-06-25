import { useEffect } from "react";

type Seo = {
  title?: string;
  description?: string;
  image?: string;
  canonical?: string;
  jsonLd?: object | object[];
};

const SITE_URL = "https://teambeestudio.lovable.app";

function setMeta(selector: string, attr: string, value: string) {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement("meta");
    const [name, val] = attr.split("=");
    el.setAttribute(name, val.replace(/"/g, ""));
    document.head.appendChild(el);
  }
  el.setAttribute("content", value);
}

export function useSeo({ title, description, image, canonical, jsonLd }: Seo) {
  useEffect(() => {
    if (title) document.title = title;
    if (description) {
      setMeta('meta[name="description"]', 'name="description"', description);
      setMeta('meta[property="og:description"]', 'property="og:description"', description);
      setMeta('meta[name="twitter:description"]', 'name="twitter:description"', description);
    }
    if (title) {
      setMeta('meta[property="og:title"]', 'property="og:title"', title);
      setMeta('meta[name="twitter:title"]', 'name="twitter:title"', title);
    }
    if (image) {
      setMeta('meta[property="og:image"]', 'property="og:image"', image);
      setMeta('meta[name="twitter:image"]', 'name="twitter:image"', image);
      setMeta('meta[name="twitter:card"]', 'name="twitter:card"', "summary_large_image");
    }
    const url = canonical ? `${SITE_URL}${canonical}` : `${SITE_URL}${window.location.pathname}`;
    let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", url);
    setMeta('meta[property="og:url"]', 'property="og:url"', url);

    // JSON-LD
    const existing = document.head.querySelectorAll('script[data-seo-jsonld]');
    existing.forEach((s) => s.remove());
    if (jsonLd) {
      const arr = Array.isArray(jsonLd) ? jsonLd : [jsonLd];
      arr.forEach((obj) => {
        const s = document.createElement("script");
        s.setAttribute("type", "application/ld+json");
        s.setAttribute("data-seo-jsonld", "1");
        s.text = JSON.stringify(obj);
        document.head.appendChild(s);
      });
    }
  }, [title, description, image, canonical, JSON.stringify(jsonLd)]);
}
