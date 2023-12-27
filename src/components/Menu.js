import React from "react";
import { openModal } from "../actions/index";
import { connect } from "react-redux";

function Menu({ openModal }) {
  const showModal = (type) => {
    openModal(type);
  };

  return (
    <>
      <div onClick={() => showModal("new")}>Yeni Ekle</div>
      <div>Düzenle</div>
      <div>Sil</div>
    </>
  );
}

// connect içinde mapStateToProps ve mapDispatchToProps
const mapDispatchToProps = {
  openModal,
};

export default connect(null, mapDispatchToProps)(Menu);
