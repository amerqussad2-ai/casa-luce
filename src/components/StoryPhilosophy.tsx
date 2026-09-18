const PRINCIPLES = [
  {
    number: "01",
    title: "Beautiful ingredients",
  },
  {
    number: "02",
    title: "Handmade with care",
  },
  {
    number: "03",
    title: "Designed to share",
  },
];

export default function StoryPhilosophy() {
  return (
    <section className="bg-charcoal px-6 py-24 sm:py-32 lg:px-10">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.35em] text-terracotta-glow">
          The Kitchen
        </span>
        <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight text-cream sm:text-4xl md:text-5xl">
          Simplicity, beautifully done.
        </h2>
        <p className="mt-6 text-base leading-relaxed text-cream/70 sm:text-lg">
          Our kitchen begins with familiar Italian foundations &mdash;
          handmade pasta, Mediterranean seafood, seasonal produce, olive
          oil, citrus, herbs, and aged cheeses.
        </p>
        <p className="mt-4 text-base leading-relaxed text-cream/70 sm:text-lg">
          The goal is not to reinvent Italian cooking for the sake of it,
          but to make it feel alive in Dubai: refined, generous, and
          grounded in ingredients.
        </p>
      </div>

      <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 divide-y divide-cream/15 sm:mt-20 lg:grid-cols-3 lg:divide-x lg:divide-y-0">
        {PRINCIPLES.map((principle) => (
          <div
            key={principle.number}
            className="flex flex-col items-center py-10 text-center first:pt-0 last:pb-0 lg:px-10 lg:py-0 lg:first:pl-0 lg:last:pr-0"
          >
            <span className="font-serif text-2xl text-olive-glow sm:text-3xl">
              {principle.number}
            </span>
            <h3 className="mt-4 font-serif text-xl text-cream sm:text-2xl">
              {principle.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
