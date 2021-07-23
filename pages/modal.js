import React, { useState } from "react";
import Modal from "../components/Modal";

const ModalPage = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="my-8 text-center">
      <div className="mb-4">Modal</div>
      <button
        className="border text-sm border-gray-400 hover:border-gray-800 px-2 py-1 rounded-md"
        onClick={() => {
          setShowModal((e) => !e);
        }}
      >
        showModal
      </button>
      <Modal visible={showModal} setVisible={setShowModal}>
        <div className="h-48 max-h-full flex flex-col justify-center bg-gradient-to-r from-gray-50 to-gray-200 text-gray-800">
          <div className="w-96 max-w-full">This is a modal</div>
          <div>For test purpose only</div>
        </div>
      </Modal>
    </div>
  );
};

export default ModalPage;
