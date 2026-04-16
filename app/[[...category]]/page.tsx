import GalleryClient from "../components/galleryClient";

export default async function Home({
  params,
}: {
  params?: { category?: string[] };
}) {
  const query = (await params)?.category || "nature";
  const res = await fetch(
    `https://api.pexels.com/v1/search?query=${encodeURIComponent(
      query,
    )}&per_page=3`,
  );
  const images = await res.json();
  return (
    <GalleryClient photos={images.photos} />
  );
}
