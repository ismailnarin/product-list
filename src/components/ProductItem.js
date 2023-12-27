import React from "react";

function ProductItem({ product }) {
  return (
    <div className="product">
      <div className="imgContainer">
        <img src={product.images[0]} alt={product.title} />
      </div>
      <div className="title">
        {" "}
        {product.title.length > 22
          ? `${product.title.slice(0, 19)}...`
          : product.title}
      </div>
      <div className="description">{product.description}</div>
      <div className="price">{product.price} TL</div>
    </div>
  );
}

export default ProductItem;
