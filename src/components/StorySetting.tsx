import Image from "next/image";

export default function StorySetting() {
  return (
    <section className="relative overflow-hidden bg-charcoal px-6 py-28 sm:py-36 lg:px-10">
      <Image
        src="/images/gallery/gallery-5.png"
        alt="A table set for two on the Casa Luce terrace overlooking the Marina waterfront"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-charcoal/55" />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/30 to-charcoal/70"
      />

      <div className="relative mx-auto flex max-w-2xl flex-col items-center text-center">
        <span className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-terracotta">
          The Setting
        </span>
        <h2 className="font-serif text-3xl font-semibold leading-tight text-cream sm:text-4xl md:text-5xl">
          Italy, framed by Dubai.
        </h2>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-cream/85 sm:text-lg">
          Casa Luce lives between two worlds: the warmth and familiarity of
          Italian dining, and the energy, skyline, and waterfront life of
          Dubai Marina.
        </p>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-cream/85 sm:text-lg">
          This contrast is at the heart of the restaurant &mdash; timeless
          cooking in a distinctly modern setting.
        </p>
      </div>
    </section>
  );
}
