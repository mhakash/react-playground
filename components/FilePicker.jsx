import React, { useEffect, useRef, useState } from "react";
import Upload from "./Icons/Upload";

const FilePicker = ({ setFile, file }) => {
  const handleDragEvent = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const files = [...e.dataTransfer.files];
    console.log(files);
    setFile(files);
  };

  return (
    <div
      className=""
      onDragOver={(e) => handleDragEvent(e)}
      onDragEnter={(e) => handleDragEvent(e)}
      onDragLeave={(e) => handleDragEvent(e)}
      onDrop={(e) => handleDrop(e)}
    >
      <label>
        <input
          type="file"
          className="hidden"
          multiple={true}
          onChange={(e) => setFile([...e.target.files])}
        />
        <div className="w-96 h-48 rounded-md max-w-full flex flex-col justify-center items-center m-auto border-gray-800 border  cursor-pointer">
          <Upload className="w-16 h-16" fill="rgb(55, 65, 81)" />
          <div>click / drag</div>
        </div>
      </label>
    </div>
  );
};

export default FilePicker;
