import React from "react";

function Menu() {
  return (
    <>
      <button
        type="button"
        class="btn btn-primary"
        data-toggle="modal"
        data-target=".bd-example-modal-lg"
      >
        Large modal
      </button>
      <div>Yeni Ekle</div>
      <div>Düzenle</div>
      <div>Sil</div>
    </>
  );
}

export default Menu;
