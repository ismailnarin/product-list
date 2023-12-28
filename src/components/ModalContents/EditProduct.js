import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { updateProduct } from "../../actions/index";

function EditProduct({ editProduct, updateProduct }) {
  useEffect(() => {
    console.log(editProduct); // editProduct geldiğinde loading durumunu false yap
  }, [editProduct]);
  const [editedProduct, setEditedProduct] = useState(editProduct);

  const setProductName = (value) => {
    setEditedProduct({ ...editedProduct, title: value });
  };

  const setDescription = (value) => {
    setEditedProduct({ ...editedProduct, description: value });
  };

  const setPrice = (value) => {
    setEditedProduct({ ...editedProduct, price: value });
  };

  const handleProductSubmit = (e) => {
    e.preventDefault();

    updateProduct(editedProduct);
  };

  return (
    <div className="container mt-5">
      {editProduct ? (
        <form onSubmit={handleProductSubmit}>
          <div className="mb-3">
            <label htmlFor="productName" className="form-label">
              Ürün Adı
            </label>
            <input
              type="text"
              className="form-control"
              id="productName"
              value={editedProduct.title}
              onChange={(e) => setProductName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Açıklama
            </label>
            <textarea
              className="form-control"
              id="description"
              value={editedProduct.description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="price" className="form-label">
              Fiyat
            </label>
            <input
              type="number"
              className="form-control"
              id="price"
              value={editedProduct.price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="image" className="form-label">
              Fotoğraf
            </label>
            {editProduct.thumbnail ? (
              <img src={editProduct.thumbnail} alt="deneme" />
            ) : (
              <input
                type="file"
                className="form-control"
                id="image"
                accept="image/*"
                //   onChange={(e) => setImage(e.target.files[0])}
                alt="deneme"
              />
            )}
          </div>
          <button type="submit" className="btn btn-primary">
            Ürünü Düzenle
          </button>
        </form>
      ) : (
        <p>Şart sağlanmadı</p>
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  editProduct: state.productList.editProduct,
});
const mapDispatchToProps = {
  updateProduct,
};
export default connect(mapStateToProps, mapDispatchToProps)(EditProduct);
