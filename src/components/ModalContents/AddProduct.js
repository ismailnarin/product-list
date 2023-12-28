import React, { useState } from "react";
import { addProductsAct, closeModal } from "../../actions/index";
import { connect } from "react-redux";

function AddProduct({ addProductsAct, closeModal }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [error, setError] = useState("");

  const handleProductSubmit = (e) => {
    e.preventDefault();

    if (!title || !description || !price || !image) {
      setError("Lütfen tüm alanları doldurun ve bir fotoğraf ekleyin.");
      setTimeout(() => setError(""), 2000);
      return;
    }
    const newProduct = {
      id: Date.now(),
      title: title,
      price: parseFloat(price),
      description: description,
      thumbnail: "https://i.dummyjson.com/data/products/30/1.jpg",
    };
    addProductsAct(newProduct);
    setTimeout(() => closeModal(), 200);
  };

  return (
    <div className="container mt-5">
      <form onSubmit={handleProductSubmit}>
        {error && (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        )}
        <div className="mb-3">
          <label htmlFor="productName" className="form-label">
            Ürün Adı
          </label>
          <input
            type="text"
            className="form-control"
            id="productName"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Açıklama
          </label>
          <textarea
            className="form-control"
            id="description"
            value={description}
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
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="image" className="form-label">
            Fotoğraf
          </label>

          <input
            type="file"
            className="form-control"
            id="image"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            alt="deneme"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Ürünü Ekle
        </button>
      </form>
    </div>
  );
}
const mapDispatchToProps = {
  addProductsAct,
  closeModal,
};
export default connect(null, mapDispatchToProps)(AddProduct);
