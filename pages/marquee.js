import React from "react";
import { classes } from "../utils";

const users = [
  "Google",
  "Amazon",
  "Apple",
  "Microsoft",
  "Cisco",
  "Uber",
  "Walmart",
  "Wix",
  "HP",
  "Yahoo!",
  "Ocado",
];

const Marquee = React.memo(() => {
  return (
    <div className="overflow-x-hidden">
      <div className="relative translate-x-1/2">
        <div className="wrapper inline-block">
          {[...users, ...users, ...users].map((user, i) => (
            <span
              key={user + i}
              className={classes([
                "text-gray-300 inline-block text-4xl font-black m-2",
                i % 2 ? "text-gray-400" : "",
              ])}
            >
              {user}
            </span>
          ))}
        </div>
      </div>
      <style jsx>{`
        @keyframes slidein {
          from {
            transform: translate3d(0, 0, 0);
          }
          to {
            transform: translate3d(-50%, 0, 0);
          }
        }
        .wrapper {
          position: relative;
          white-space: nowrap;
          display: inline-block;
          animation: slidein 50s linear infinite;
        }
      `}</style>
    </div>
  );
});

Marquee.displayName = "Marquee";

const MarqueePage = () => {
  return (
    <div className="my-8 text-center">
      <div className="mb-4">Marquee</div>
      <div className="mt-10">
        <Marquee />
      </div>
    </div>
  );
};

export default MarqueePage;
