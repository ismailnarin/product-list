import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getProducts } from "../actions/index";

function ProductList({ getProducts }) {
  useEffect(() => {
    getProducts();
  }, [getProducts]);
  return <div>ProductList</div>;
}
const mapStateToProps = (state) => ({
  products: state.products,
});

export default connect(mapStateToProps, { getProducts })(ProductList);
