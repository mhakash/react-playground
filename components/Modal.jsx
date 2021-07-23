import React from "react";
import { classes } from "../utils";

const Modal = ({ visible = false, children, setVisible }) => {
  return (
    <div
      className={classes([
        visible ? "visible" : "hidden",
        "w-screen h-screen bg-gray-800 bg-opacity-50 absolute top-0 flex flex-col justify-center",
      ])}
      onClick={() => setVisible(false)}
    >
      <div className="flex justify-center">
        <div
          className="bg-gray-50 p-4 rounded-md "
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
