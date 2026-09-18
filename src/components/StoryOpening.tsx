import Image from "next/image";

export default function StoryOpening() {
  return (
    <section className="bg-cream px-6 py-24 sm:py-32 lg:px-10">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="flex flex-col lg:order-2">
          <div className="mb-6 h-px w-16 bg-terracotta" />
          <h2 className="font-serif text-3xl font-semibold leading-tight text-charcoal sm:text-4xl md:text-5xl">
            A table worth lingering at.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-charcoal/70 sm:text-lg">
            Casa Luce is built around the kind of evenings that unfold
            slowly &mdash; plates shared across the table, conversations
            that stretch past dessert, and a dining room shaped as much by
            atmosphere as by food.
          </p>
          <p className="mt-4 text-base leading-relaxed text-charcoal/70 sm:text-lg">
            Our approach is rooted in the rituals of Italian hospitality:
            welcoming, generous, and unhurried.
          </p>
        </div>

        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm ring-1 ring-charcoal/10 lg:order-1">
          <Image
            src="/images/casa-luce-our-story.png"
            alt="The Casa Luce dining room, with a table set for two beside the CASA LUCE wall signage and a view of the Dubai Marina skyline"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover object-[70%_30%]"
          />
        </div>
      </div>
    </section>
  );
}
