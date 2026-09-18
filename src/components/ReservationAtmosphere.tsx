import Image from "next/image";

export default function ReservationAtmosphere() {
  return (
    <section className="relative overflow-hidden bg-charcoal px-6 py-28 sm:py-36 lg:px-10">
      <Image
        src="/images/gallery/gallery-3.png"
        alt="A candlelit table setting at Casa Luce with the Dubai Marina skyline in the background"
        fill
        sizes="100vw"
        className="object-cover object-[45%_50%]"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-charcoal/55" />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/30 to-charcoal/70"
      />

      <div className="relative mx-auto flex max-w-2xl flex-col items-center text-center">
        <span className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-terracotta">
          Casa Luce &middot; Dubai Marina
        </span>
        <h2 className="font-serif text-3xl font-semibold leading-tight text-cream sm:text-4xl md:text-5xl">
          Dinner, lit by the Marina.
        </h2>
      </div>
    </section>
  );
}
