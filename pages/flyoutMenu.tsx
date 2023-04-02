import React, { useState } from "react";
import XIcon from "../components/Icons/XIcon";

const FlyoutMenu = ({ open, setOpen }) => {
  return (
    <div
      className={`bg-gray-700 text-gray-100 ticket-flyout flyout slice slice__light tab ${
        open ? "open" : ""
      }`}
    >
      <div className="flex justify-between p-4">
        <div>Flyout menu</div>
        <div onClick={() => setOpen(false)}>
          <XIcon className="w-6 h-6 text-gray-100 hover:text-gray-800" />
        </div>
      </div>

      <style jsx>{`
        .ticket-flyout {
          flex-direction: column;
          position: fixed;
          z-index: 505;
          top: 0;
          width: 100%;
          height: 100vh;
          overflow-y: auto;
          overflow-x: hidden;
          -webkit-clip-path: circle(0 at 96% 2.5rem);
          clip-path: circle(0 at 96% 2.5rem);
          transition: -webkit-clip-path 0.6s cubic-bezier(0.23, 1, 0.32, 1);
          transition: clip-path 0.6s cubic-bezier(0.23, 1, 0.32, 1);
          transition: clip-path 0.6s cubic-bezier(0.23, 1, 0.32, 1),
            -webkit-clip-path 0.6s cubic-bezier(0.23, 1, 0.32, 1);
        }

        .flyout {
          display: flex;
          visibility: hidden;
        }

        .open,
        .tab {
          visibility: visible;
        }

        .ticket-flyout.open {
          -webkit-clip-path: circle(110% at 120% 30%);
          clip-path: circle(110% at 120% 30%);
        }

        @media (min-width: 400px) {
          .ticket-flyout.open {
            -webkit-clip-path: circle(138% at 130% 10%);
            clip-path: circle(138% at 130% 10%);
          }
        }

        @media (min-width: 500px) {
          .ticket-flyout.open {
            -webkit-clip-path: circle(77% at 60% 40%);
            clip-path: circle(77% at 60% 40%);
          }
        }

        @media (min-width: 720px) {
          .ticket-flyout.open {
            -webkit-clip-path: circle(77% at 58% 39%);
            clip-path: circle(77% at 58% 39%);
          }
        }

        @media (min-width: 1024px) {
          .ticket-flyout.open {
            -webkit-clip-path: circle(82% at 60% 29%);
            clip-path: circle(82% at 60% 29%);
          }
        }

        @media (min-width: 1440px) {
          .ticket-flyout.open {
            -webkit-clip-path: circle(100% at 65% 0);
            clip-path: circle(100% at 65% 0);
          }
        }
      `}</style>
    </div>
  );
};

const FlyoutMenuPage = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <FlyoutMenu open={open} setOpen={setOpen} />
      <div className="p-4">FlyoutMenuPage</div>
      <button
        onClick={() => {
          setOpen(!open);
        }}
      >
        Open flyout menu
      </button>
    </>
  );
};

export default FlyoutMenuPage;
