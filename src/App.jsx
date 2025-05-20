import { useEffect, useState } from "react";
import axios from "axios";
import "./index.css";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://dummyjson.com/products")
      .then(res => {
        setProducts(res.data.products); // accedemos a la propiedad "products"
      })
      .catch(err => {
        console.error("Error fetching products:", err);
      });
  }, []);

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">Lista de Productos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {products.map(product => (
          <div key={product.id} className="border p-4 bg-white rounded shadow hover:shadow-md transition">
            <h2 className="text-lg font-semibold">{product.title}</h2>
            <p className="text-gray-700 font-medium">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
