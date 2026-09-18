import Link from "next/link";

export default function ContactPrivateDining() {
  return (
    <section className="bg-charcoal px-6 py-24 sm:py-32 lg:px-10">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.35em] text-terracotta-glow">
          Private Dining
        </span>
        <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight text-cream sm:text-4xl md:text-5xl">
          For evenings worth making your own.
        </h2>
        <p className="mt-6 text-base leading-relaxed text-cream/70 sm:text-lg">
          Planning a celebration, private dinner, or special gathering?
          Tell us what you have in mind and our team will help shape the
          evening.
        </p>
        <Link
          href="#contact-form"
          className="-my-1.5 mt-8 inline-flex items-center gap-2 py-1.5 text-sm font-semibold uppercase tracking-widest text-olive-glow transition-colors hover:text-terracotta-glow"
        >
          Start a Conversation
          <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>
    </section>
  );
}
