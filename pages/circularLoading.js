import React from "react";
import Loading1 from "../components/icons/Loading1";
import Loading2 from "../components/icons/Loading2";
import Loading3 from "../components/icons/Loading3";

const Loading = () => {
  return (
    <div className="my-8 text-center flex flex-col items-center">
      <div className="mb-4">Loading Animations</div>
      <div className="flex justify-between space-x-4">
        <Loading1 className="w-10 h-10 animate-spin" fill="#333" />
        <Loading2 className="w-10 h-10 animate-spin" fill="#333" />
        <Loading3 className="w-10 h-10 animate-spin" fill="#333" />
      </div>
    </div>
  );
};

export default Loading;
