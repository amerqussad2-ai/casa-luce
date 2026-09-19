import Image from "next/image";

export function CaseStudyImage({
  src,
  alt,
  width,
  height,
  priority,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
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
        priority={priority}
      />
    </div>
  );
}
