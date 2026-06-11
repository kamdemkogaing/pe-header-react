import { useState } from "react";
import Header from "./components/Header.jsx";
import ProductShowcase from "./components/ProductShowcase.jsx";

export default function App() {
  const [locale, setLocale] = useState("DE");

  return (
    <>
      <Header locale={locale} onLocaleChange={setLocale} />
      <main className="min-h-[80vh] bg-white text-black">
        <ProductShowcase />
      </main>
    </>
  );
}
