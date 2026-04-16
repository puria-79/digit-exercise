"use client";

import Image from "next/image";

export default function ImageDisplay({
  index,
  selected,
  onSelect,
  src,
  alt,
  width,
  height,
}: {
  index: number;
  selected: number;
  onSelect: (index: number) => void;
  src: string;
  alt: string;
  width: number;
  height: number;
}) {
  const isSelected = index === selected;

  return (
    <button
      type="button"
      onClick={() => onSelect(index)}
      className={[
        "rounded-md overflow-hidden",
        isSelected ? "ring-2 ring-red-500" : "ring-1 ring-transparent",
      ].join(" ")}
      aria-pressed={isSelected}
    >
      <Image
        className="w-[25vw] h-60 object-cover object-center"
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading="eager"
      />
    </button>
  );
}
