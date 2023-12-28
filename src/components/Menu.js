import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { openModal, changeEdit, changeDelete } from "../actions/index";
import { connect } from "react-redux";

function Menu({ openModal, changeEdit, changeDelete }) {
  const showModal = (type) => {
    openModal(type);
  };

  const edit = () => {
    changeEdit();
  };

  const changeDel = () => {
    changeDelete();
  };

  return (
    <Navbar bg="light" expand="lg">
      <div className="container">
        <Navbar.Brand href="#">Ürün Listesi</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link onClick={() => showModal("new")}>Yeni Ekle</Nav.Link>
            <Nav.Link onClick={edit}>Düzenle</Nav.Link>
            <Nav.Link onClick={changeDel}>Sil</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

const mapDispatchToProps = {
  openModal,
  changeEdit,
  changeDelete,
};

export default connect(null, mapDispatchToProps)(Menu);
