export default function Categories() {
  return (
    <div className="flex md:justify-center gap-3 mb-10 overflow-x-auto pb-2 md:pb-0 md:flex-wrap">
      <button className="shrink-0 px-5 py-2 rounded-full border border-primary bg-primary text-white text-sm font-medium">Semua</button>
      <button className="shrink-0 px-5 py-2 rounded-full border border-bdr text-graytxt text-sm font-medium bg-white hover:border-primary hover:text-primary transition">Elektronik</button>
      <button className="shrink-0 px-5 py-2 rounded-full border border-bdr text-graytxt text-sm font-medium bg-white hover:border-primary hover:text-primary transition">Fashion</button>
      <button className="shrink-0 px-5 py-2 rounded-full border border-bdr text-graytxt text-sm font-medium bg-white hover:border-primary hover:text-primary transition">Furnitur</button>
      <button className="shrink-0 px-5 py-2 rounded-full border border-bdr text-graytxt text-sm font-medium bg-white hover:border-primary hover:text-primary transition">Hobi & Koleksi</button>
    </div>
  );
}