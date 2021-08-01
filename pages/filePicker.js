import React, { useState } from "react";
import FilePicker from "../components/FilePicker";

const FilePickerPage = () => {
  const [file, setFile] = useState([]);

  return (
    <div className="my-8 text-center m-1">
      <div className="mb-4">File Picker</div>
      <FilePicker file={file} setFile={setFile} />
      {file && (
        <div className="mt-4">
          {file.map((e) => (
            <div key={e.name}>{e.name}</div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilePickerPage;
