import ReservationForm from "@/components/ReservationForm";

const TIME_OPTIONS = [
  "6:00 PM",
  "6:30 PM",
  "7:00 PM",
  "7:30 PM",
  "8:00 PM",
  "8:30 PM",
  "9:00 PM",
  "9:30 PM",
  "10:00 PM",
  "10:30 PM",
];

export default function ReservationMain() {
  return (
    <section className="bg-cream px-6 py-24 sm:py-32 lg:px-10">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-20">
        <div className="flex flex-col">
          <h2 className="font-serif text-3xl font-semibold leading-tight text-charcoal sm:text-4xl md:text-5xl">
            Reserve your table.
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-charcoal/70 sm:text-lg">
            Choose your preferred date, time, and party size. Our team will
            confirm your reservation shortly.
          </p>

          <div className="mt-10 max-w-md space-y-3 border-t border-charcoal/10 pt-8">
            <div className="flex items-baseline justify-between gap-4 text-sm">
              <span className="uppercase tracking-widest text-charcoal/70">
                Dinner
              </span>
              <span className="text-charcoal">6:00 PM &ndash; 11:00 PM</span>
            </div>
            <div className="flex items-baseline justify-between gap-4 text-sm">
              <span className="uppercase tracking-widest text-charcoal/70">
                Location
              </span>
              <span className="text-charcoal">
                Dubai Marina, Dubai
                <br />
                United Arab Emirates
              </span>
            </div>
          </div>

          <p className="mt-8 max-w-md text-sm leading-relaxed text-charcoal/70">
            Reservations are subject to availability. Our team will confirm
            your booking shortly.
          </p>
        </div>

        <div>
          <ReservationForm timeOptions={TIME_OPTIONS} includeSpecialRequests />
        </div>
      </div>
    </section>
  );
}
