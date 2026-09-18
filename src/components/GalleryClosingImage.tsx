import Image from "next/image";

export default function GalleryClosingImage() {
  return (
    <section className="relative aspect-[16/9] w-full overflow-hidden bg-charcoal sm:aspect-[21/9]">
      <Image
        src="/images/casa-luce-hero.png"
        alt="Casa Luce's terrace at night, with dining tables, olive trees, and the Dubai Marina skyline and yachts beyond"
        fill
        sizes="100vw"
        className="object-cover object-[62%_45%]"
      />
    </section>
  );
}
