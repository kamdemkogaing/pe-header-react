export const localeOptions = [
  { code: "DE", label: "DE" },
  { code: "EN", label: "EN" },
  { code: "FR", label: "FR" },
];

export const localePaths = {
  DE: "",
  EN: "/en",
  FR: "/fr",
};

export const translations = {
  DE: {
    support: "Support",
    newsletter: "Newsletter",
    faq: "FAQ",
    searchPlaceholder: "Suchbegriff eingeben ...",
    category: "Kategorie",
    menuLabel: "Menü",
    close: "Schließen",
    pageTitle: "Demo Header",
    pageDescription: "Print Equipment Header mit React + Tailwind.",
    orderHotline: "Bestellhotline: +49 7223 2815 0",
  },
  EN: {
    support: "Support",
    newsletter: "Newsletter",
    faq: "FAQ",
    searchPlaceholder: "Enter search term ...",
    category: "Category",
    menuLabel: "Menu",
    close: "Close",
    pageTitle: "Demo Header",
    pageDescription: "Print Equipment header with React + Tailwind.",
    orderHotline: "Order hotline: +49 7223 2815 0",
  },
  FR: {
    support: "Support",
    newsletter: "Newsletter",
    faq: "FAQ",
    searchPlaceholder: "Entrez votre recherche ...",
    category: "Catégorie",
    menuLabel: "Menu",
    close: "Fermer",
    pageTitle: "En-tête de démonstration",
    pageDescription: "En-tête Print Equipment avec React + Tailwind.",
    orderHotline: "Hotline commandes : +49 7223 2815 0",
  },
};

const navLabelMap = {
  Neuheiten: { EN: "New Arrivals", FR: "Nouveautés" },
  Sublimation: { EN: "Sublimation", FR: "Sublimation" },
  Sublimationsartikel: {
    EN: "Sublimation Items",
    FR: "Articles de sublimation",
  },
  Laser: { EN: "Laser", FR: "Laser" },
  Textildruck: { EN: "Textile Printing", FR: "Impression textile" },
  DTF: { EN: "DTF", FR: "DTF" },
  "UV Druck": { EN: "UV Printing", FR: "Impression UV" },
  Transferpressen: { EN: "Heat Presses", FR: "Presses à chaud" },
  Automatisierung: { EN: "Automation", FR: "Automatisation" },
  Specials: { EN: "Specials", FR: "Spéciaux" },
  Aktionen: { EN: "Promotions", FR: "Promotions" },
  "Demo- & Gebrauchtgeräte": {
    EN: "Demo & Used Equipment",
    FR: "Démo & équipements d’occasion",
  },
  "Bestellhotline: +49 7223 2815 0": {
    EN: "Order hotline: +49 7223 2815 0",
    FR: "Hotline commandes : +49 7223 2815 0",
  },
  "Suchbegriff eingeben ...": {
    EN: "Enter search term ...",
    FR: "Entrez votre recherche ...",
  },
  Menü: { EN: "Menu", FR: "Menu" },
  Kategorie: { EN: "Category", FR: "Catégorie" },
};

export const translate = (label, locale) => {
  return navLabelMap[label]?.[locale] || label;
};
