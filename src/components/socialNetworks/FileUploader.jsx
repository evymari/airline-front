import { useState } from "react";

const FileUploader = () => {
  const [file, setFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      if (selectedFile.type === "image/jpeg" || selectedFile.type === "image/png") {
        const reader = new FileReader();
        reader.onload = (event) => {
          setFile(event.target.result);
          setIsUploading(false);
        };
        setIsUploading(true);
        reader.readAsDataURL(selectedFile);
      } else {
        alert("Solo se permiten archivos .jpg y .png");
        setIsUploading(false);
      }
    }
  };

  const handleRemoveImage = () => {
    setFile(null);
  };

  return (
    <div className="relative border-3 border-grey p-4 h-60 w-full max-w-xs overflow-hidden mx-auto ">
      <div
        className={`box bg-gray-300 bg-center bg-contain bg-no-repeat h-full relative p-5 bg-white${
          file ? "" : "flex items-center justify-center"
        }`}
        style={file ? { backgroundImage: `url(${file})` } : {}}
      >
        {file && (
          <button
            className="remove_img absolute right-0 top-0 bg-white p-2 text-red-500 font-bold border border-red-500 hover:bg-red-500 hover:text-white transition-all"
            onClick={handleRemoveImage}
          >
            X
          </button>
        )}
        {!file && (
          <p
            className="select_bottom relative inset-0 flex items-center justify-center bg-black text-white cursor-pointer p-2 h-24 w-20 mt-4 ml-6"
            onClick={() => document.getElementById("filefield").click()}
          >
            Seleccionar un archivo
          </p>
        )}
        <input
          id="filefield"
          className="hidden"
          type="file"
          onChange={handleFileChange}
        />
        {isUploading && (
          <>
            <div className="overlay_uploader absolute top-0 left-0 w-full h-full bg-white opacity-70"></div>
            <div className="spinner border-3 border-teal-500 rounded-full w-8 h-8 animate-spin mx-auto"></div>
          </>
        )}
      </div>
    </div>
  );
};

export default FileUploader;