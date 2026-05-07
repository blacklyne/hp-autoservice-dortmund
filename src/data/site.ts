export const site = {
  name: "H.P. Autoservice",
  fullName: "H.P. Autoservice - Kfz-Meisterbetrieb Dortmund-Derne",
  tagline: "Ihr Kfz-Meisterbetrieb in Dortmund-Derne",
  url: "https://hp-autoservice-dortmund.de",
  email: "info@hp-autoservice-dortmund.de",
  phone: {
    display: "0231 810717",
    international: "+49 231 810717",
    href: "tel:+4923810717",
  },
  whatsapp: {
    display: "0231 810717",
    href: "https://wa.me/4923810717",
  },
  address: {
    street: "Nikolaus-Groß-Straße 21",
    zip: "44329",
    city: "Dortmund",
    district: "Derne",
    country: "Deutschland",
    countryCode: "DE",
    region: "Nordrhein-Westfalen",
  },
  geo: {
    lat: 51.5544,
    lng: 7.5111,
  },
  googlePlaceId: "ChIJB87aqPAQuUcRioh6S2v7gIE",
  googleMapsUrl: "https://www.google.com/maps/place/?q=place_id:ChIJB87aqPAQuUcRioh6S2v7gIE",
  googleReviewsUrl: "https://search.google.com/local/reviews?placeid=ChIJB87aqPAQuUcRioh6S2v7gIE",
  rating: {
    value: 4.8,
    count: 89,
  },
  hours: [
    { day: "Montag", open: "08:00", close: "17:00" },
    { day: "Dienstag", open: "08:00", close: "17:00" },
    { day: "Mittwoch", open: "08:00", close: "17:00" },
    { day: "Donnerstag", open: "08:00", close: "17:00" },
    { day: "Freitag", open: "08:00", close: "17:00" },
    { day: "Samstag", open: null, close: null },
    { day: "Sonntag", open: null, close: null },
  ],
  team: {
    masters: 2,
    employees: 2,
  },
  formspreeId: "REPLACE_FORMSPREE_ID",
};

export const nav = [
  { label: "Start", href: "/" },
  { label: "Leistungen", href: "/leistungen/" },
  { label: "Über uns", href: "/ueber-uns/" },
  { label: "Kontakt", href: "/kontakt/" },
];

export const services = [
  {
    slug: "hu-au",
    title: "HU & AU",
    short: "Hauptuntersuchung und Abgasuntersuchung",
    description:
      "Hauptuntersuchung und Abgasuntersuchung in Kooperation mit TÜV und DEKRA - direkt bei uns in der Werkstatt. Wir bereiten Ihr Fahrzeug auf die Prüfung vor und beheben Mängel sofort.",
    icon: "shield-check",
  },
  {
    slug: "inspektion",
    title: "Inspektion",
    short: "Nach Herstellervorgaben - alle Marken",
    description:
      "Inspektion nach Herstellervorgaben mit Original- oder gleichwertigen Ersatzteilen. Garantieerhalt bei Neufahrzeugen, lückenloses Scheckheft und ehrliche Beratung inklusive.",
    icon: "clipboard",
  },
  {
    slug: "bremsen",
    title: "Bremsen-Service",
    short: "Beläge, Scheiben, Bremsflüssigkeit",
    description:
      "Bremsbeläge und Bremsscheiben prüfen und wechseln, Bremsflüssigkeit erneuern, Bremsanlage komplett warten. Sicherheit ist nicht verhandelbar - wir arbeiten mit Markenteilen.",
    icon: "brake",
  },
  {
    slug: "reifen",
    title: "Reifen & Einlagerung",
    short: "Wechsel, Auswuchten, Einlagerung",
    description:
      "Reifenwechsel mit Auswuchten, Reifenmontage, RDKS-Service und sichere Einlagerung Ihrer Saisonreifen in unserem Reifenhotel - sauber, trocken und versichert.",
    icon: "tire",
  },
  {
    slug: "klima",
    title: "Klimaanlagen-Service",
    short: "Wartung, Desinfektion, Lecksuche",
    description:
      "Klimaanlage warten, Kältemittel auffüllen (R134a und R1234yf), Filter wechseln und Verdampfer desinfizieren. Damit Sie auch im Sommer entspannt unterwegs sind.",
    icon: "snowflake",
  },
  {
    slug: "diagnose",
    title: "Diagnose & Elektrik",
    short: "Fehler auslesen, Elektronik prüfen",
    description:
      "Moderne Fahrzeuge sind Computer auf Rädern. Wir lesen Fehlerspeicher aus, finden Ursachen für Warnleuchten und reparieren Elektrik und Elektronik herstellerübergreifend.",
    icon: "diagnose",
  },
  {
    slug: "oelwechsel",
    title: "Ölwechsel",
    short: "Motoröl und Filter nach Vorgabe",
    description:
      "Motorölwechsel inklusive Ölfilter, exakt nach Herstellervorgabe und Viskosität. Wir prüfen dabei kostenlos die wichtigsten Verschleißpunkte mit.",
    icon: "oil",
  },
  {
    slug: "achsvermessung",
    title: "Achsvermessung",
    short: "Spur und Sturz exakt einstellen",
    description:
      "Computergestützte 3D-Achsvermessung. Falsche Spureinstellung kostet Reifen, Sprit und Fahrkomfort - wir stellen alle Werte exakt nach Herstellerangabe ein.",
    icon: "axle",
  },
  {
    slug: "reparaturen",
    title: "Reparaturen aller Marken",
    short: "Motor, Getriebe, Kupplung, Auspuff",
    description:
      "Wir reparieren alle gängigen Marken - vom kleinen Defekt bis zur großen Reparatur. Motor, Getriebe, Kupplung, Auspuff, Fahrwerk: ehrliche Diagnose, fairer Preis.",
    icon: "wrench",
  },
  {
    slug: "unfall",
    title: "Unfallinstandsetzung",
    short: "Karosserie, Lack, Versicherung",
    description:
      "Nach dem Unfall stehen wir Ihnen zur Seite: Karosseriearbeiten, Lackierung und komplette Abwicklung mit Ihrer Versicherung - inklusive Gutachten und Ersatzwagen-Vermittlung.",
    icon: "car-crash",
  },
];
