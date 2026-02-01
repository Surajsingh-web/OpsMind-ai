import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Navbar from "../components/layout/Navbar";


const DocumentHistory = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [documents, setDocuments] = useState([
    { id: 1, name: "HR_Policy_2024.pdf", status: "Ready" },
    { id: 2, name: "Employee_SOP.pdf", status: "Ready" },
  ]);

  const [deleteTarget, setDeleteTarget] = useState(null);

  const openInChat = (docName) => {
    navigate(`/home?doc=${encodeURIComponent(docName)}`);
  };

  const deleteDocument = (id) => {
    setDocuments((prev) => prev.filter((doc) => doc.id !== id));
  };

  const navItem = (label, path, disabled = false) => {
    const active = location.pathname === path;

    return (
      <button
        disabled={disabled}
        onClick={() => !disabled && navigate(path)}
        className={`
          relative px-3 py-2 text-sm font-medium transition
          ${active ? "text-white" : "text-slate-300 hover:text-white"}
          ${disabled ? "opacity-40 cursor-not-allowed" : ""}
        `}
      >
        {label}
        {active && (
          <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-blue-400 to-purple-500 rounded-full" />
        )}
      </button>
    );
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 overflow-hidden">

      {/* Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-1/3 -left-1/4 w-[900px] h-[900px] bg-blue-600/20 rounded-full blur-[200px]" />
        <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] bg-purple-600/20 rounded-full blur-[200px]" />
      </div>

      {/* NAVBAR */}
  <header className="relative z-10 bg-white/10 backdrop-blur-xl border-b border-white/20">
  <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

    {/* Brand */}
    <div>
      <h1 className="text-lg font-semibold bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
        OpsMind AI
      </h1>
      <p className="text-center text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-400 to-indigo-400 tracking-wide">
        Context-Aware Corporate Knowledge Assistant
      </p>
    </div>

    {/* Navigation Tabs */}
    <nav className="hidden md:flex items-center gap-8">

      {[
        { label: "Workspace", path: "/home" },
        { label: "Documents", path: "/documents" },
        { label: "Settings", path: "/settings" },
      ].map((item) => (
        <button
          key={item.label}
          onClick={() => navigate(item.path)}
          className={`
            relative text-sm font-medium tracking-wide
            text-slate-300 hover:text-white
            transition-all duration-300
            after:absolute after:left-0 after:-bottom-1
            after:h-[2px] after:w-0
            after:bg-gradient-to-r after:from-blue-400 after:via-indigo-400 after:to-purple-500
            after:transition-all after:duration-300
            hover:after:w-full
            ${
              location.pathname === item.path
                ? "text-white after:w-full drop-shadow-[0_0_6px_rgba(99,102,241,0.6)]"
                : ""
            }
          `}
        >
          {item.label}
        </button>
      ))}
    </nav>

    {/* Right Section */}
    <div className="flex items-center gap-6">

      {/* Avatar */}
      <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center text-white font-semibold shadow-md">
        P
      </div>

      {/* Logout */}
      <button
        onClick={() => navigate("/")}
        className="
          relative text-sm font-medium
          text-slate-300 hover:text-white
          transition-all duration-300
          after:absolute after:left-0 after:-bottom-1
          after:h-[2px] after:w-0
          after:bg-gradient-to-r after:from-pink-500 after:to-red-500
          after:transition-all after:duration-300
          hover:after:w-full
          hover:drop-shadow-[0_0_6px_rgba(239,68,68,0.6)]
        "
      >
        Logout
      </button>

    </div>
  </div>
</header>



      {/* PAGE CONTENT */}
      <main className="relative z-10 max-w-6xl mx-auto px-6 py-12">

        <div className="mb-8">
          <h2 className="text-3xl font-semibold text-slate-100">
            Document History
          </h2>
          <p className="text-slate-400 mt-1 max-w-xl">
            Manage uploaded documents and reuse them inside chat sessions.
          </p>
        </div>

        {/* Document Cards */}
        <div className="space-y-5">
          {documents.length === 0 && (
            <div className="bg-white/5 border border-white/10 rounded-2xl p-10 text-center text-slate-400">
              No documents uploaded yet.
            </div>
          )}

          {documents.map((doc) => (
            <div
              key={doc.id}
              className="
                group relative flex items-center justify-between
                bg-white/10 backdrop-blur-xl
                border border-white/20
                rounded-2xl p-5
                transition-all duration-300
                hover:-translate-y-1
                hover:shadow-2xl hover:shadow-indigo-500/20
              "
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 via-indigo-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:via-indigo-500/10 group-hover:to-purple-500/10 transition" />

              <div className="relative">
                <p className="text-slate-100 font-medium">{doc.name}</p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="w-2 h-2 rounded-full bg-green-400" />
                  <p className="text-xs text-green-400">{doc.status}</p>
                </div>
              </div>

              <div className="relative flex items-center gap-3">
                <button
                  onClick={() => openInChat(doc.name)}
                  className="
                    px-4 py-2 rounded-lg text-sm font-medium text-white
                    bg-gradient-to-r from-blue-500 to-indigo-500
                    hover:from-indigo-500 hover:to-purple-500
                    shadow-md hover:shadow-indigo-500/30 transition
                  "
                >
                  Open in Chat
                </button>

                <button
                  onClick={() => setDeleteTarget(doc)}
                  className="
                    px-3 py-2 rounded-lg text-sm text-red-300
                    border border-red-400/30 hover:bg-red-500/10 transition
                  "
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* DELETE MODAL */}
      {deleteTarget && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="bg-slate-900 border border-white/20 rounded-2xl p-6 w-full max-w-sm shadow-2xl">
            <h3 className="text-lg font-semibold text-slate-100 mb-2">
              Delete Document
            </h3>

            <p className="text-sm text-slate-300 mb-6">
              Delete{" "}
              <span className="text-white font-medium">
                {deleteTarget.name}
              </span>
              ? This cannot be undone.
            </p>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setDeleteTarget(null)}
                className="px-4 py-2 text-sm rounded-lg text-slate-300 hover:text-white transition"
              >
                Cancel
              </button>

              <button
                onClick={() => {
                  deleteDocument(deleteTarget.id);
                  setDeleteTarget(null);
                }}
                className="
                  px-4 py-2 rounded-lg text-sm font-medium text-white
                  bg-gradient-to-r from-red-500 to-pink-500
                  hover:from-pink-500 hover:to-red-600 transition
                "
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DocumentHistory;
