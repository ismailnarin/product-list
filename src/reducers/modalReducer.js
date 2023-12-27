const initialState = {
  showModal: false,
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case "OPEN_MODAL":
      return { ...state, showModal: true };
    case "CLOSE_MODAL":
      console.log("a");
      return { ...state, showModal: false };
    default:
      return state;
  }
};

export default modalReducer;
