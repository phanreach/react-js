import React, { useEffect } from "react";
import { useState } from "react";

export default function Product() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  return (
    <div>
      <h1 className="font-bold text-2xl p-8">List of Products</h1>

      <div className="p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {product.map((item, index) => (
          <div
            className="bg-white max-w-sm p-6 border rounded-lg shadow"
            key={index}
          >
            <img className="rounded-lg" src={item.image} alt={item.title} />

            <h5 className="mt-6 mb-2 text-2xl font-bold text-gray-900">
              {item.title}
            </h5>

            <p className="mb-3 text-gray-700">{item.subtitle}</p>
            <p className="mb-4 font-semibold text-blue-600 text-lg">
              ${item.price}
            </p>
            <button
              type="button"
              className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-full"
            >
              Enroll Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
