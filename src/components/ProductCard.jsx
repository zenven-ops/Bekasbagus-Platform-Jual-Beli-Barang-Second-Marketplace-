export default function ProductCard({ product }) {
  return (
    <article className="bg-white border border-bdr rounded-lg overflow-hidden transition hover:-translate-y-1 hover:shadow-xl">
      <div className="relative bg-lightbg h-[250px] overflow-hidden">
        <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
        <div className="absolute top-3 right-3 bg-white w-8 h-8 rounded-full flex items-center justify-center shadow-sm cursor-pointer hover:scale-110 transition">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1A4B8C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-base font-medium text-dark truncate mb-1">{product.name}</h3>
        <p className="text-lg font-bold text-primary mb-3">Rp {product.price.toLocaleString('id-ID')}</p>
        <div className="flex justify-between items-center text-xs text-graytxt">
          <span className="bg-secondary text-primary px-2 py-1 rounded font-semibold">Bisa COD</span>
          <span>{product.location}</span>
        </div>
      </div>
    </article>
  );
}