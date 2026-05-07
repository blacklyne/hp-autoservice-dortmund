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
    slug: "motordiagnose",
    title: "Motordiagnose",
    short: "Fehler auslesen, Elektronik prüfen",
    description:
      "Moderne Fahrzeuge sind Computer auf Rädern. Wir lesen Fehlerspeicher aus, finden Ursachen für Warnleuchten und reparieren Elektrik und Elektronik herstellerübergreifend.",
    icon: "diagnose",
  },
  {
    slug: "verschleissreparaturen",
    title: "Verschleißreparaturen",
    short: "Bremsen, Stoßdämpfer, Kupplung",
    description:
      "Bremsbeläge, Bremsscheiben, Stoßdämpfer, Kupplung, Auspuff - alle typischen Verschleißteile prüfen und tauschen wir mit Markenqualität. Sicherheit ohne Kompromisse.",
    icon: "wrench",
  },
  {
    slug: "wartung",
    title: "Wartungsarbeiten",
    short: "Regelmäßig, sauber, transparent",
    description:
      "Routinewartung nach Herstellervorgaben - vom Filter über Zündkerzen bis zur Bremsflüssigkeit. Kleine Eingriffe, die teure Folgereparaturen verhindern.",
    icon: "clipboard",
  },
  {
    slug: "hu-au",
    title: "Haupt- u. Abgasuntersuchung",
    short: "TÜV direkt bei uns in der Werkstatt",
    description:
      "Hauptuntersuchung und Abgasuntersuchung nehmen wir in Kooperation mit dem TÜV direkt bei uns in der Werkstatt ab. Wir bereiten Ihr Fahrzeug auf die Prüfung vor und beheben Mängel sofort.",
    icon: "shield-check",
  },
  {
    slug: "oelwechsel-inspektion",
    title: "Ölwechsel u. Inspektion",
    short: "Nach Herstellervorgaben - alle Marken",
    description:
      "Motorölwechsel inklusive Filter, exakt nach Herstellervorgabe und Viskosität. Inspektion mit Scheckheft-Eintrag und kostenlosem Zusatzcheck der wichtigsten Verschleißpunkte.",
    icon: "oil",
  },
  {
    slug: "klima-glas-reifen",
    title: "Klima-, Glas-, Reifenservice",
    short: "Klimaservice, Steinschlag, Reifenwechsel",
    description:
      "Klimaanlage warten und desinfizieren, Steinschlag-Reparatur und Frontscheibenwechsel, Reifenwechsel mit Auswuchten, RDKS-Service und sichere Saisoneinlagerung in unserem Reifenhotel.",
    icon: "snowflake",
  },
  {
    slug: "instandhaltung",
    title: "Instandhaltungstechnik",
    short: "Vorbeugen statt reparieren",
    description:
      "Vorbeugende Instandhaltung verlängert die Lebensdauer Ihres Fahrzeugs spürbar. Wir prüfen kritische Komponenten regelmäßig und greifen ein, bevor aus einem Hinweis ein Schaden wird.",
    icon: "settings",
  },
  {
    slug: "cabriolet-verdeck",
    title: "Cabriolet-Verdeckwechsel",
    short: "Verdeck, Mechanik, Hydraulik",
    description:
      "Wir tauschen abgenutzte Cabrio-Verdecke und reparieren Verdeckmechanik und Hydraulik - damit Ihr Cabrio auch nach vielen Jahren wieder dicht und leise schließt.",
    icon: "car",
  },
  {
    slug: "karosserie-tuning",
    title: "Karosserie-Tuning",
    short: "Bodywork, Lackierung, Individualisierung",
    description:
      "Vom dezenten Body-Kit bis zur kompletten Karosserie-Individualisierung. Wir arbeiten sauber, planen mit Ihnen jedes Detail und liefern serienreife Qualität ab.",
    icon: "spray",
  },
  {
    slug: "oldtimer",
    title: "Oldtimer-Restauration",
    short: "Klassiker pflegen und erhalten",
    description:
      "Oldtimer brauchen Erfahrung statt Diagnose-Tablet. Wir restaurieren Klassiker mit dem Respekt vor der Substanz - Technik, Karosserie und Lack aus einer Hand.",
    icon: "sparkle",
  },
];
