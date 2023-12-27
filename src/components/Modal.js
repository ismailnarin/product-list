import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
99;

const MyModal = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Modalı Aç
      </Button>

      <Modal show={show} onHide={handleClose}>
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

export default MyModal;
