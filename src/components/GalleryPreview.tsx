import Image from "next/image";
import Link from "next/link";

const PANELS = [
  {
    id: "anchor",
    image: "/images/gallery/gallery-1.png",
    alt: "Casa Luce's terrace dining room at night, with candlelit tables and a view of the Dubai Marina skyline",
    objectPosition: "object-[50%_58%] lg:object-[58%_50%]",
    span: "col-span-2 row-span-1 lg:row-span-2",
    aspect: "aspect-[16/9] lg:aspect-square",
  },
  {
    id: "panel-2",
    image: "/images/gallery/gallery-2.png",
    alt: "A seafood risotto with shrimp, scallops, and calamari at Casa Luce",
    objectPosition: "object-center",
    span: "col-span-1 row-span-1",
    aspect: "aspect-square",
  },
  {
    id: "panel-3",
    image: "/images/gallery/gallery-3.png",
    alt: "A candlelit table setting at Casa Luce with the Dubai Marina skyline in the background",
    objectPosition: "object-center",
    span: "col-span-1 row-span-1",
    aspect: "aspect-square",
  },
  {
    id: "panel-4",
    image: "/images/gallery/gallery-4.png",
    alt: "A Casa Luce chef finishing a truffle pasta dish tableside",
    objectPosition: "object-center",
    span: "col-span-1 row-span-1",
    aspect: "aspect-square",
  },
  {
    id: "panel-5",
    image: "/images/gallery/gallery-5.png",
    alt: "A table set for two on the Casa Luce terrace overlooking the Marina waterfront",
    objectPosition: "object-center",
    span: "col-span-1 row-span-1",
    aspect: "aspect-square",
  },
];

export default function GalleryPreview() {
  return (
    <section className="bg-charcoal px-6 py-24 sm:py-32 lg:px-10">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.35em] text-terracotta">
          Gallery
        </span>
        <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight text-cream sm:text-4xl md:text-5xl">
          Evenings at Casa Luce.
        </h2>
        <p className="mt-6 text-base leading-relaxed text-cream/70 sm:text-lg">
          A glimpse of the atmosphere, plates, light, and Marina views that
          shape every evening.
        </p>
        <Link
          href="/gallery"
          className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-olive transition-colors hover:text-terracotta"
        >
          View the Gallery
          <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>

      <div className="mx-auto mt-16 grid max-w-7xl grid-cols-2 gap-3 sm:mt-20 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
        {PANELS.map((panel) => (
          <div
            key={panel.id}
            className={`relative overflow-hidden rounded-sm ring-1 ring-cream/15 ${panel.span} ${panel.aspect}`}
          >
            <Image
              src={panel.image}
              alt={panel.alt}
              fill
              sizes="(min-width: 1024px) 50vw, (min-width: 640px) 66vw, 100vw"
              className={`object-cover ${panel.objectPosition}`}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
