import React from "react";

export default function line() {
  return (
    <div
      className="h-screen"
      style={{
        backgroundImage: "linear-gradient(90deg,#29303b,#29303b 2px)",
        backgroundRepeat: "repeat-y",
        backgroundSize: "2px 1px",
        backgroundPosition: "calc((100% - 4.125rem)/12*1/2 + .625rem - 2px)",
      }}
    >
      <div
        style={{
          marginLeft: "calc((100% - 4.125rem)/12*1/2 + .625rem + 20px)",
        }}
      >
        line
      </div>
    </div>
  );
}
