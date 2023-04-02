import React, { PropsWithChildren } from "react";

type ButtonProps = {
  text: string;
  onClick: () => void;
};

const RadialAnimatedButton = (props: PropsWithChildren<ButtonProps>) => {
  return (
    <>
      <button className="radial-button border-2 font-bold border-gray-800 rounded-md p-4 bg-no-repeat bg-center">
        {props.text}
      </button>

      <style jsx>{`
        .radial-button {
          transition: background-size 0.2s ease-in, color 0.15s ease-in;
          background-image: radial-gradient(
            circle,
            #29303b 0,
            #29303b 50%,
            transparent 51%,
            transparent 100%
          );
          background-size: 0;
        }
        .radial-button:hover {
          background-size: 300%;
          color: white;
        }
      `}</style>
    </>
  );
};

export default RadialAnimatedButton;
