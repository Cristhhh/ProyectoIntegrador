import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductList from './evidencia2/productlist';
import StatsPanel from './evidencia2/StatsPanel';

const App = () => {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then(res => {
        const renamed = res.data.products.map((prod, i) => ({
          ...prod,
          title: customTitles[i % customTitles.length],
          price: (Math.random() * 450 + 50).toFixed(2),
        }));
        setProducts(renamed);
        setFiltered(renamed);
      });
  }, []);

  useEffect(() => {
    const query = search.trim().toLowerCase();
    if (query === '') {
      setFiltered(products);
    } else {
      const result = products.filter(p =>
        p.title.toLowerCase().includes(query)
      );
      setFiltered(result);
    }
  }, [search, products]);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-blue-700 mb-4 text-center">
        Catálogo de Productos
      </h1>

      <input
        type="text"
        className="w-full p-2 mb-6 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Buscar por título..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />

      <StatsPanel products={filtered} />
      <ProductList products={filtered} />
    </div>
  );
};

const customTitles = [
  "Auriculares NébulaWave", "Botella EcoLuz", "Reloj Titan Chrono",
  "Lámpara Aurora Deep", "Teclado Noche Prisma", "Café Monte Solar", "Pulsera Brisa Marina",
  "Drone Fénix Air", "Guitarra PyroBeat", "Cámara Niebla X", "Campera Llama Azul",
  "Vinilo Borealis", "Zapatillas NovaTrack", "Mochila Cúmulo", "Mouse Plasma",
  "Agenda Horizonte", "Tablet Quasar 10", "Micrófono VoxUltra", "Pintura Galaxia Viva", "Libro Solaris"
];

export default App;