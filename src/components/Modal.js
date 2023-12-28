import React from "react";
import { connect } from "react-redux";
import { Modal } from "react-bootstrap";
import { closeModal } from "../actions/index";
import AddProduct from "./ModalContents/AddProduct";
import EditProduct from "./ModalContents/EditProduct";
import DeleteProduct from "./ModalContents/DeleteProduct";

const MyModal = ({ products, closeModal }) => {
  const handleClose = () => closeModal();
  const renderComponent = () => {
    switch (products.modalReducer.modalType) {
      case "new":
        return <AddProduct />;
      case "edit":
        return <EditProduct />;
      case "delete":
        return <DeleteProduct />;
      default:
        return null;
    }
  };

  return (
    <div>
      <Modal show={products.modalReducer.showModal} onHide={handleClose}>
        <Modal.Body>
          <div className="customClose" onClick={handleClose}>
            X
          </div>
          {renderComponent()}
        </Modal.Body>
      </Modal>
    </div>
  );
};

const mapStateToProps = (state) => ({
  products: state,
});

const mapDispatchToProps = {
  closeModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(MyModal);
