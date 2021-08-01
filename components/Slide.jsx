import React, { useState } from "react";
import { classes } from "../utils";

const BackArrowIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className={className}
  >
    <g dataname="Layer 2">
      <g dataname="arrow-ios-back">
        <rect width="24" height="24" opacity="0" transform="rotate(90 12 12)" />
        <path d="M13.83 19a1 1 0 0 1-.78-.37l-4.83-6a1 1 0 0 1 0-1.27l5-6a1 1 0 0 1 1.54 1.28L10.29 12l4.32 5.36a1 1 0 0 1-.78 1.64z" />
      </g>
    </g>
  </svg>
);

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
              "mx-1 w-4 h-4 border-2 bg-gray-500 rounded-full",
              e === active ? "border-gray-800" : "",
            ])}
          ></button>
        ))}
      </div>

      <button
        className={classes([
          "mr-2 left-1 md:left-4",
          "p-1 bg-gray-400 rounded-full border shadow-md border-gray-300 absolute top-1/2",
          active === 0 ? "cursor-not-allowed" : "hover:bg-gray-300",
        ])}
        onClick={handleBack}
      >
        <BackArrowIcon className="w-6 h-6" />
      </button>

      <button
        className={classes([
          "ml-2 right-1 md:right-4",
          "p-1 bg-gray-400 rounded-full border border-gray-300 shadow-md absolute top-1/2",
          active === length - 1 ? "cursor-not-allowed" : "hover:bg-gray-300",
        ])}
        onClick={handleFront}
      >
        <BackArrowIcon className="w-6 h-6 transform rotate-180" />
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
