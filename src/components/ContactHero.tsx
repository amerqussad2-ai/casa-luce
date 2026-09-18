export default function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-charcoal px-6 py-24 sm:py-32 lg:px-10">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,rgba(141,146,121,0.16),transparent_60%)]"
      />
      <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
        <span className="mb-6 text-xs font-semibold uppercase tracking-[0.35em] text-terracotta">
          Contact
        </span>
        <h1 className="font-serif text-4xl font-semibold leading-tight text-cream sm:text-5xl md:text-6xl">
          We&rsquo;d love to hear from you.
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-cream/80 sm:text-lg">
          Whether you&rsquo;re planning an evening, asking about a special
          occasion, or simply need a little help before your visit, our
          team is here.
        </p>
      </div>
    </section>
  );
}
