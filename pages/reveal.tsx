import { keyframes } from "@emotion/react";
import React, { useState } from "react";
import Reveal, { Fade } from "react-awesome-reveal";

var Card = () => {
  return (
    <div className="w-80 h-96 bg-green-200 text-center shadow-md">
      This is card
    </div>
  );
};

const bottomFadeIn = keyframes`
  from {
    opacity: 0.2;
    transform: translateY(100px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
  `;

export default function MyReveal() {
  const [inview, setinView] = useState(false);
  return (
    <div className="p-4">
      <div className="mb-8">Reveal</div>
      <div className="flex gap-4 flex-wrap">
        <Reveal
          cascade
          duration={1000}
          damping={0.15}
          fraction={1}
          triggerOnce={true}
          onVisibilityChange={(e) => {
            if (!inview && e) setinView(true);
          }}
          className={inview ? "" : " opacity-0"}
          keyframes={bottomFadeIn}
        >
          <Card />
          <Card />
          <Card />
        </Reveal>
      </div>
    </div>
  );
}
