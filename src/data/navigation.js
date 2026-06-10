const p = "/";
export const languages = [
  { code: "DE", label: "DE" },
  { code: "EN", label: "EN" },
  { code: "FR", label: "FR" },
];
export const mainNavigation = [
  {
    label: "Neuheiten",
    href: "/Neuheiten/",
    children: [
      { label: "Neu eingetroffen", href: "/Neuheiten/Neu-eingetroffen/" },
      { label: "Coming soon", href: "/Neuheiten/Coming-soon/" },
    ],
  },
  {
    label: "Sublimation",
    href: "/Sublimation/",
    children: [
      { label: "Drucksysteme", href: "/Sublimation/Drucksysteme/" },
      {
        label: "Sublimationstinte",
        href: "/Sublimation/Sublimationstinte/",
        children: ["Epson", "Sublisplash", "Sawgrass"].map((x) => ({
          label: x,
          href: "#",
        })),
      },
      { label: "Sublimationspapier", href: "#" },
      { label: "Garantieverlängerung", href: "#" },
      { label: "Zubehör für Sublimationsdrucker", href: "#" },
      { label: "Demo- & Gebrauchtgeräte", href: "#" },
    ],
  },
  {
    label: "Sublimationsartikel",
    href: "/Sublimationsartikel/",
    children: [
      {
        label: "Tassen",
        href: "#",
        children: [
          "Keramik",
          "Glas",
          "Porzellan",
          "Kunststoff",
          "Emaille",
          "Edelstahl",
          "Zum alten Preis",
        ].map((x) => ({ label: x, href: "#" })),
      },
      {
        label: "To Go",
        href: "#",
        children: ["Edelstahl", "Glas", "Kunstoff", "Aluminium"].map((x) => ({
          label: x,
          href: "#",
        })),
      },
      { label: "Gläser & Krüge", href: "#" },
      {
        label: "Bekleidung",
        href: "#",
        children: [
          "T-Shirts/Polo-Shirts/Tops",
          "Sweatshirt & Hoody",
          "Solar Shirts",
          "Unterwäsche & Socken",
          "Baby & Kinderbekleidung",
        ].map((x) => ({ label: x, href: "#" })),
      },
      { label: "Kissen & Decken", href: "#" },
      {
        label: "Textil",
        href: "#",
        children: [
          "Sandalen & Slipper",
          "Patchmaterial & Stickrähmchen",
          "Taschen & Rucksäcke",
          "Kuscheltiere",
          "Schürzen",
          "Textilprodukte",
        ].map((x) => ({ label: x, href: "#" })),
      },
      {
        label: "Fotogeschenke",
        href: "#",
        children: [
          "Fotoaufsteller",
          "Emo-Frames",
          "Duraluxe",
          "ChromaLuxe",
          "Unisub-Foto",
        ].map((x) => ({ label: x, href: "#" })),
      },
      {
        label: "Home & Living",
        href: "#",
        children: [
          "Haushalt",
          "Uhren",
          "Fliesen",
          "Magnete",
          "Dosen & Schmuckkästchen",
          "Handtücher",
          "Bürobedarf",
        ].map((x) => ({ label: x, href: "#" })),
      },
      ...[
        "Aluminiumplatten",
        "Puzzle & Spiele",
        "Schlüsselanhänger",
        "Geschenk & Versandverpackungen",
        "Fußmatten",
        "Handycover",
        "Zubehör",
      ].map((x) => ({ label: x, href: "#" })),
    ],
  },
  {
    label: "Laser",
    href: "/Laser/",
    children: [
      {
        label: "Lasergravierer",
        href: "#",
        children: [{ label: "XTOOL", href: "#" }],
      },
      {
        label: "Laserartikel",
        href: "#",
        children: [
          "Glas",
          "Holz",
          "Kunstleder/PU",
          "Keramik",
          "Edelstahl",
          "Schiefer",
          "Acrylglas",
        ].map((x) => ({ label: x, href: "#" })),
      },
      ...[
        "Absaugfilteranlage",
        "Zubehör",
        "Laser Ersatz- & Verschleißteile",
        "Demo- & Gebrauchtgeräte",
      ].map((x) => ({ label: x, href: "#" })),
    ],
  },
  {
    label: "Textildruck",
    href: "/Textildruck/",
    children: [
      {
        label: "DTG",
        href: "#",
        children: [
          "DTG Drucksysteme",
          "DTG Vorbehandlungssysteme",
          "DTG Tinten",
          "DTG Vorbehandlungsflüssigkeit",
          "Software",
          "DTG Reinigung & Pflege",
          "DTG Ersatz- & Verschleißteile",
          "DTG Zubehör",
          "Bedruckbare Artikel",
          "DTG Druckgutaufnahmen",
        ].map((x) => ({ label: x, href: "#" })),
      },
      {
        label: "Folientransfer",
        href: "#",
        children: ["Schneideplotter", "Folien", "Zubehör"].map((x) => ({
          label: x,
          href: "#",
        })),
      },
      {
        label: "Tonertransfer",
        href: "#",
        children: [
          "Drucksysteme",
          "Toner & Bildtrommel",
          "Transferpapiere",
          "Bedruckbare Artikel",
          "Zubehör",
        ].map((x) => ({ label: x, href: "#" })),
      },
      {
        label: "Siebdruck",
        href: "#",
        children: [
          "Maschinen",
          "Textildruckfarben",
          "Zubehör",
          "Textilfixierung",
        ].map((x) => ({ label: x, href: "#" })),
      },
      { label: "Demo- & Gebrauchtgeräte", href: "#" },
    ],
  },
  {
    label: "DTF",
    href: "/DTF/",
    children: [
      {
        label: "DTF Drucksysteme",
        href: "#",
        children: ["DTF Rollendrucksysteme", "DTF Formatdrucksysteme"].map(
          (x) => ({ label: x, href: "#" }),
        ),
      },
      { label: "Pudereinheiten & Öfen", href: "#" },
      {
        label: "DTF Tinten",
        href: "#",
        children: ["Dupont", "Kodak", "Epson", "Mexar", "xTool", "TexJet"].map(
          (x) => ({ label: x, href: "#" }),
        ),
      },
      {
        label: "DTF Film Formatware",
        href: "#",
        children: ["PE Brand", "Forever", "Kodak"].map((x) => ({
          label: x,
          href: "#",
        })),
      },
      {
        label: "DTF Film Rollenware",
        href: "#",
        children: ["Instant & Hot Peel", "Cold Peel"].map((x) => ({
          label: x,
          href: "#",
        })),
      },
      ...[
        "DTF Schmelzkleber",
        "Bedruckbare Artikel",
        "Software",
        "DTF Reinigung & Pflege",
      ].map((x) => ({ label: x, href: "#" })),
      {
        label: "DTF Ersatz- & Verschleißteile",
        href: "#",
        children: [
          "XP600-Pro",
          "XP600-Pro- 4HD",
          "Epson F2100/ F2200",
          "Epson G6000",
        ].map((x) => ({ label: x, href: "#" })),
      },
      ...[
        "Service & Wartungsverträge",
        "DTF Schneidesysteme",
        "DTF Absauganlagen",
        "Demo- & Gebrauchtgeräte",
        "Zubehör",
      ].map((x) => ({ label: x, href: "#" })),
    ],
  },
  {
    label: "UV Druck",
    href: "/UV-Druck/",
    children: [
      ...["UV Direktdrucksysteme", "UV-DTF"].map((x) => ({
        label: x,
        href: "#",
      })),
      {
        label: "UV Tinte",
        href: "#",
        children: ["Mutoh®", "Epson®", "UV-DTF"].map((x) => ({
          label: x,
          href: "#",
        })),
      },
      ...[
        "UV Reinigung & Pflege",
        "UV Ersatz- & Verschleißteile",
        "UV Vor- & Nachbehandlung",
        "Software",
        "Zubehör",
      ].map((x) => ({ label: x, href: "#" })),
      {
        label: "Bedruckbare Artikel",
        href: "#",
        children: ["Holz", "Schlüsselanhänger"].map((x) => ({
          label: x,
          href: "#",
        })),
      },
      { label: "Druckgutaufnahmen", href: "#" },
    ],
  },
  {
    label: "Transferpressen",
    href: "/Transferpressen/",
    children: [
      {
        label: "Flachpressen",
        href: "#",
        children: [
          "Flachpressen manuell",
          "Flachpressen pneumatisch",
          "Flachpressen semiautomatisch",
          "Großformatpressen",
        ].map((x) => ({ label: x, href: "#" })),
      },
      { label: "Kompressoren", href: "#" },
      {
        label: "Tassenpressen",
        href: "#",
        children: ["Tassenpressen", "Heizelemente", "Ersatzteile"].map((x) => ({
          label: x,
          href: "#",
        })),
      },
      ...[
        "Vakuum Pressen",
        "Cap und Ball Pressen",
        "Heißluftöfen",
        "Transferpressen-Karussell",
        "Zubehör",
        "Demo- & Gebrauchtgeräte",
      ].map((x) => ({ label: x, href: "#" })),
    ],
  },
  {
    label: "Automatisierung",
    href: "/Automatisierung/",
    children: ["Tassen-Automation", "Transferpressen- Karussell"].map((x) => ({
      label: x,
      href: "#",
    })),
  },
  {
    label: "Specials",
    href: "/Specials/",
    children: [
      {
        label: "Solvent Druck",
        href: "#",
        children: [
          "Solvent Drucker",
          "Solvent Tinte",
          "Zubehör",
          "Ersatz- & Verschleißteile",
        ].map((x) => ({ label: x, href: "#" })),
      },
      { label: "Leinwände", href: "#" },
      { label: "Academy", href: "#" },
      {
        label: "Multiplexx",
        href: "#",
        children: [
          "Handhebelpresse",
          "Schneide-/Presseinheit",
          "Schlüsselanhänger",
          "Diverses",
          "Zubehör",
        ].map((x) => ({ label: x, href: "#" })),
      },
      {
        label: "Metallbearbeitung",
        href: "#",
        children: ["Metallschere", "Biegemeister", "Eckenrunder"].map((x) => ({
          label: x,
          href: "#",
        })),
      },
      { label: "Software", href: "#" },
      {
        label: "Für Deine Werbung",
        href: "#",
        children: ["Kataloge", "Produktbilder", "Web Kataloge"].map((x) => ({
          label: x,
          href: "#",
        })),
      },
      { label: "Fotoartikel", href: "#" },
    ],
  },
  {
    label: "Aktionen",
    href: "/Aktionen/",
    children: [
      "Schnäppchen",
      "WM-Artikel",
      "Sublimation",
      "Laser",
      "Textildruck",
      "DTF",
      "Transferpressen",
      "Sonstiges",
    ].map((x) => ({ label: x, href: "#" })),
  },
  {
    label: "Demo- & Gebrauchtgeräte",
    href: "/Demo-Gebrauchtgeraete/",
    children: [],
  },
];
