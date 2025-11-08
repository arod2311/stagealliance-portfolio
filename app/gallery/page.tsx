export default function GalleryPage() {
  return (
    <section className="grid gap-4">
      <h1 className="text-2xl font-semibold">Gallery</h1>
      <p className="text-zinc-600">
        Public placeholder images would go here. (No client assets included in the portfolio.)
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div className="aspect-video rounded bg-zinc-100" />
        <div className="aspect-video rounded bg-zinc-100" />
        <div className="aspect-video rounded bg-zinc-100" />
      </div>
    </section>
  );
}
