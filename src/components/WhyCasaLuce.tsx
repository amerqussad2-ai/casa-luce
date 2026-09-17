const PILLARS = [
  {
    number: "01",
    title: "Italian at Heart",
    description:
      "Rooted in timeless Italian cooking, with beautiful ingredients and generous flavours.",
  },
  {
    number: "02",
    title: "Made for Evenings",
    description:
      "Warm lighting, thoughtful service, and a relaxed rhythm made for long dinners.",
  },
  {
    number: "03",
    title: "Dubai Marina",
    description:
      "A waterfront setting surrounded by the energy, light, and skyline of the Marina.",
  },
];

export default function WhyCasaLuce() {
  return (
    <section className="bg-cream px-6 py-24 sm:py-32 lg:px-10">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.35em] text-terracotta">
          Why Casa Luce
        </span>
        <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight text-charcoal sm:text-4xl md:text-5xl">
          More than dinner.
        </h2>
        <p className="mt-6 text-base leading-relaxed text-charcoal/70 sm:text-lg">
          Casa Luce is designed around the details that turn a meal into an
          evening worth remembering.
        </p>
      </div>

      <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 divide-y divide-charcoal/10 sm:mt-20 lg:grid-cols-3 lg:divide-x lg:divide-y-0">
        {PILLARS.map((pillar) => (
          <div
            key={pillar.number}
            className="flex flex-col py-10 first:pt-0 last:pb-0 lg:px-10 lg:py-0 lg:first:pl-0 lg:last:pr-0"
          >
            <span className="font-serif text-2xl text-olive sm:text-3xl">
              {pillar.number}
            </span>
            <h3 className="mt-4 font-serif text-xl text-charcoal sm:text-2xl">
              {pillar.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-charcoal/70 sm:text-base">
              {pillar.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
