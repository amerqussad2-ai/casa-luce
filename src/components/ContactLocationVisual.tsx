export default function ContactLocationVisual() {
  return (
    <section className="bg-cream px-6 py-24 sm:py-32 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="relative aspect-[21/9] w-full overflow-hidden rounded-sm bg-charcoal ring-1 ring-charcoal/10">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-br from-olive/20 via-charcoal to-terracotta/10"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(to_right,rgba(248,244,236,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(248,244,236,0.06)_1px,transparent_1px)] bg-[size:44px_44px]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(248,244,236,0.08),_transparent_65%)]"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 text-center">
            <span
              aria-hidden="true"
              className="h-2.5 w-2.5 rounded-full bg-terracotta"
            />
            <span className="font-serif text-lg tracking-[0.2em] text-cream/70 sm:text-xl">
              Dubai Marina
            </span>
            <span className="text-sm text-cream/50">
              Waterfront dining in the heart of the Marina.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
