import { useState } from "react";
import Header from "./components/Header.jsx";
import { translations } from "./data/i18n.js";

export default function App() {
  const [locale, setLocale] = useState("DE");

  return (
    <>
      <Header locale={locale} onLocaleChange={setLocale} />
      <main className="min-h-[80vh] bg-white pt-8">
        <div className="mx-auto max-w-7xl px-4">
          <h1 className="text-3xl font-black">
            {translations[locale].pageTitle}
          </h1>
          <p className="mt-3 text-neutral-600">
            {translations[locale].pageDescription}
          </p>
        </div>
      </main>
    </>
  );
}
