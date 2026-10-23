import ProductCard from './ProductCard';

export default function ProductList({ products }) {
  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 bg-lightbg rounded-xl border border-dashed border-bdr">
        <svg className="w-16 h-16 text-graytxt mb-4 opacity-50" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"></path>
        </svg>
        <h3 className="text-xl font-logo text-dark mb-1">Belum ada data Produk</h3>
        <p className="text-sm text-graytxt">Silakan tambahkan barang melalui menu "Jual Barang".</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}