import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import PdfUpload from "../components/upload/PdfUpload";
import ChatBox from "../components/chat/ChatBox";

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const [chatEnabled, setChatEnabled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="relative min-h-screen bg-[#05070f] overflow-hidden">

      {/* ===== SOFT AI BACKGROUND ===== */}
      <div className="absolute inset-0">
        <div className="absolute -top-1/3 -left-1/4 w-[900px] h-[900px] bg-cyan-400/10 rounded-full blur-[220px]" />
        <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] bg-fuchsia-500/10 rounded-full blur-[220px]" />
        <div className="absolute bottom-[-40%] left-1/3 w-[1000px] h-[1000px] bg-indigo-400/10 rounded-full blur-[240px]" />
      </div>

     

          {/* ===== NAVBAR ===== */}
<header className="relative z-50 bg-white/5 backdrop-blur-xl border-b border-white/10">
  <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

    {/* LEFT TEXT */}
     <div>
      <h1 className="text-xl font-semibold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            OpsMind AI
          </h1>
      <p className="text-xs text-slate-400">
        Context-Aware Corporate Knowledge Assistant
      </p>
    </div>


    {/* RIGHT MENU */}
    <div className="relative">

      {/* 3 DOT BUTTON */}
      <button
        type="button"
        onClick={() => setMenuOpen((prev) => !prev)}
        className="
          w-9 h-9 rounded-full
          flex items-center justify-center
          text-slate-300 hover:text-white
          hover:bg-white/10 transition
        "
      >
        ⋮
      </button>

      {/* DROPDOWN */}
      {menuOpen && (
        <div
          className="
            absolute right-0 mt-3 w-48
            bg-[#0b1020]
            border border-white/10
            rounded-xl shadow-2xl
            overflow-hidden
          "
        >

          {/* WORKSPACE */}
          <button
            onClick={() => {
              navigate("/home");
              setMenuOpen(false);
            }}
            className={`
              w-full px-4 py-2.5 text-left text-sm
              ${
                location.pathname === "/home"
                  ? "bg-teal-400/10 text-teal-300"
                  : "text-slate-300 hover:bg-white/5 hover:text-white"
              }
            `}
          >
            Workspace
          </button>

          {/* SETTINGS */}
          <button
            onClick={() => {
              navigate("/settings");
              setMenuOpen(false);
            }}
            className={`
              w-full px-4 py-2.5 text-left text-sm
              ${
                location.pathname === "/settings"
                  ? "bg-teal-400/10 text-teal-300"
                  : "text-slate-300 hover:bg-white/5 hover:text-white"
              }
            `}
          >
            Settings
          </button>

          {/* PROFILE */}
          <button
            onClick={() => {
              navigate("/profile");
              setMenuOpen(false);
            }}
            className="w-full px-4 py-2.5 text-left text-sm text-slate-300 hover:bg-white/5 hover:text-white"
          >
            Profile
          </button>

          <div className="h-px bg-white/10 my-1" />

          {/* LOGOUT */}
          <button
            onClick={() => {
              navigate("/");
              setMenuOpen(false);
            }}
            className="w-full px-4 py-2.5 text-left text-sm text-red-400 hover:bg-red-500/10"
          >
            Logout
          </button>

        </div>
      )}
    </div>
  </div>
</header>


      {/* ===== MAIN CONTENT ===== */}
      <main className="relative z-10 max-w-6xl mx-auto px-6 py-12 space-y-12">

        {/* INTRO */}
        <section>
          <h2 className="text-2xl font-semibold text-slate-100">
            Knowledge Workspace
          </h2>
          <p className="text-slate-400 mt-2 max-w-2xl leading-relaxed">
            Upload enterprise documents and interact with them using secure,
            AI-powered contextual intelligence for corporate workflows.
          </p>
        </section>

        {/* CARDS */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* UPLOAD */}
          <div className="
            bg-white/10 backdrop-blur-xl
            border border-white/15
            rounded-2xl p-6
            shadow-xl
            hover:shadow-cyan-500/20
            transition-all
          ">
            <PdfUpload onUploadSuccess={() => setChatEnabled(true)} />
          </div>

          {/* CHAT */}
          <div className="
            bg-white/10 backdrop-blur-xl
            border border-white/15
            rounded-2xl p-6
            shadow-xl
            hover:shadow-fuchsia-500/20
            transition-all
          ">
            <ChatBox enabled={chatEnabled} />
          </div>

        </section>
      </main>
    </div>
  );
};

export default Home;
