import React from "react";
import { connect } from "react-redux";
import { Button, Modal } from "react-bootstrap";
import { closeModal } from "../actions/index";

const MyModal = ({ products, closeModal }) => {
  const handleClose = () => closeModal();

  return (
    <div>
      <Modal show={products.modalReducer.showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal Başlığı</Modal.Title>
        </Modal.Header>
        <Modal.Body>Buraya modal içeriği gelecek.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Kapat
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Kaydet
          </Button>
        </Modal.Footer>
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
