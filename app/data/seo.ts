import { CONTACT_EMAIL, profile, skills } from "./profile";

export const SITE_URL = "https://festusyuma.com";
export const OG_IMAGE = `${SITE_URL}/og.png`;

const SEO_NAME = `${profile.name} (${profile.handle})`;

export function pageMeta({ title, description, path }: { title: string; description: string; path: string }) {
  const url = `${SITE_URL}${path}`;
  return [
    { title },
    { name: "description", content: description },
    { name: "author", content: profile.name },
    { tagName: "link", rel: "canonical", href: url },
    { property: "og:type", content: "profile" },
    { property: "og:site_name", content: SEO_NAME },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:url", content: url },
    { property: "og:image", content: OG_IMAGE },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { property: "og:image:alt", content: `${SEO_NAME}, ${profile.title}` },
    { property: "profile:first_name", content: "Festus" },
    { property: "profile:last_name", content: "Agboma" },
    { property: "profile:username", content: profile.handle },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: OG_IMAGE },
  ];
}

export const personJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: profile.name,
      alternateName: profile.handle,
      givenName: "Festus",
      familyName: "Agboma",
      jobTitle: profile.title,
      description: profile.summary,
      url: SITE_URL,
      image: `${SITE_URL}/avatar.jpg`,
      email: `mailto:${CONTACT_EMAIL}`,
      address: { "@type": "PostalAddress", addressLocality: "Lagos", addressCountry: "NG" },
      alumniOf: { "@type": "CollegeOrUniversity", name: "Babcock University" },
      knowsAbout: skills.flatMap((s) => s.items),
      sameAs: [profile.links.github, profile.links.linkedin],
    },
    {
      "@type": "ProfilePage",
      "@id": `${SITE_URL}/#profile`,
      url: SITE_URL,
      name: SEO_NAME,
      mainEntity: { "@id": `${SITE_URL}/#person` },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: profile.handle,
      alternateName: [profile.name, SEO_NAME],
      publisher: { "@id": `${SITE_URL}/#person` },
    },
  ],
};
