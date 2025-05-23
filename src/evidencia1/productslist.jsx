const ProductList = ({ products }) => {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {products.map(p => (
          <div key={p.id} className="border border-gray-300 rounded-md p-4 shadow-sm bg-white text-center hover:shadow-md transition">
            <h2 className="font-medium text-md text-gray-900">{p.title}</h2>
            <p className="text-blue-600 font-semibold mt-1">${p.price}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default ProductList;