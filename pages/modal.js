import React, { useState } from "react";
import Modal from "../components/Modal";

const ModalPage = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="my-8 text-center">
      <div className="mb-4">Modal</div>
      <button
        className="border-2 border-gray-400 px-2 py-1 rounded-md"
        onClick={() => {
          setShowModal((e) => !e);
        }}
      >
        showModal
      </button>
      <Modal visible={showModal} setVisible={setShowModal}>
        <div>This is a modal</div>
        <div>For test purpose only</div>
      </Modal>
    </div>
  );
};

export default ModalPage;
