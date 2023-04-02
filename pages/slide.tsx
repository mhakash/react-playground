import React, { PropsWithChildren } from "react";
import Slider from "../components/Slide";

const items = ["#555", "#777", "#999", "#aaa", "#ccc"];

const SlidePage = () => {
  return (
    <div className="my-8 text-center">
      <div>
        <div className="mb-4">Slide Page</div>
        <Slider>
          {items.map((e) => (
            <div key={e} className="h-96" style={{ backgroundColor: e }}></div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SlidePage;
