import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../actions/index";
import ProductItem from "./ProductItem";

function ProductList({ products, fetchProducts }) {
  console.log(products);
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  return (
    <div>
      <h2>Product List</h2>
      <div className="container grid">
        {products ? (
          products.map((product) => (
            <ProductItem key={product.id} product={{ ...product }} />
          ))
        ) : (
          <li>Loading...</li>
        )}
      </div>
    </div>
  );
}
const mapStateToProps = (state) => ({
  products: state.products,
});

export default connect(mapStateToProps, { fetchProducts })(ProductList);
