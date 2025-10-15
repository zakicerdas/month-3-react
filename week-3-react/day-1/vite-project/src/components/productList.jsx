import React from "react";
import { useCart } from "../context/cartContext";

const PRODUCTS = [
  { id: "p1", title: "T-Shirt", price: 120000},
  { id: "p2", title: "Mug", price: 45000},
  { id: "p3", title: "Sticker Pack", price: 15000},
];

export default function ProductList() {
  const { dispatch } = useCart();

  const handleAdd = (product) => {
    dispatch({ type: "addItem", payload: { product } });
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-3">Products</h2>
      <div className="grid gap-3">
        {PRODUCTS.map((p) => (
          <div key={p.id} className="p-3 border rounded flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div>
                <div className="font-medium">{p.title}</div>
                <div className="text-sm opacity-80">Rp {p.price.toLocaleString()}</div>
              </div>
            </div>
            <div>
              <button
                onClick={() => handleAdd(p)}
                className="px-3 py-1 bg-blue-500 text-white rounded"
              >
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}