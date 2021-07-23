import React from "react";
import { classes } from "../utils";
import XIcon from "./Icons/XIcon";

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
          className="bg-gray-50 m-1 rounded-md relative max-w-full max-h-full overflow-hidden shadow-lg"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="mt-8 border-b border-gray-300"></div>

          <div>{children}</div>

          <button
            onClick={() => setVisible(false)}
            className="text-gray-600 hover:text-gray-800 absolute top-0 right-0 rounded-full p-1"
          >
            <XIcon className="w-6 h-6 text-gray-600 hover:text-gray-800" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
