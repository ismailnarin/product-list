const initialState = {
  modalType: null,
  showModal: false,
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case "OPEN_MODAL":
      return { ...state, modalType: action.modalType, showModal: true };
    case "CLOSE_MODAL":
      return { ...state, showModal: false };
    default:
      return state;
  }
};

export default modalReducer;
