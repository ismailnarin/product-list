import React, { useEffect } from "react";
import { connect } from "react-redux";
import { closeModal, deleteProduct } from "../../actions";

function DeleteProduct({ state, closeModal, deleteProduct }) {
  const delProd = (id) => {
    deleteProduct(id);
    console.log(id);
  };
  useEffect(() => {
    console.log(state);
  }, [state]);
  return (
    <>
      <h4 className="me-4">
        <i>{state.title}</i> Ürünü silinecek emin misiniz?
      </h4>
      <button
        className="btn btn-primary me-2"
        onClick={() => delProd(state.id)}
      >
        Evet
      </button>
      <button className="btn btn-danger" onClick={() => closeModal()}>
        Hayır
      </button>
    </>
  );
}
const mapStateToProps = (state) => ({
  state: state.productList.selectDeleteProduct,
});
const mapDispatchToProps = {
  closeModal,
  deleteProduct,
};

export default connect(mapStateToProps, mapDispatchToProps)(DeleteProduct);
