import React, { useState } from "react";
import XIcon from "../components/Icons/XIcon";

const CloseButton = () => (
  <svg viewBox="0 0 12 12" height="12" width="12">
    <path d="M1,1 L11,11 M1,11 L11,1"></path>
  </svg>
);

const Modal = ({ isOpen, setOpen }) => {
  return (
    <>
      <div className={`bg-green-300 wrapper ${isOpen ? "open" : ""}`}>
        <div className="flex justify-between p-4">
          <div className="flex-1 text-center font-bold">Hello from menu</div>
          <button onClick={() => setOpen(false)}>
            <XIcon className="w-6 h-6 text-gray-600 hover:text-gray-800" />
          </button>
        </div>
      </div>
      <style jsx>{`
        .wrapper {
          display: none;
          transition: top 0.4s cubic-bezier(0.82, 0.085, 0.395, 0.895);
          position: fixed;
          left: 0;
          top: -100vh;
          height: 100vh;
          width: 100%;
          overflow-x: hidden;
          overflow-y: scroll;
          display: flex;
          flex-flow: column nowrap;
        }
        .open {
          top: 0;
          display: block;
          transition: top 0.4s cubic-bezier(0.82, 0.085, 0.395, 0.895);
        }
      `}</style>
    </>
  );
};

export default function ModalMenu() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => {
          setOpen(!open);
        }}
      >
        ModalMenu
      </button>
      <Modal isOpen={open} setOpen={setOpen} />
    </>
  );
}
