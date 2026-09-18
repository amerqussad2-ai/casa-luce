export default function ReservationContactNote() {
  return (
    <section className="bg-cream px-6 py-16 sm:py-20 lg:px-10">
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-3 text-center">
        <p className="text-sm text-charcoal/70">
          Need help with your reservation?
        </p>
        <div className="flex flex-col items-center gap-1 text-sm sm:flex-row sm:gap-4">
          <a
            href="tel:+97145550188"
            className="font-semibold text-charcoal transition-colors hover:text-terracotta-deep"
          >
            +971 4 555 0188
          </a>
          <span className="hidden text-charcoal/30 sm:inline" aria-hidden="true">
            &middot;
          </span>
          <a
            href="mailto:hello@casaluce.ae"
            className="font-semibold text-charcoal transition-colors hover:text-terracotta-deep"
          >
            hello@casaluce.ae
          </a>
        </div>
      </div>
    </section>
  );
}
