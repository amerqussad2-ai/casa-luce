import Image from "next/image";

export function CaseStudyImage({
  src,
  alt,
  width,
  height,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
}) {
  return (
    <div className="overflow-hidden rounded-lg border border-border">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes="(min-width: 1024px) 896px, 100vw"
        className="h-auto w-full"
      />
    </div>
  );
}
