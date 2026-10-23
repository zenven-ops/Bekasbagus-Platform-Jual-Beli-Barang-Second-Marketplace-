export default function Header({ setHalamanAktif, halamanAktif }) {
  return (
    <header className="grid grid-cols-1 md:grid-cols-3 items-center gap-4 px-5 md:px-10 py-5 border-b border-bdr bg-white sticky top-0 z-50">
      <nav className="flex justify-center md:justify-start flex-wrap gap-5 md:gap-8 text-[0.95rem] font-medium order-2 md:order-1">
        <button 
          onClick={() => setHalamanAktif('beranda')} 
          className={`${halamanAktif === 'beranda' ? 'text-primary font-bold' : 'hover:text-primary'} transition`}
        >
          Jelajahi
        </button>
        <button 
          onClick={() => setHalamanAktif('jual')} 
          className={`${halamanAktif === 'jual' ? 'text-primary font-bold' : 'hover:text-primary'} transition`}
        >
          Jual Barang
        </button>
        <button 
          onClick={() => setHalamanAktif('cara-cod')} 
          className={`${halamanAktif === 'cara-cod' ? 'text-primary font-bold' : 'hover:text-primary'} transition`}
        >
          Cara COD
        </button>
      </nav>
      <div className="text-center order-1 md:order-2">
        <h1 className="font-logo text-3xl text-primary tracking-tight">Bekasbagus</h1>
      </div>
      <div className="flex justify-center md:justify-end items-center gap-5 order-3">
        <svg className="w-6 h-6 cursor-pointer hover:stroke-primary" fill="none" stroke="#333" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
      </div>
    </header>
  );
}