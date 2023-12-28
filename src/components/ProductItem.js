import React from "react";
import editLogo from "../assets/image/editProduct.svg";
import { connect } from "react-redux";
import { openModal, fetchEditProduct, selectDeleteProduct } from "../actions";
import { Link } from "react-router-dom";

function ProductItem({
  isEdit,
  isDelete,
  product,
  selectDeleteProduct,
  fetchEditProduct,
}) {
  const edit = (e, id) => {
    e.stopPropagation();
    e.preventDefault();
    fetchEditProduct(id);
  };
  const deleteProduct = (e, product) => {
    e.stopPropagation();
    e.preventDefault();
    selectDeleteProduct(product);
  };
  return (
    <Link to={`products/${product.id}`}>
      <div className="product">
        {isEdit && (
          <div className="editProduct" onClick={(e) => edit(e, product.id)}>
            <img src={editLogo} alt="Edit Product" />
          </div>
        )}
        {isDelete && (
          <div
            className="deleteProduct"
            onClick={(e) => deleteProduct(e, product)}
          >
            Sil
          </div>
        )}

        <div className="imgContainer">
          <img src={product.thumbnail} alt={product.title} />
        </div>
        <div className="title">
          {product.title.length > 22
            ? `${product.title.slice(0, 19)}...`
            : product.title}
        </div>
        <div className="description">{product.description}</div>
        <div className="price">{product.price} TL</div>
      </div>
    </Link>
  );
}
const mapStateToProps = (state) => ({
  isEdit: state.productList.isEdit,
  isDelete: state.productList.isDelete,
});
const mapDispatchToProps = {
  openModal,
  fetchEditProduct,
  selectDeleteProduct,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductItem);
