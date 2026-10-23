import { useState } from 'react';

export default function ProductForm({ onAddProduct }) {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    location: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.price) return;

    onAddProduct({
      id: Date.now(),
      name: formData.name,
      price: parseInt(formData.price),
      location: formData.location,
      image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", // Placeholder jika tidak upload
    });
    
    // Reset form
    setFormData({ name: '', price: '', location: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Kotak Upload Palsu (Visual only untuk memenuhi kemiripan desain) */}
      <div className="mb-6">
        <label className="block font-medium text-sm mb-2">Foto Barang</label>
        <div className="border-2 border-dashed border-bdr bg-lightbg rounded-lg p-10 text-center cursor-pointer hover:border-primary transition">
          <svg className="w-10 h-10 mx-auto text-graytxt mb-2" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
            <circle cx="8.5" cy="8.5" r="1.5"></circle>
            <polyline points="21 15 16 10 5 21"></polyline>
          </svg>
          <p className="text-sm text-graytxt">Klik untuk <span className="text-primary font-semibold">mengunggah foto</span> barang</p>
          <p className="text-xs text-gray-400 mt-1">Format: JPG, PNG (Maks. 2MB)</p>
        </div>
      </div>

      {/* Grid Input */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block font-medium text-sm mb-2">Nama Barang</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Contoh: Lensa Canon 50mm" className="w-full p-3 border border-bdr rounded-lg focus:outline-none focus:border-primary" required />
        </div>
        <div>
          <label className="block font-medium text-sm mb-2">Kategori</label>
          <select className="w-full p-3 border border-bdr rounded-lg bg-white focus:outline-none focus:border-primary">
            <option>Elektronik</option>
            <option>Fashion</option>
            <option>Furnitur</option>
          </select>
        </div>
        <div>
          <label className="block font-medium text-sm mb-2">Harga (Rp)</label>
          <input type="number" name="price" value={formData.price} onChange={handleChange} placeholder="Contoh: 1500000" className="w-full p-3 border border-bdr rounded-lg focus:outline-none focus:border-primary" required />
        </div>
        <div>
          <label className="block font-medium text-sm mb-2">Kondisi Barang</label>
          <select className="w-full p-3 border border-bdr rounded-lg bg-white focus:outline-none focus:border-primary">
            <option>Mulus (Like New)</option>
            <option>Minus</option>
            <option>Rusak</option>
          </select>
        </div>
      </div>

      <div className="mb-4">
        <label className="block font-medium text-sm mb-2">Lokasi COD (Meet-up)</label>
        <input type="text" name="location" value={formData.location} onChange={handleChange} placeholder="Contoh: Jakarta Selatan, Kebayoran Baru" className="w-full p-3 border border-bdr rounded-lg focus:outline-none focus:border-primary" required />
      </div>

      {/* Checkbox COD */}
      <div className="bg-secondary p-4 rounded-lg flex items-center gap-3 mb-6">
        <input type="checkbox" defaultChecked className="w-5 h-5 accent-primary cursor-pointer" />
        <label className="text-primary font-medium text-sm cursor-pointer">Aktifkan COD (Pembeli bisa ketemuan langsung)</label>
      </div>

      <button type="submit" className="w-full bg-primary text-white py-3 rounded-lg font-bold hover:bg-blue-800 transition">
        Posting Barang
      </button>
    </form>
  );
}