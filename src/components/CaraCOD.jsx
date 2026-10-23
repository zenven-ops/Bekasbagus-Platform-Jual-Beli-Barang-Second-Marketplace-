export default function CaraCOD({ setHalamanAktif }) {
  return (
    <div className="w-full">
      {/* 1. PAGE HEADER */}
      <section className="bg-secondary py-16 px-5 text-center">
        <h1 className="font-logo text-3xl md:text-4xl text-primary mb-4">Panduan COD (Cash on Delivery)</h1>
        <p className="text-graytxt max-w-2xl mx-auto text-sm md:text-base">
          Jual beli aman, ketemuan langsung, cek barang dulu, baru bayar. Ini adalah cara paling aman untuk transaksi barang bekas.
        </p>
      </section>

      {/* 2. LANGKAH-LANGKAH */}
      <section className="max-w-[1100px] mx-auto px-5 py-16">
        <h2 className="font-logo text-2xl text-center text-dark mb-10">Bagaimana Cara Kerjanya?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Langkah 1 */}
          <div className="bg-white border border-bdr rounded-xl p-6 text-center shadow-sm hover:-translate-y-1 transition duration-200">
            <div className="w-12 h-12 bg-secondary text-primary rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">1</div>
            <h3 className="font-bold text-dark mb-2 text-sm md:text-base">Chat & Sepakati Harga</h3>
            <p className="text-graytxt text-xs md:text-sm">Hubungi penjual melalui tombol Chat. Tanyakan kondisi barang, kelengkapan, dan negoisasi harga hingga deal.</p>
          </div>
          {/* Langkah 2 */}
          <div className="bg-white border border-bdr rounded-xl p-6 text-center shadow-sm hover:-translate-y-1 transition duration-200">
            <div className="w-12 h-12 bg-secondary text-primary rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">2</div>
            <h3 className="font-bold text-dark mb-2 text-sm md:text-base">Tentukan Lokasi & Waktu</h3>
            <p className="text-graytxt text-xs md:text-sm">Sepakati tempat meet-up yang aman dan ramai (mall, kafe, atau kantor polisi) serta waktu yang cocok untuk keduanya.</p>
          </div>
          {/* Langkah 3 */}
          <div className="bg-white border border-bdr rounded-xl p-6 text-center shadow-sm hover:-translate-y-1 transition duration-200">
            <div className="w-12 h-12 bg-secondary text-primary rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">3</div>
            <h3 className="font-bold text-dark mb-2 text-sm md:text-base">Cek Barang Saksama</h3>
            <p className="text-graytxt text-xs md:text-sm">Saat bertemu, periksa fisik barang, fungsinya, dan kelengkapannya. Jangan ragu untuk bertanya jika ada yang kurang jelas.</p>
          </div>
          {/* Langkah 4 */}
          <div className="bg-white border border-bdr rounded-xl p-6 text-center shadow-sm hover:-translate-y-1 transition duration-200">
            <div className="w-12 h-12 bg-secondary text-primary rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">4</div>
            <h3 className="font-bold text-dark mb-2 text-sm md:text-base">Bayar & Selesai</h3>
            <p className="text-graytxt text-xs md:text-sm">Jika barang sudah sesuai, bayar langsung ke penjual. Transaksi selesai dan barang menjadi milik Anda.</p>
          </div>
        </div>
      </section>

      {/* 3. TIPS KEAMANAN */}
      <section className="bg-lightbg py-16 border-y border-bdr">
        <div className="max-w-[800px] mx-auto px-5">
          <h2 className="font-logo text-2xl text-center text-dark mb-2">Tips Keamanan Saat COD</h2>
          <p className="text-center text-graytxt text-sm mb-8">Ikuti panduan ini agar pengalaman jual beli Anda tetap aman dan nyaman.</p>
          
          <div className="flex flex-col gap-4">
            {/* Tip 1 */}
            <div className="bg-white p-5 rounded-lg border-l-4 border-[#2E7D32] shadow-sm flex items-start gap-4">
              <svg className="w-6 h-6 text-[#2E7D32] shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
              <p className="text-sm text-dark"><strong className="text-primary">Bertemu di tempat umum.</strong> Pilih lokasi yang ramai dan memiliki CCTV, seperti mall, kafe, atau lobi kantor. Hindari bertemu di tempat sepi.</p>
            </div>
            {/* Tip 2 */}
            <div className="bg-white p-5 rounded-lg border-l-4 border-[#2E7D32] shadow-sm flex items-start gap-4">
              <svg className="w-6 h-6 text-[#2E7D32] shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
              <p className="text-sm text-dark"><strong className="text-primary">Ajak teman atau keluarga.</strong> Jika memungkinkan, datanglah bersama orang lain. Ini akan membuat Anda merasa lebih aman dan waspada.</p>
            </div>
            {/* Tip 3 */}
            <div className="bg-white p-5 rounded-lg border-l-4 border-[#2E7D32] shadow-sm flex items-start gap-4">
              <svg className="w-6 h-6 text-[#2E7D32] shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path></svg>
              <p className="text-sm text-dark"><strong className="text-primary">Bayar setelah cek barang.</strong> Jangan pernah mentransfer uang atau membayar sebelum Anda melihat dan memeriksa kondisi barang secara langsung.</p>
            </div>
            {/* Tip 4 */}
            <div className="bg-white p-5 rounded-lg border-l-4 border-[#2E7D32] shadow-sm flex items-start gap-4">
              <svg className="w-6 h-6 text-[#2E7D32] shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              <p className="text-sm text-dark"><strong className="text-primary">Waspada harga terlalu murah.</strong> Jika harga yang ditawarkan jauh di bawah pasaran, patut dicurigai. Pastikan barang bukan hasil curian atau barang rusak.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CTA SECTION */}
      <section className="text-center py-16 px-5">
        <h2 className="font-logo text-2xl md:text-3xl text-dark mb-3">Siap Mulai Jual Beli?</h2>
        <p className="text-graytxt text-sm mb-6 max-w-md mx-auto">Jelajahi katalog barang bekas berkualitas atau mulai jual barangmu sekarang juga.</p>
        {/* Tombol untuk kembali ke beranda */}
        <button 
          onClick={() => setHalamanAktif('beranda')} 
          className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition"
        >
          Lihat Katalog Barang
        </button>
      </section>
    </div>
  );
}