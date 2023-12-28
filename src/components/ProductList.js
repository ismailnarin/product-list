import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../actions/index";
import ProductItem from "./ProductItem";

function ProductList({ products, fetchProducts }) {
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <div>
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
  products: state.productList.products,
});

export default connect(mapStateToProps, { fetchProducts })(ProductList);
