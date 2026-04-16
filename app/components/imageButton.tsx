"use client";

export default function ImageButton({
  index,
  selected,
  onSelect,
}: {
  index: number;
  selected: number;
  onSelect: (index: number) => void;
}) {
  const isSelected = index === selected;

  return (
    <div className="w-full h-fit py-1 flex justify-center">
      <button
        type="button"
        onClick={() => onSelect(index)}
        className={[
          "cursor-pointer w-3/4 h-full px-3 py-2 text-left",
          isSelected ? "bg-red-500 text-white" : "bg-white text-black",
        ].join(" ")}
      >
        image {index + 1}
      </button>
    </div>
  );
}
