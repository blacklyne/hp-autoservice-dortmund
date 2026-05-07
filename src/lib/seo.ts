import { site, services } from "~/data/site";

export function autoRepairSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "@id": `${site.url}#business`,
    name: site.name,
    image: `${site.url}/og-default.jpg`,
    url: site.url,
    telephone: site.phone.international,
    email: site.email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      postalCode: site.address.zip,
      addressRegion: site.address.region,
      addressCountry: site.address.countryCode,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.lat,
      longitude: site.geo.lng,
    },
    openingHoursSpecification: site.hours
      .filter((h) => h.open && h.close)
      .map((h) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: dayMap[h.day as keyof typeof dayMap],
        opens: h.open,
        closes: h.close,
      })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: site.rating.value,
      reviewCount: site.rating.count,
      bestRating: 5,
      worstRating: 1,
    },
    areaServed: [
      { "@type": "City", name: "Dortmund" },
      { "@type": "AdministrativeArea", name: "Ruhrgebiet" },
    ],
    paymentAccepted: ["Cash", "Credit Card", "EC-Karte", "Überweisung"],
    currenciesAccepted: "EUR",
    sameAs: [site.googleMapsUrl],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Werkstatt-Leistungen",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.title,
          description: s.short,
        },
      })),
    },
  };
}

const dayMap = {
  Montag: "Monday",
  Dienstag: "Tuesday",
  Mittwoch: "Wednesday",
  Donnerstag: "Thursday",
  Freitag: "Friday",
  Samstag: "Saturday",
  Sonntag: "Sunday",
} as const;

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: new URL(item.url, site.url).toString(),
    })),
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}#website`,
    url: site.url,
    name: site.fullName,
    inLanguage: "de-DE",
    publisher: { "@id": `${site.url}#business` },
  };
}
