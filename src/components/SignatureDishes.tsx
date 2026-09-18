import Image from "next/image";

const DISHES = [
  {
    name: "Truffle Tagliolini",
    description: "Handmade pasta, black truffle, aged parmesan.",
    image: "/images/truffle-tagliolini.png",
    imagePosition: "50% 52%",
  },
  {
    name: "Burrata & Heritage Tomatoes",
    description: "Creamy burrata, seasonal tomatoes, basil oil.",
    image: "/images/burrata-heritage-tomatoes.png",
    imagePosition: "50% 55%",
  },
  {
    name: "Branzino al Limone",
    description: "Mediterranean sea bass, lemon, herbs, olive oil.",
    image: "/images/branzino-al-limone.png",
    imagePosition: "48% 55%",
  },
];

export default function SignatureDishes() {
  return (
    <section
      id="signature-dishes"
      className="scroll-mt-24 bg-charcoal px-6 py-24 sm:py-32 lg:px-10"
    >
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.35em] text-terracotta-glow">
          Signature Dishes
        </span>
        <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight text-cream sm:text-4xl md:text-5xl">
          Made to be remembered.
        </h2>
        <p className="mt-6 text-base leading-relaxed text-cream/70 sm:text-lg">
          A few of the dishes that define Casa Luce &mdash; rooted in Italian
          tradition, finished with a modern Dubai point of view.
        </p>
      </div>

      <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-14 sm:mt-20 lg:grid-cols-3 lg:gap-12">
        {DISHES.map((dish) => (
          <div key={dish.name} className="flex flex-col">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm ring-1 ring-cream/15">
              <Image
                src={dish.image}
                alt={dish.name}
                fill
                sizes="(min-width: 1024px) 33vw, 100vw"
                style={{ objectPosition: dish.imagePosition }}
                className="object-cover"
              />
            </div>
            <div className="mt-6 h-px w-10 bg-terracotta/70" />
            <h3 className="mt-6 font-serif text-xl text-cream sm:text-2xl">
              {dish.name}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-cream/70 sm:text-base">
              {dish.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
