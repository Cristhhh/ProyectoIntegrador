import { useEffect, useState } from 'react';

const StatsPanel = ({ products }) => {
  const [animation, setAnimation] = useState(false);

  useEffect(() => {
    setAnimation(true);
    const timeout = setTimeout(() => setAnimation(false), 500);
    return () => clearTimeout(timeout);
  }, [products]);

  const prices = products.map(p => parseFloat(p.price));
  const maxProduct = products.find(p => parseFloat(p.price) === Math.max(...prices));
  const minProduct = products.find(p => parseFloat(p.price) === Math.min(...prices));
  const longTitles = products.filter(p => p.title.length > 20).length;
  const totalPrice = prices.reduce((acc, price) => acc + price, 0).toFixed(2);
  const avgDiscount = (products.reduce((acc, p) => acc + p.discountPercentage, 0) / products.length).toFixed(2);
  const countOver300 = products.filter(p => parseFloat(p.price) > 300).length;
  const maxDiscount = Math.max(...products.map(p => p.discountPercentage)).toFixed(2);

  return (
    <div className={`bg-gray-100 p-5 rounded-md border border-gray-300 shadow-sm mb-6 transition-opacity duration-500 ${animation ? 'opacity-70' : 'opacity-100'}`}>
      <h3 className="text-xl font-semibold text-gray-800 mb-3">Estadísticas</h3>
      <ul className="list-disc pl-6 space-y-1 text-gray-700">
        <li>Producto más caro: {maxProduct?.title} - ${maxProduct?.price}</li>
        <li>Producto más barato: {minProduct?.title} - ${minProduct?.price}</li>
        <li>Títulos &gt; 20 caracteres: {longTitles}</li>
        <li>Precio total filtrado: ${totalPrice}</li>
        <li>Promedio de descuento: {avgDiscount}%</li>
        <li>Productos con precio &gt; $300: {countOver300}</li>
        <li>Total de productos filtrados: {products.length}</li>
        <li>Descuento más alto: {maxDiscount}%</li>
      </ul>
    </div>
  );
};

export default StatsPanel;
