export const getProducts = () => {
  console.log("getProducts action çalıştı");
  return (dispatch) => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        console.log("Gelen veri:", data);
        dispatch({
          type: "SET_PRODUCTS",
          payload: data,
        });
      })
      .catch((error) => {
        console.error("İstek hatası:", error);
        dispatch({
          type: "SET_ERROR",
          payload: "İstek hatası: " + error.message,
        });
      });
  };
};
