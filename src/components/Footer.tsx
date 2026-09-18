import Link from "next/link";

const NAV_LINKS = [
  { href: "/#home", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/our-story", label: "Our Story" },
  { href: "/gallery", label: "Gallery" },
  { href: "/#reservations", label: "Reservations" },
  { href: "/#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-cream/10 bg-charcoal px-6 py-16 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-3 lg:grid-cols-[1.5fr_1fr_1fr] lg:gap-16">
          <div>
            <Link
              href="/"
              className="font-serif text-2xl tracking-[0.25em] text-cream"
            >
              CASA LUCE
            </Link>
            <p className="mt-3 text-xs font-semibold uppercase tracking-widest text-cream/50">
              Italian Kitchen &mdash; Dubai
            </p>
          </div>

          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-cream/55">
              Navigation
            </span>
            <nav aria-label="Footer" className="mt-4 flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="w-fit text-sm text-cream/70 transition-colors hover:text-terracotta"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-cream/55">
              Contact
            </span>
            <address className="mt-4 flex flex-col gap-3 text-sm not-italic text-cream/70">
              <span>
                Dubai Marina, Dubai
                <br />
                United Arab Emirates
              </span>
              <a
                href="tel:+97145550188"
                className="w-fit transition-colors hover:text-terracotta"
              >
                +971 4 555 0188
              </a>
              <a
                href="mailto:hello@casaluce.ae"
                className="w-fit transition-colors hover:text-terracotta"
              >
                hello@casaluce.ae
              </a>
            </address>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-6 border-t border-cream/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-cream/60">
            Modern Italian dining by the Marina.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
            <div className="flex items-center gap-5">
              <a
                href="#"
                className="text-xs font-semibold uppercase tracking-widest text-cream/50 transition-colors hover:text-terracotta"
              >
                Instagram
              </a>
              <a
                href="#"
                className="text-xs font-semibold uppercase tracking-widest text-cream/50 transition-colors hover:text-terracotta"
              >
                Facebook
              </a>
            </div>
            <p className="text-xs text-cream/55">
              &copy; 2026 Casa Luce. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
