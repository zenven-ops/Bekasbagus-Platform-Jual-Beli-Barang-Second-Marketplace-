import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Categories from './components/Categories';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';
import CaraCOD from './components/CaraCOD'; // Import komponen baru

function App() {
  const [halamanAktif, setHalamanAktif] = useState('beranda');

  const [products, setProducts] = useState([
    { id: 1, name: "Lensa Kamera Canon 50mm", price: 1500000, location: "Jakarta Selatan", image: "https://megakamera.com/wp-content/uploads/2021/05/Canon-EF-50mm-f18-STM-Lens-1.jpg" },
    { id: 2, name: "Cangkir Keramik Estetik", price: 45000, location: "Bandung", image: "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
    { id: 3, name: "Kursi Kerja Minimalis", price: 350000, location: "Surabaya", image: "https://pirahome.com/assets/upload/product/medium/ab4a2a1b8f640f2ae53ff345f5d880113.jpg.webp" },
    { id: 4, name: "Mesin Tik Antik", price: 850000, location: "Yogyakarta", image: "https://kotakpensil.com/wp-content/uploads/elementor/thumbs/pengertian-mesin-tik-rlsf8fqz58oh2xmera4tw7vwfv530ukgtrhb5e0yqa.jpg" }
  ]);

  const handleAddProduct = (newProduct) => {
    setProducts([newProduct, ...products]);
    setHalamanAktif('beranda');
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header setHalamanAktif={setHalamanAktif} halamanAktif={halamanAktif} />
      
      <main className="flex-1">
        {/* Beranda */}
        {halamanAktif === 'beranda' && (
          <>
            <Hero />
            <div className="max-w-[1400px] mx-auto w-full px-5 md:px-10 py-12">
              <Categories />
              <div className="flex justify-between items-center mb-6 mt-4">
                <h2 className="font-logo text-2xl text-dark tracking-wide">KATALOG BARANG</h2>
              </div>
              <ProductList products={products} />
            </div>
          </>
        )}

        {/* Halaman Jual Barang */}
        {halamanAktif === 'jual' && (
          <div className="max-w-3xl mx-auto px-5 py-12">
            <div className="text-center mb-10">
              <h1 className="font-logo text-3xl md:text-4xl text-primary mb-2">Jual Barang Bekasmu</h1>
              <p className="text-graytxt">Isi formulir di bawah ini untuk memulai. Gratis, dan bisa COD!</p>
            </div>
            <div className="bg-white border border-bdr rounded-xl p-8 shadow-sm">
              <ProductForm onAddProduct={handleAddProduct} />
            </div>
          </div>
        )}

        {/* Halaman Cara COD (BARU) */}
        {halamanAktif === 'cara-cod' && (
          <CaraCOD setHalamanAktif={setHalamanAktif} />
        )}
      </main>

      <footer className="text-center p-10 border-t border-bdr text-graytxt text-sm mt-auto">
        <p>&copy; 2026 Bekasbagus. Jual beli barang second lebih mudah dan aman dengan COD.</p>
      </footer>
    </div>
  );
}

export default App;