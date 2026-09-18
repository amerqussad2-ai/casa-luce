export default function ReservationHero() {
  return (
    <section className="relative overflow-hidden bg-charcoal px-6 py-24 sm:py-32 lg:px-10">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_0%,rgba(166,80,51,0.14),transparent_60%)]"
      />
      <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
        <span className="mb-6 text-xs font-semibold uppercase tracking-[0.35em] text-terracotta">
          Reservations
        </span>
        <h1 className="font-serif text-4xl font-semibold leading-tight text-cream sm:text-5xl md:text-6xl">
          Your evening starts here.
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-cream/80 sm:text-lg">
          Reserve your table at Casa Luce and join us for modern Italian
          dining, warm hospitality, and Marina views.
        </p>
      </div>
    </section>
  );
}
