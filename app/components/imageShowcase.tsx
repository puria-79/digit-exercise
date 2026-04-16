import Image from "next/image";

export default function ImageShowcase({
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
    <div className="h-fit w-auto">
      <Image
      className="max-h-[50vh] w-auto rounded-md"
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading="eager"
      />
    </div>
  );
}