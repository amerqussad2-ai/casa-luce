export default function GalleryHero() {
  return (
    <section className="relative overflow-hidden bg-charcoal px-6 py-24 sm:py-32 lg:px-10">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,rgba(201,121,93,0.14),transparent_65%)]"
      />
      <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
        <span className="mb-6 text-xs font-semibold uppercase tracking-[0.35em] text-terracotta-glow">
          Gallery
        </span>
        <h1 className="font-serif text-4xl font-semibold leading-tight text-cream sm:text-5xl md:text-6xl">
          Evenings, framed in light.
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-cream/80 sm:text-lg">
          A closer look at the atmosphere, plates, textures, and Marina
          views that shape Casa Luce after dark.
        </p>
      </div>
    </section>
  );
}
