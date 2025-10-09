import React from "react";

function ProductList({ products }) {
  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-semibold mb-4 text-gray-700">
        Daftar Produk
      </h2>

      {products.length === 0 ? (
        <p className="text-gray-500 italic">
            tambah item
        </p>
      ) : (
        <ul className="bg-white rounded-lg shadow-md p-4 w-80 divide-y divide-gray-200 hover:translate-y-2 transition">
          {products.map((item) => (
            <li key={item.id} className="py-3 flex justify-between items-center">
              <div>
                <p className="font-medium text-gray-800">{item.name}</p>
                <p className="text-sm text-gray-500">
                  Rp {item.price.toLocaleString("id-ID")}
                </p>
              </div>
              <span className="text-xs bg-indigo-100 text-indigo-600 px-2 py-1 rounded-md">
                {item.category}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ProductList;
