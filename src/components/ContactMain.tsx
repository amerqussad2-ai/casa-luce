import ContactForm from "@/components/ContactForm";

export default function ContactMain() {
  return (
    <section
      id="contact-form"
      className="scroll-mt-24 bg-cream px-6 py-24 sm:py-32 lg:px-10"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-20">
        <div className="flex flex-col">
          <p className="max-w-md text-base leading-relaxed text-charcoal/70 sm:text-lg">
            For reservations, private events, or anything else you&rsquo;d
            like to know before your visit &mdash; we&rsquo;re happy to
            help.
          </p>

          <address className="mt-10 max-w-md space-y-3 border-t border-charcoal/10 pt-8 text-sm not-italic">
            <div className="flex items-baseline justify-between gap-4">
              <span className="uppercase tracking-widest text-charcoal/70">
                Location
              </span>
              <span className="text-right text-charcoal">
                Dubai Marina, Dubai
                <br />
                United Arab Emirates
              </span>
            </div>
            <div className="flex items-baseline justify-between gap-4">
              <span className="uppercase tracking-widest text-charcoal/70">
                Phone
              </span>
              <a
                href="tel:+97145550188"
                className="text-charcoal transition-colors hover:text-terracotta-deep"
              >
                +971 4 555 0188
              </a>
            </div>
            <div className="flex items-baseline justify-between gap-4">
              <span className="uppercase tracking-widest text-charcoal/70">
                Email
              </span>
              <a
                href="mailto:hello@casaluce.ae"
                className="text-charcoal transition-colors hover:text-terracotta-deep"
              >
                hello@casaluce.ae
              </a>
            </div>
            <div className="flex items-baseline justify-between gap-4">
              <span className="uppercase tracking-widest text-charcoal/70">
                Hours
              </span>
              <span className="text-right text-charcoal">
                Monday &ndash; Sunday
                <br />
                6:00 PM &ndash; 11:00 PM
              </span>
            </div>
          </address>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Dubai+Marina%2C+Dubai%2C+United+Arab+Emirates"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-block w-fit rounded-full bg-terracotta-deep px-8 py-3.5 text-center text-sm font-semibold uppercase tracking-wider text-cream transition-colors hover:bg-terracotta-deep/90"
          >
            Get Directions
          </a>
        </div>

        <div>
          <h2 className="font-serif text-2xl font-semibold leading-tight text-charcoal sm:text-3xl">
            Send us a note.
          </h2>
          <div className="mt-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
