import { CheckCircle, Minus, Plus, ShieldCheck, Star } from "lucide-react";
import { useState } from "react";

const packages = [
  {
    id: "standalone",
    title: "F2 Ultra UV Standalone",
    price: "3.959,00€",
    saved: "600,00€",
    oldPrice: "4.559,00€",
    monthly: "187€/Mo. in 24 Raten",
  },
  {
    id: "conveyor",
    title: "F2 Ultra UV + Conveyor",
    price: "4.439,00€",
    saved: "600,00€",
    oldPrice: "5.039,00€",
    monthly: "210€/Mo. in 24 Raten",
  },
  {
    id: "deluxe",
    title: "F2 Ultra UV Deluxe Bundle",
    price: "5.679,00€",
    saved: "600,00€",
    oldPrice: "6.279,00€",
    monthly: "236€/Mo. in 24 Raten",
  },
];

const bullets = [
  "Meister des Glases. Überzeugt bei 3D-Innengravur, Reliefgravur, Schneiden sowie präziser Flach- und Rundgravur.",
  "Unvergleichliche Materialkompatibilität. Kompatibel mit Kristall, Glas, Keramik, Acryl, Kunststoff, Metall, Holz und mehr.",
  "Mikrometergenaue Präzision, makellose Details. 100+ feiner als herkömmliche Laser und erfasst jedes Detail.",
  "Keine Brandspuren, saubere Ergebnisse. Kaltbearbeitung ohne Vorbehandlung oder Polieren — Perfektion in einem Schritt.",
  "Benutzerfreundlich. Zwei 48-MP-Kameras, 2D-zu-3D-Umwandlung per Klick, 15.000 mm/s Geschwindigkeit und großer Arbeitsbereich.",
];

const highlights = [
  {
    icon: ShieldCheck,
    text: "0 % Mehrwertsteuer für KMU aus AT & DE.",
  },
  {
    icon: ShieldCheck,
    text: "Flexible Finanzierung entdecken.",
  },
  {
    icon: ShieldCheck,
    text: "Der endgültige Preis kann je nach Versandart an der Kasse variieren.",
  },
];

