"use client"
import ImageButton from "./imageButton";

export default function Sidebar({
  selected,
  onSelect,
}: {
  selected: number;
  onSelect: (index: number) => void;
}) {
  return (
    <aside className="bg-amber-300 w-1/4 h-screen flex-col justify-center hidden lg:flex">
      {Array.from({ length: 3 }).map((_, i) => (
        <ImageButton key={i} index={i} selected={selected} onSelect={onSelect} />
      ))}
    </aside>
  );
}