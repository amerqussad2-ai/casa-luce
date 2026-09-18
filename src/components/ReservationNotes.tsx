const NOTES = [
  {
    number: "01",
    title: "Arrival",
    description:
      "We recommend arriving a few minutes before your reservation so your evening can begin at an easy pace.",
  },
  {
    number: "02",
    title: "Large Parties",
    description:
      "For groups of 7 or more, our team will follow up to confirm the best seating arrangement.",
  },
  {
    number: "03",
    title: "Special Requests",
    description:
      "Let us know about celebrations, dietary preferences, or anything that will help us prepare for your evening.",
  },
];

export default function ReservationNotes() {
  return (
    <section className="bg-charcoal px-6 py-24 sm:py-32 lg:px-10">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.35em] text-terracotta-glow">
          Good to Know
        </span>
        <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight text-cream sm:text-4xl md:text-5xl">
          A few details before your visit.
        </h2>
      </div>

      <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 divide-y divide-cream/15 sm:mt-20 lg:grid-cols-3 lg:divide-x lg:divide-y-0">
        {NOTES.map((note) => (
          <div
            key={note.number}
            className="flex flex-col py-10 first:pt-0 last:pb-0 lg:px-10 lg:py-0 lg:first:pl-0 lg:last:pr-0"
          >
            <span className="font-serif text-2xl text-olive-glow sm:text-3xl">
              {note.number}
            </span>
            <h3 className="mt-4 font-serif text-xl text-cream sm:text-2xl">
              {note.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-cream/70 sm:text-base">
              {note.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
