import React, { useState, useCallback } from "react";

const ExpensiveChild = React.memo(function ExpensiveChild({ product, onAddToCart }) {
  console.log(`🔄 ExpensiveChild render: ${product.name}`);
  return (
    <div className="border rounded p-3 mb-3">
      <h4 className="font-medium">{product.name}</h4>
      <p className="text-sm text-gray-600">Rp {product.price.toLocaleString()}</p>
      <button
        onClick={() => onAddToCart(product)}
        className="mt-2 px-3 py-1 bg-blue-500 text-white rounded text-sm"
      >
        Tambah ke Keranjang
      </button>
    </div>
  );
});

export default function ShoppingCartSimple() {
  const [cart, setCart] = useState([]);
  const [other, setOther] = useState(0);

  const handleAddToCart = useCallback((product) => {
    console.log(`🛒 Menambahkan ${product.name}`);
    setCart((c) => [...c, product]);
  }, []);

  const clearCart = useCallback(() => setCart([]), []);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-sm mt-8">
      <h2 className="text-xl font-semibold mb-4 text-center">Contoh useCallback — Shopping Cart</h2>

      <div className="flex gap-3 mb-4 justify-center items-center">
        <button
          onClick={() => setOther((s) => s + 1)}
          className="px-3 py-1 bg-gray-100 rounded"
        >
          Update State Lain (Count: {other})
        </button>

        <button
          onClick={clearCart}
          className="px-3 py-1 bg-red-100 text-red-700 rounded"
        >
          Kosongkan Keranjang
        </button>
      </div>

      <p className="text-sm text-gray-500 mb-4 text-center">
        Tekan <span className="font-medium">Update State Lain</span> — ExpensiveChild tidak akan re-render ulang
        karena handler <code>handleAddToCart</code> dimemoized.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h3 className="font-medium mb-2">Produk Tersedia</h3>
          {sampleProducts.map((p) => (
            <ExpensiveChild key={p.id} product={p} onAddToCart={handleAddToCart} />
          ))}
        </div>

        <div>
          <h3 className="font-medium mb-2">Keranjang ({cart.length})</h3>
          <div className="space-y-2">
            {cart.length === 0 ? (
              <div className="text-sm text-gray-500">Keranjang kosong</div>
            ) : (
              cart.map((item, i) => (
                <div key={i} className="p-2 bg-gray-50 rounded text-sm">
                  {item.name} — Rp {item.price.toLocaleString()}
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

const sampleProducts = [
  { id: 1, name: "Laptop Gaming", price: 15000000 },
  { id: 2, name: "Smartphone", price: 5000000 },
  { id: 3, name: "Headphone", price: 800000 },
];