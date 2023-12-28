const initialState = {
  products: [],
  editProduct: null,
  isEdit: false,
  isDelete: false,
  selectDeleteProduct: null,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return {
        ...state,
        products: action.productList,
      };
    case "SET_EDIT_PRODUCTS":
      return {
        ...state,
        editProduct: action.editProduct,
      };
    case "CHANGE_EDIT":
      return {
        ...state,
        isEdit: !state.isEdit,
      };
    case "CHANGE_DELETE":
      return {
        ...state,
        isDelete: !state.isDelete,
      };
    case "SELECT_DELETE_PRODUCT":
      return {
        ...state,
        selectDeleteProduct: action.selectDeleteProduct,
      };

    default:
      return state;
  }
};

export default productReducer;
