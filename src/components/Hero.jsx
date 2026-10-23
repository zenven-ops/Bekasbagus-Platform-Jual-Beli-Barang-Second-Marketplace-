export default function Hero() {
  return (
    <section className="bg-secondary relative overflow-hidden min-h-[400px] flex items-center">
      <div className="max-w-[1400px] mx-auto w-full px-5 md:px-20 relative py-12 md:py-0">
        
        {/* Konten Teks Hero */}
        <div className="max-w-lg z-10 relative">
          <h2 className="font-logo text-3xl md:text-5xl text-primary mb-4 leading-tight">
            Temukan Barang<br className="hidden md:block" /> Berkualitas, Bisa COD!
          </h2>
          <p className="text-base md:text-lg text-graytxt mb-6 max-w-md">
            Jual beli barang second dengan aman. Ketemuan langsung, cek barang, baru bayar.
          </p>
          <a 
            href="#katalog" 
            className="inline-block text-primary font-semibold border-b-2 border-primary pb-1 hover:opacity-70 transition"
          >
            Lihat Katalog
          </a>
        </div>

        {/* Panah Kiri (Hanya muncul di Tablet/Desktop) */}
        <div className="hidden md:flex absolute top-1/2 left-0 md:left-5 -translate-y-1/2 w-10 h-10 bg-white rounded-full items-center justify-center shadow-md cursor-pointer hover:scale-110 transition z-20">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </div>

        {/* Panah Kanan (Hanya muncul di Tablet/Desktop) */}
        <div className="hidden md:flex absolute top-1/2 right-0 md:right-5 -translate-y-1/2 w-10 h-10 bg-white rounded-full items-center justify-center shadow-md cursor-pointer hover:scale-110 transition z-20">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </div>

        {/* Titik Indikator (Dots) */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          <span className="w-2 h-2 rounded-full bg-primary cursor-pointer"></span>
          <span className="w-2 h-2 rounded-full bg-black/20 cursor-pointer hover:bg-black/40 transition"></span>
          <span className="w-2 h-2 rounded-full bg-black/20 cursor-pointer hover:bg-black/40 transition"></span>
        </div>

      </div>
    </section>
  );
}