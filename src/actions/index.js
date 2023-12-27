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
      console.error("API isteği başarısız:", error);
    }
  };
};

export const openModal = () => {
  return { type: "OPEN_MODAL" };
};

export const closeModal = () => {
  return { type: "CLOSE_MODAL" };
};
