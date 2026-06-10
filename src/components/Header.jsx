import {
  ChevronDown,
  ChevronRight,
  Globe2,
  Heart,
  Menu,
  Search,
  ShoppingBag,
  User,
  X,
} from "lucide-react";
import { useState } from "react";
import { localePaths, translate, translations } from "../data/i18n.js";
import { languages, mainNavigation } from "../data/navigation.js";

const base = "https://shop.printequipment.de";
const link = (href, locale) => {
  if (href?.startsWith("http") || href === "#") return href;
  const localePrefix = locale === "DE" ? "" : localePaths[locale] || "";
  return `${base}${localePrefix}${href}`;
};

function Badge({ children }) {
  return (
    <span className="absolute -right-2 -top-2 grid h-5 min-w-5 place-items-center rounded-full bg-white px-1 text-[10px] font-black text-black">
      {children}
    </span>
  );
}

function MegaColumn({ item, locale }) {
  return (
    <div className="min-w-0">
      <a
        href={link(item.href, locale)}
        className="block text-sm font-black uppercase tracking-wide text-white hover:opacity-70"
      >
        {translate(item.label, locale)}
      </a>
      {item.children?.length > 0 && (
        <ul className="mt-3 space-y-2">
          {item.children.map((c) => (
            <li key={c.label}>
              <a
                href={link(c.href, locale)}
                className="group flex items-center justify-between rounded-xl px-3 py-2 text-sm font-semibold text-neutral-300 hover:bg-white hover:text-black"
              >
                <span>{translate(c.label, locale)}</span>
                {c.children?.length ? <ChevronRight size={14} /> : null}
              </a>
              {c.children?.length > 0 && (
                <div className="mt-1 flex flex-wrap gap-1 pl-3">
                  {c.children.map((s) => (
                    <a
                      key={s.label}
                      href={link(s.href, locale)}
                      className="rounded-full border border-white/10 px-2 py-1 text-xs text-neutral-400 hover:border-white hover:text-white"
                    >
                      {translate(s.label, locale)}
                    </a>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function DesktopMega({ active, onClose, locale }) {
  if (!active) return null;
  const children = active.children || [];
  const localeData = translations[locale] || translations.DE;
  return (
    <div
      onMouseLeave={onClose}
      className="absolute left-0 right-0 top-full z-40 border-t border-white/10 bg-black/95 shadow-2xl backdrop-blur-xl"
    >
      <div className="mx-auto max-w-[1680px] px-4 sm:px-6 lg:px-10">
        <div className="flex items-start justify-between border-b border-white/10 py-4">
          <div>
            <p className="text-xs uppercase tracking-[.35em] text-neutral-500">
              {localeData.category}
            </p>
            <h3 className="mt-1 text-2xl font-black text-white">
              {translate(active.label, locale)}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="rounded-full p-2 text-neutral-400 hover:bg-white hover:text-black"
          >
            <X size={20} />
          </button>
        </div>
        <div className="grid max-h-[62vh] grid-cols-1 gap-7 overflow-y-auto py-7 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
          {children.length ? (
            children.map((c) => (
              <MegaColumn key={c.label} item={c} locale={locale} />
            ))
          ) : (
            <a
              href={link(active.href, locale)}
              className="rounded-2xl border border-white/10 p-5 font-black text-white hover:bg-white hover:text-black"
            >
              {localeData.category}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Header({ locale, onLocaleChange }) {
  const [active, setActive] = useState(null);
  const [mobile, setMobile] = useState(false);
  const localeData = translations[locale] || translations.DE;

  return (
    <header className="sticky top-0 z-50 bg-black text-white">
      <div className="border-b border-white/10">
        <div className="mx-auto flex max-w-[1680px] items-center justify-between gap-4 px-4 py-3 text-xs font-bold sm:px-6 lg:px-10">
          <div className="hidden items-center gap-5 lg:flex">
            <span>{localeData.orderHotline}</span>
            <a
              className="hover:opacity-70"
              href="https://printequipment.de/support/"
            >
              {localeData.support}
            </a>
            <span className="flex items-center gap-1">
              <Globe2 size={14} /> {locale}
            </span>
          </div>
          <div className="ml-auto flex items-center gap-3">
            <div className="hidden items-center gap-3 sm:flex">
              <a
                className="hidden hover:opacity-70 sm:inline"
                href="https://shop.printequipment.de/Newsletter/"
              >
                {localeData.newsletter}
              </a>
              <a
                className="hidden hover:opacity-70 sm:inline"
                href="https://printequipment.de/faq/"
              >
                {localeData.faq}
              </a>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-2 py-1 text-[11px] uppercase tracking-[.3em] text-white">
              {languages.map((l) => (
                <button
                  key={l.code}
                  type="button"
                  onClick={() => onLocaleChange(l.code)}
                  className={`rounded-full px-2 py-1 transition cursor-pointer ${locale === l.code ? "bg-white text-black" : "hover:bg-white/10"}`}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto grid max-w-[1680px] grid-cols-[auto_1fr_auto] items-center gap-4 px-4 py-5 sm:px-6 lg:px-10">
        <a href={base} className="flex items-center">
          <img
            src="/print-mobil.png"
            alt="Print Equipment"
            className="h-12 w-auto object-contain sm:h-16"
            onError={(e) => {
              e.currentTarget.style.display = "none";
              e.currentTarget.nextSibling.style.display = "block";
            }}
          />
          <span className="hidden text-xl font-black uppercase tracking-wider">
            Print
            <br />
            <small>Equipment</small>
          </span>
        </a>
        <form className="mx-auto hidden w-full max-w-2xl items-center rounded-full border border-white/80 px-4 py-3 focus-within:border-white lg:flex">
          <input
            className="w-full bg-transparent text-sm text-white outline-none placeholder:text-neutral-400"
            placeholder={localeData.searchPlaceholder}
          />
          <button type="submit">
            <Search size={22} />
          </button>
        </form>
        <div className="flex items-center gap-4">
          <button className="relative hidden sm:block">
            <Heart size={24} />
            <Badge>1</Badge>
          </button>
          <button className="hidden sm:block">
            <User size={24} />
          </button>
          <button className="relative">
            <ShoppingBag size={24} />
            <Badge>1</Badge>
          </button>
          <button
            onClick={() => setMobile(true)}
            className="rounded-full border border-white/20 p-2 lg:hidden"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>
      <nav className="relative hidden border-t border-white/10 lg:block">
        <div className="no-scrollbar mx-auto flex max-w-[1680px] gap-2 overflow-x-auto px-4 py-4 sm:px-6 lg:px-10">
          {mainNavigation.map((item, i) => (
            <a
              key={item.label}
              onMouseEnter={() => setActive(item)}
              href={link(item.href, locale)}
              className={`shrink-0 rounded-full px-5 py-3 text-sm font-black uppercase transition ${i === 0 ? "bg-white text-black" : "text-white hover:bg-white hover:text-black"}`}
            >
              {translate(item.label, locale)}
            </a>
          ))}
        </div>
        <DesktopMega
          active={active}
          onClose={() => setActive(null)}
          locale={locale}
        />
      </nav>
      <div className="border-t border-white/10 px-4 pb-4 lg:hidden">
        <form className="flex items-center rounded-full border border-white/70 px-4 py-3">
          <input
            className="w-full bg-transparent text-sm outline-none placeholder:text-neutral-400"
            placeholder={localeData.searchPlaceholder}
          />
          <Search size={20} />
        </form>
      </div>
      {mobile && (
        <div className="fixed inset-0 z-50 bg-black">
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-4">
            <b className="text-lg uppercase tracking-wider">
              {localeData.menuLabel}
            </b>
            <button
              onClick={() => setMobile(false)}
              className="rounded-full border border-white/20 p-2"
            >
              <X />
            </button>
          </div>
          <div className="h-[calc(100vh-65px)] overflow-y-auto px-4 pb-10">
            {mainNavigation.map((item) => (
              <MobileItem key={item.label} item={item} locale={locale} />
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

function MobileItem({ item, level = 0, locale }) {
  const [open, setOpen] = useState(false);
  const has = item.children?.length > 0;
  return (
    <div className="border-b border-white/10">
      <div
        className="flex items-center gap-2"
        style={{ paddingLeft: `${level * 14}px` }}
      >
        <a
          href={link(item.href, locale)}
          className="flex-1 py-4 text-sm font-black uppercase tracking-wide text-white"
        >
          {translate(item.label, locale)}
        </a>
        {has && (
          <button
            onClick={() => setOpen(!open)}
            className="rounded-full p-2 text-white hover:bg-white/10"
          >
            <ChevronDown
              className={open ? "rotate-180 transition" : "transition"}
              size={18}
            />
          </button>
        )}
      </div>
      {open && has && (
        <div className="pb-2">
          {item.children.map((c) => (
            <MobileItem
              key={c.label}
              item={c}
              level={level + 1}
              locale={locale}
            />
          ))}
        </div>
      )}
    </div>
  );
}
