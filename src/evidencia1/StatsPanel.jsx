const StatsPanel = ({ products }) => {
  const maxPrice = Math.max(...products.map(p => parseFloat(p.price)));
  const minPrice = Math.min(...products.map(p => parseFloat(p.price)));
  const maxProduct = products.find(p => parseFloat(p.price) === maxPrice);
  const minProduct = products.find(p => parseFloat(p.price) === minPrice);
  const longTitles = products.filter(p => p.title.length > 20).length;
  const totalPrice = products.reduce((acc, p) => acc + parseFloat(p.price), 0).toFixed(2);
  const avgDiscount = (products.reduce((acc, p) => acc + p.discountPercentage, 0) / products.length).toFixed(2);

  return (
    <div className="bg-gray-100 p-5 rounded-md border border-gray-300 shadow-sm mb-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-3">Estadísticas</h3>
      <ul className="list-disc pl-6 space-y-1 text-gray-700">
        <li>Producto más caro: {maxProduct?.title} - ${maxProduct?.price}</li>
        <li>Producto más barato: {minProduct?.title} - ${minProduct?.price}</li>
        <li>Títulos 20 caracteres: {longTitles}</li>
        <li>Precio total filtrado: ${totalPrice}</li>
        <li>Descuento promedio: {avgDiscount}%</li>
      </ul>
    </div>
  );
};

export default StatsPanel;