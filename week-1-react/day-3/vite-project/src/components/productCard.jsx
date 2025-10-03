import React from 'react';

function ProductCard({ productName, price, stock, isAvailable }) {
  const cardStyle = {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "12px",
    margin: "10px 0",
    maxWidth: "280px",
    backgroundColor: "#f9fafb",
    color: "black"
  };
  return(
    <div style={cardStyle}>
          <h3>{productName}</h3>
      <p>Harga: Rp.{price}</p>
      <p>Stok: {stock}</p>
      <p>Status: {isAvailable ? "stok ready" : "stok habis"}</p>
    </div>
  )
}
ProductCard.defaultProps = {
  stock: 0,
  isAvailable: false
};

export default ProductCard;