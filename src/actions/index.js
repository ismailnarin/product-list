export const setProducts = (productList) => {
  const action = {
    type: "SET_PRODUCTS",
    productList: productList,
  };
  return action;
};

export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      const response = await fetch("http://localhost:5000/products");
      const data = await response.json();
      dispatch(setProducts(data));
    } catch (error) {
      alert(
        "Projenin çalışması için Json server 5000 portunda çalıştırılmalıdır. ilgili kod 'json-server --watch db.json --port 5000'"
      );
      console.error("API isteği başarısız:", error);
    }
  };
};

export const addProductsAct = (newProduct) => {
  return async (dispatch) => {
    try {
      await fetch("http://localhost:5000/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProduct),
      });
      dispatch(fetchProducts());
    } catch (error) {
      console.error("API isteği başarısız:", error);
    }
  };
};
export const setEditProducts = (data) => {
  return { type: "SET_EDIT_PRODUCTS", editProduct: data };
};

export const updateProduct = (editProduct) => {
  return async (dispatch) => {
    try {
      await fetch(`http://localhost:5000/products/${editProduct.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editProduct),
      });

      dispatch(fetchProducts());
      setTimeout(() => dispatch(closeModal()), 300);
    } catch (error) {
      console.error("API isteği başarısız:", error);
    }
  };
};

export const fetchEditProduct = (id) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`http://localhost:5000/products/${id}`);
      const data = await response.json();
      dispatch(setEditProducts(data));
      dispatch(openModal("edit", id));
    } catch (error) {
      console.error("API isteği başarısız:", error);
    }
  };
};

export const openModal = (modalType, id = null) => {
  return { type: "OPEN_MODAL", modalType: modalType, id: id };
};

export const closeModal = () => {
  return { type: "CLOSE_MODAL" };
};

export const changeEdit = () => {
  return { type: "CHANGE_EDIT" };
};

export const changeDelete = () => {
  return { type: "CHANGE_DELETE" };
};

export const selectDeleteProduct = (product) => {
  return (dispatch) => {
    dispatch({
      type: "SELECT_DELETE_PRODUCT",
      selectDeleteProduct: product,
    });
    dispatch(openModal("delete"));
  };
};
export const deleteProduct = (id) => {
  return async (dispatch) => {
    try {
      await fetch(`http://localhost:5000/products/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      await dispatch(fetchProducts());
      setTimeout(() => dispatch(closeModal()), 300);
    } catch (error) {
      console.error("API isteği başarısız:", error);
    }
  };
};
