import { useState } from "react";

const PdfUpload = ({ onUploadSuccess }) => {
  const [file, setFile] = useState(null);
  const [uploaded, setUploaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type === "application/pdf") {
      setFile(selectedFile);
      setUploaded(false);
      setProgress(0);
    }
  };

  const handleUpload = () => {
    if (!file) return;

    setLoading(true);
    setProgress(0);

    let value = 0;
    const interval = setInterval(() => {
      value += 10;
      setProgress(value);

      if (value >= 100) {
        clearInterval(interval);
        setLoading(false);
        setUploaded(true);
        onUploadSuccess?.();
      }
    }, 120);
  };

  return (
    <div className="space-y-4">

      {/* Header */}
      <div>
        <h3 className="text-lg font-semibold text-slate-100">
          Upload Knowledge Documents
        </h3>
        <p className="text-sm text-slate-300 mt-1">
          Upload SOPs, HR policies, or internal PDFs.
        </p>
      </div>

      {/* Upload Area */}
      <div
        className="
          border border-white/20
          rounded-2xl
          p-6
          bg-white/5
          text-center
          space-y-5
          transition-all duration-300
          hover:bg-white/10
          hover:-translate-y-[2px]
          hover:shadow-xl
          hover:shadow-indigo-500/20
        "
      >

        {/* File Picker */}
        <label className="inline-block cursor-pointer">
          <span
            className="
              px-5 py-2.5
              rounded-xl
              text-sm font-medium
              text-white
              bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500
              shadow-lg shadow-indigo-500/30
              hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500
              hover:shadow-purple-500/40
              transition-all duration-300
              active:scale-[0.97]
            "
          >
            Choose PDF File
          </span>
          <input
            type="file"
            accept="application/pdf"
            onChange={handleFileChange}
            className="hidden"
          />
        </label>

        {/* Selected File */}
        {file && !uploaded && (
          <p className="text-sm text-slate-300">
            Selected:
            <span className="ml-1 font-medium text-slate-100">
              {file.name}
            </span>
          </p>
        )}

        {/* Progress Bar */}
        {loading && (
          <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
            <div
              className="
                h-full
                bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500
                transition-all duration-300
              "
              style={{ width: `${progress}%` }}
            />
          </div>
        )}

        {/* Upload Button / Success */}
        {!uploaded ? (
          <button
            onClick={handleUpload}
            disabled={loading || !file}
            className="
              w-full
              px-5 py-2.5
              rounded-xl
              text-sm font-medium
              text-white
              bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
              shadow-lg shadow-purple-500/30
              hover:from-purple-500 hover:via-pink-500 hover:to-red-500
              hover:shadow-pink-500/40
              transition-all duration-300
              active:scale-[0.97]
              disabled:opacity-50
              disabled:cursor-not-allowed
            "
          >
            {loading ? "Uploading…" : "Upload PDF"}
          </button>
        ) : (
          <p className="text-green-400 text-sm font-medium">
            ✔ Document uploaded successfully
          </p>
        )}
      </div>
    </div>
  );
};

export default PdfUpload;
