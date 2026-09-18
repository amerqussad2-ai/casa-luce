export default function MenuHero() {
  return (
    <section className="relative overflow-hidden bg-charcoal px-6 py-28 sm:py-36 lg:px-10">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(189,91,58,0.16),transparent_60%)]"
      />
      <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
        <span className="mb-6 text-xs font-semibold uppercase tracking-[0.35em] text-terracotta-glow">
          Our Menu
        </span>
        <h1 className="font-serif text-4xl font-semibold leading-tight text-cream sm:text-5xl md:text-6xl">
          Italian classics, reimagined.
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-cream/80 sm:text-lg">
          From handmade pasta to Mediterranean seafood, our menu celebrates
          generous Italian cooking through the lens of modern Dubai.
        </p>
      </div>
    </section>
  );
}
