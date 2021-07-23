import React, { useState } from "react";
import { classes } from "../utils";
import BackArrow from "./Icons/BackArrow";

const Slider = ({ children }) => {
  const childrens = Array.isArray(children) ? children : [children];
  const length = childrens.length;

  const [active, setActive] = useState(0);

  const handleBack = () => {
    if (active > 0) setActive(active - 1);
  };

  const handleFront = () => {
    if (active < length - 1) setActive(active + 1);
  };

  return (
    <div className="w-full relative">
      <ul className="flex overflow-hidden items-center w-full">
        {childrens.map((e, i) => (
          <li
            key={i}
            className="w-full flex-shrink-0 l-item"
            style={{ backgroundColor: e }}
          >
            {e}
          </li>
        ))}
      </ul>

      <div className="flex justify-center mt-4">
        {[...Array(length).keys()].map((e) => (
          <button
            key={e}
            onClick={() => setActive(e)}
            className={classes([
              "mx-1 w-4 h-4 border-2 bg-gray-600 rounded-full",
              e === active ? "border-black" : "",
            ])}
          ></button>
        ))}
      </div>

      <button
        className={classes([
          "mr-2 left-4",
          "p-1 bg-gray-400 rounded-full border-2 border-gray-300 absolute top-1/2",
          active === 0 ? "cursor-not-allowed" : "hover:bg-gray-500",
        ])}
        onClick={handleBack}
      >
        <BackArrow className="w-6 h-6" />
      </button>

      <button
        className={classes([
          "ml-2 right-4",
          "p-1 bg-gray-400 rounded-full border-2 border-gray-300 absolute top-1/2",
          active === length - 1 ? "cursor-not-allowed" : "hover:bg-gray-500",
        ])}
        onClick={handleFront}
      >
        <BackArrow className="w-6 h-6 transform rotate-180" />
      </button>

      <style jsx>{`
        .l-item {
          transform: translateX(-${active * 100}%);
          transition: transform 500ms cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
    </div>
  );
};

export default Slider;
