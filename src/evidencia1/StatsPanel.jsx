function StatsPanel({ products }) {
    if (!products.length) return null;
  
    const mostExpensive = products.reduce((a, b) => (a.price > b.price ? a : b));
    const cheapest = products.reduce((a, b) => (a.price < b.price ? a : b));
    const longTitles = products.filter(p => p.title.length > 20).length;
    const totalPrice = products.reduce((sum, p) => sum + p.price, 0);
    const avgDiscount = (products.reduce((sum, p) => sum + p.discountPercentage, 0) / products.length).toFixed(2);
  
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-sm font-semibold text-gray-500">Most Expensive</h3>
          <p className="text-lg font-bold">{mostExpensive.title} - ${mostExpensive.price}</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-sm font-semibold text-gray-500">Cheapest</h3>
          <p className="text-lg font-bold">{cheapest.title} - ${cheapest.price}</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-sm font-semibold text-gray-500">Titles > 20 chars</h3>
          <p className="text-lg font-bold">{longTitles}</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-sm font-semibold text-gray-500">Total Price</h3>
          <p className="text-lg font-bold">${totalPrice}</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-sm font-semibold text-gray-500">Avg. Discount</h3>
          <p className="text-lg font-bold">{avgDiscount}%</p>
        </div>
      </div>
    );
  }
  
  export default StatsPanel;
  