export default function ProductShowcase() {
  const [selectedPackage, setSelectedPackage] = useState(packages[0].id);
  const [quantity, setQuantity] = useState(1);

  const decreaseQuantity = () => setQuantity((value) => Math.max(1, value - 1));
  const increaseQuantity = () => setQuantity((value) => value + 1);

  return (
    <section className="mx-auto max-w-450 px-4 py-30 sm:px-6 lg:px-10">
      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.75fr]">
        <div className="space-y-6">
          <div className="overflow-hidden rounded-[2.5rem] border border-black/10 bg-[#090909] p-6 shadow-[0_40px_120px_-45px_rgba(0,0,0,0.45)]">
            <div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
              <div className="space-y-6">
                <div className="space-y-5">
                  <div className="space-y-4">
                    <h1 className="text-3xl font-black tracking-tight text-white sm:text-3xl">
                      xTool F2 Ultra UV 5 W UV-Lasergravierer
                    </h1>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-white/70">
                      <div className="flex items-center gap-1">
                        {Array.from({ length: 5 }, (_, idx) => (
                          <Star key={idx} className="h-4 w-4 text-amber-300" />
                        ))}
                      </div>
                      <span className="font-bold">21 Bewertungen</span>
                    </div>
                  </div>
                </div>

                <ul className="space-y-3 text-sm text-white/80">
                  {bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex gap-3 rounded-[1.75rem] border border-white/10 bg-white/5 p-4"
                    >
                      <span className="grid h-10 w-10 place-items-center rounded-3xl bg-white/10 text-white">
                        <CheckCircle className="h-4 w-4" />
                      </span>
                      <p>{bullet}</p>
                    </li>
                  ))}
                </ul>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-4xl border border-white/10 bg-white p-4 text-black shadow-[0_18px_40px_-24px_rgba(0,0,0,0.2)]">
                    <p className="text-xs uppercase tracking-widest text-neutral-500">
                      Final Preis
                    </p>
                    <p className="mt-2 text-2xl font-black">3.959,00€</p>
                    <p className="mt-1 text-sm text-neutral-500">inkl. MwSt.</p>
                  </div>
                  <div className="overflow-hidden rounded-4xl border border-white/10 bg-neutral-950 p-4 text-white shadow-[0_18px_40px_-24px_rgba(0,0,0,0.35)]">
                    <p className="text-xs uppercase tracking-widest text-neutral-400">
                      UVP
                    </p>
                    <p className="mt-2 text-2xl font-black">4.559,00€</p>
                    <p className="mt-1 text-sm text-neutral-400">
                      Gespart <span className="font-black">600,00€</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-white/10 bg-white p-5 text-black shadow-[0_18px_40px_-24px_rgba(0,0,0,0.12)]">
                <div className="relative overflow-hidden rounded-4xl p-6">
                  <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-white/10 blur-2xl"></div>
                  <div className="flex h-130 gap-5">
                    <img
                      src="/xtool_f2_ultra.webp"
                      alt="Produktansicht"
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="mt-20 grid grid-cols-4 gap-3">
                  {Array.from({ length: 4 }, (_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      className="cursor-pointer rounded-xl border border-black/10 bg-neutral-100 text-sm text-neutral-700 transition hover:border-black/20 hover:bg-neutral-200"
                    >
                      Bild {idx + 1}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2.5rem] border border-black/10 bg-white p-6 shadow-[0_35px_80px_-40px_rgba(0,0,0,0.2)]">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs uppercase tracking-widest text-neutral-500">
                  Package
                </p>
                <h2 className="mt-2 text-xl font-black">
                  Wählen Sie Ihr Bundle
                </h2>
              </div>
              <span className="inline-flex items-center rounded-full bg-black px-4 py-2 text-xs font-black uppercase tracking-widest text-white">
                Gespart 600,00€
              </span>
            </div>

            <div className="mt-6 space-y-4">
              {packages.map((pkg) => (
                <button
                  key={pkg.id}
                  type="button"
                  onClick={() => setSelectedPackage(pkg.id)}
                  className={`relative flex w-full flex-col gap-3 overflow-hidden rounded-4xl border px-5 py-6 text-left transition cursor-pointer ${
                    selectedPackage === pkg.id
                      ? "border-black bg-black text-white shadow-[0_18px_45px_-30px_rgba(0,0,0,0.35)]"
                      : "border-black/10 bg-white text-black hover:border-black/50 hover:bg-neutral-50"
                  }`}
                >
                  <div className="absolute right-5 top-5 rounded-full bg-red-600 px-3 py-1 text-xs font-black uppercase tracking-widest text-white">
                    Gespart
                  </div>

                  <div className="flex items-center justify-between gap-4">
                    <span className="text-base font-black">{pkg.title}</span>
                    <span className="text-sm uppercase tracking-[0.35em] text-neutral-500">
                      {pkg.saved}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-end gap-3">
                    <p className="text-2xl font-black">{pkg.price}</p>
                    <p className="text-sm text-neutral-500 line-through">
                      {pkg.oldPrice}
                    </p>
                  </div>

                  <p className="text-sm text-neutral-500">{pkg.monthly}</p>
                </button>
              ))}
            </div>
          </div>
        </div>

        <aside className="space-y-6">
          <div className="overflow-hidden rounded-[2.5rem] border border-black/10 bg-white p-6 shadow-[0_35px_80px_-40px_rgba(0,0,0,0.2)]">
            <div className="space-y-4">
              <div>
                <p className="text-xs uppercase tracking-widest text-neutral-500">
                  Sofort bestellen
                </p>
                <h2 className="mt-2 text-2xl font-black">Jetzt sichern</h2>
              </div>

              <div className="grid gap-3 rounded-[1.75rem] border border-neutral-200 bg-neutral-50 p-5">
                {highlights.map((item) => (
                  <div
                    key={item.text}
                    className="flex items-start gap-3 text-sm text-neutral-700"
                  >
                    <div className="mt-1 grid h-5 w-5 place-items-center rounded-2xl bg-black text-white">
                      <CheckCircle className="h-4 w-4" />
                    </div>
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>

              <div className="rounded-[1.75rem] border border-black/10 bg-black p-6 text-white shadow-[0_20px_50px_-30px_rgba(0,0,0,0.6)]">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.35em] text-white/50">
                      Mid-Year Sale
                    </p>
                    <p className="mt-3 text-xl font-black">
                      600€ Rabatt & Gratisgeschenk
                    </p>
                  </div>

                  <div className="grid grid-cols-3 gap-2 text-center text-xs uppercase tracking-[0.35em] text-white/80">
                    <div className="rounded-3xl bg-white/10 px-3 py-2">03</div>
                    <div className="rounded-3xl bg-white/10 px-3 py-2">10</div>
                    <div className="rounded-3xl bg-white/10 px-3 py-2">56</div>
                  </div>
                </div>

                <p className="mt-4 text-sm text-white/70">
                  Jetzt bestellen und Chance auf eine Gratis-Bestellung sichern.
                </p>
              </div>
            </div>
          </div>
        </aside>

        <div className="lg:justify-self-end">
          <div className="w-full max-w-140 rounded-4xl border border-neutral-200 bg-white p-4 shadow-[0_25px_80px_-35px_rgba(0,0,0,0.35)]">
            <div className="grid gap-4">
              <div className="grid gap-4 sm:grid-cols-[130px_1fr]">
                <div className="flex items-center justify-between rounded-full border border-neutral-300 bg-white px-3 py-2">
                  <button
                    type="button"
                    onClick={decreaseQuantity}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-neutral-100 transition hover:bg-neutral-200"
                  >
                    <Minus className="h-4 w-4 text-neutral-700" />
                  </button>

                  <span className="text-base font-black text-black">
                    {quantity}
                  </span>

                  <button
                    type="button"
                    onClick={increaseQuantity}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-neutral-100 transition hover:bg-neutral-200"
                  >
                    <Plus className="h-4 w-4 text-neutral-700" />
                  </button>
                </div>

                <button
                  type="button"
                  className="w-full rounded-full bg-[#28C84D] px-6 py-4 text-base font-bold text-white transition hover:bg-[#21b742]"
                >
                  In den Warenkorb
                </button>
              </div>

              <button
                type="button"
                className="w-full rounded-full bg-[#FFC439] py-4 text-lg font-bold text-[#003087] transition hover:bg-[#ffcf55] cursor-pointer"
              >
                PayPal
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
