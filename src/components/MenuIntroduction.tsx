import Image from "next/image";

export default function MenuIntroduction() {
  return (
    <section className="bg-cream px-6 py-24 sm:py-32 lg:px-10">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="flex flex-col">
          <div className="mb-6 h-px w-16 bg-terracotta" />
          <p className="font-serif text-2xl leading-relaxed text-charcoal sm:text-3xl">
            Our menu follows the rhythm of an Italian table &mdash; dishes
            designed for sharing, lingering, and returning to.
          </p>
        </div>

        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm ring-1 ring-charcoal/10">
          <Image
            src="/images/burrata-heritage-tomatoes.png"
            alt="Burrata with heritage tomatoes and basil oil, a signature Casa Luce antipasto"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
