"use client";

import { useState } from "react";
import ImageDisplay from "./imageDisplay";
import ImageShowcase from "./imageShowcase";
import Sidebar from "./sidebar";

export default function GalleryClient({ photos }) {
  const [selected, setSelected] = useState(0);
  return (
    <div className="flex h-screen">
      <Sidebar selected={selected} onSelect={setSelected} />

      <div className="flex flex-col h-full w-full justify-center items-center gap-8">
        <ImageShowcase
          src={photos[selected].src.original}
          alt={photos[selected].alt}
          width={photos[selected].width}
          height={photos[selected].height}
        />

        <div className="flex gap-4">
          {photos.map((image, i) => (
            <ImageDisplay
              key={i}
              index={i}
              selected={selected}
              onSelect={setSelected}
              src={image.src.original}
              alt={image.alt}
              width={image.width}
              height={image.height}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

