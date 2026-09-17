import Link from "next/link";

const PANELS = [
  {
    id: "anchor",
    gradient: "from-olive/25 via-charcoal to-terracotta/15",
    span: "col-span-2 row-span-1 lg:row-span-2",
    aspect: "aspect-[16/9] lg:aspect-square",
  },
  {
    id: "panel-2",
    gradient: "from-terracotta/20 via-charcoal to-olive/10",
    span: "col-span-1 row-span-1",
    aspect: "aspect-square",
  },
  {
    id: "panel-3",
    gradient: "from-charcoal via-olive/15 to-charcoal",
    span: "col-span-1 row-span-1",
    aspect: "aspect-square",
  },
  {
    id: "panel-4",
    gradient: "from-charcoal via-terracotta/15 to-charcoal",
    span: "col-span-1 row-span-1",
    aspect: "aspect-square",
  },
  {
    id: "panel-5",
    gradient: "from-olive/15 via-charcoal to-terracotta/20",
    span: "col-span-1 row-span-1",
    aspect: "aspect-square",
  },
];

export default function GalleryPreview() {
  return (
    <section className="bg-charcoal px-6 py-24 sm:py-32 lg:px-10">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.35em] text-terracotta">
          Gallery
        </span>
        <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight text-cream sm:text-4xl md:text-5xl">
          Evenings at Casa Luce.
        </h2>
        <p className="mt-6 text-base leading-relaxed text-cream/70 sm:text-lg">
          A glimpse of the atmosphere, plates, light, and Marina views that
          shape every evening.
        </p>
        <Link
          href="/gallery"
          className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-olive transition-colors hover:text-terracotta"
        >
          View the Gallery
          <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>

      <div className="mx-auto mt-16 grid max-w-7xl grid-cols-2 gap-3 sm:mt-20 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
        {PANELS.map((panel) => (
          <div
            key={panel.id}
            className={`relative overflow-hidden rounded-sm ring-1 ring-cream/15 ${panel.span} ${panel.aspect}`}
          >
            <div
              aria-hidden="true"
              className={`absolute inset-0 bg-gradient-to-br ${panel.gradient}`}
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(248,244,236,0.08),_transparent_65%)]"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
