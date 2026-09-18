import Image from "next/image";

export default function StoryAtmosphere() {
  return (
    <section className="bg-cream px-6 py-24 sm:py-32 lg:px-10">
      <div className="mx-auto max-w-3xl text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.35em] text-terracotta-deep">
          The Evening
        </span>
        <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight text-charcoal sm:text-4xl md:text-5xl">
          Made for the golden hour and beyond.
        </h2>
        <p className="mt-6 text-base leading-relaxed text-charcoal/70 sm:text-lg">
          As daylight fades over the Marina, Casa Luce shifts into its
          evening rhythm &mdash; candlelight, warm textures, waterfront
          reflections, and a dining room designed for long dinners.
        </p>
      </div>

      <div className="relative mx-auto mt-16 aspect-[16/9] w-full max-w-6xl overflow-hidden rounded-sm ring-1 ring-charcoal/10 sm:mt-20">
        <Image
          src="/images/gallery/gallery-1.png"
          alt="Casa Luce's terrace dining room at night, with candlelit tables and a view of the Dubai Marina skyline"
          fill
          sizes="(min-width: 1280px) 1152px, 100vw"
          className="object-cover object-[50%_58%] lg:object-[58%_50%]"
        />
      </div>
    </section>
  );
}
