import Image from "next/image";

type Panel = {
  id: string;
  image: string;
  alt: string;
  objectPosition: string;
  span: string;
  aspect: string;
};

const PANELS: Panel[] = [
  {
    id: "interior",
    image: "/images/gallery/gallery-1.png",
    alt: "Casa Luce's terrace dining room at night, with candlelit tables and a view of the Dubai Marina skyline",
    objectPosition: "object-[50%_58%] lg:object-[58%_50%]",
    span: "col-span-2 row-span-1 lg:row-span-2",
    aspect: "aspect-[4/3] lg:aspect-square",
  },
  {
    id: "signage",
    image: "/images/casa-luce-our-story.png",
    alt: "The Casa Luce dining room, with the CASA LUCE wall signage and a view of the Dubai Marina skyline",
    objectPosition: "object-[70%_25%]",
    span: "col-span-2 row-span-1 lg:col-span-1 lg:row-span-2",
    aspect: "aspect-[16/9] lg:aspect-[1/2]",
  },
  {
    id: "table-details",
    image: "/images/gallery/gallery-3.png",
    alt: "A candlelit table setting at Casa Luce with the Dubai Marina skyline in the background",
    objectPosition: "object-center",
    span: "col-span-1 row-span-1",
    aspect: "aspect-square",
  },
  {
    id: "chef",
    image: "/images/gallery/gallery-4.png",
    alt: "A Casa Luce chef finishing a truffle pasta dish tableside",
    objectPosition: "object-center",
    span: "col-span-1 row-span-1",
    aspect: "aspect-square",
  },
  {
    id: "risotto",
    image: "/images/gallery/gallery-2.png",
    alt: "A seafood risotto with shrimp, scallops, and calamari at Casa Luce",
    objectPosition: "object-center",
    span: "col-span-1 row-span-1",
    aspect: "aspect-square",
  },
  {
    id: "waterfront",
    image: "/images/gallery/gallery-5.png",
    alt: "A table set for two on the Casa Luce terrace overlooking the Marina waterfront",
    objectPosition: "object-center",
    span: "col-span-1 row-span-1",
    aspect: "aspect-square",
  },
  {
    id: "burrata",
    image: "/images/burrata-heritage-tomatoes.png",
    alt: "Burrata with heritage tomatoes and basil, plated at a Casa Luce table with the Marina in the background",
    objectPosition: "object-[50%_35%]",
    span: "col-span-1 row-span-1",
    aspect: "aspect-square",
  },
  {
    id: "tagliolini",
    image: "/images/truffle-tagliolini.png",
    alt: "Handmade truffle tagliolini with shaved parmesan at Casa Luce",
    objectPosition: "object-[50%_40%]",
    span: "col-span-1 row-span-1",
    aspect: "aspect-square",
  },
  {
    id: "branzino",
    image: "/images/branzino-al-limone.png",
    alt: "Whole grilled branzino with charred lemon at Casa Luce, with the Dubai Marina skyline beyond",
    objectPosition: "object-[48%_42%]",
    span: "col-span-2 row-span-1 lg:col-span-4",
    aspect: "aspect-[16/9] lg:aspect-[21/9]",
  },
];

export default function GalleryGrid() {
  return (
    <section className="bg-charcoal px-6 py-24 sm:py-32 lg:px-10">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
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
