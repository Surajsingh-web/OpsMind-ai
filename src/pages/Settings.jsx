import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";


import Navbar from "../components/layout/Navbar";


const Settings = () => {
   const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const cardBase =
    "bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-xl transition-all duration-300 hover:shadow-indigo-500/25 hover:-translate-y-[2px]";

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 to-slate-700 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute -top-1/3 -left-1/4 w-[900px] h-[900px] bg-blue-500/20 rounded-full blur-[180px]" />
        <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] bg-purple-500/20 rounded-full blur-[180px]" />
      </div>

   {/* ===== NAVBAR ===== */}
<header className="relative z-50 bg-white/10 backdrop-blur-xl border-b border-white/20">
  <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

    {/* LEFT BRAND */}
    <div>
      <h1 className="text-xl font-semibold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            OpsMind AI
          </h1>
      <p className="text-xs text-slate-400">
        Context-Aware Corporate Knowledge Assistant
      </p>
    </div>

    {/* RIGHT : 3 DOT MENU */}
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
          {/* Workspace */}
          <button
            onClick={() => {
              navigate("/home");
              setMenuOpen(false);
            }}
            className={`
              w-full px-4 py-2.5 text-left text-sm
              ${
                location.pathname === "/home"
                  ? "bg-indigo-500/10 text-indigo-400"
                  : "text-slate-300 hover:bg-white/5 hover:text-white"
              }
            `}
          >
            Workspace
          </button>

          {/* Settings */}
          <button
            onClick={() => {
              navigate("/settings");
              setMenuOpen(false);
            }}
            className={`
              w-full px-4 py-2.5 text-left text-sm
              ${
                location.pathname === "/settings"
                  ? "bg-indigo-500/10 text-indigo-400"
                  : "text-slate-300 hover:bg-white/5 hover:text-white"
              }
            `}
          >
            Settings
          </button>

          {/* Profile */}
          <button
            onClick={() => {
              navigate("/profile");
              setMenuOpen(false);
            }}
            className="
              w-full px-4 py-2.5 text-left text-sm
              text-slate-300 hover:bg-white/5 hover:text-white
            "
          >
            Profile
          </button>

          <div className="h-px bg-white/10 my-1" />

          {/* Logout */}
          <button
            onClick={() => {
              navigate("/");
              setMenuOpen(false);
            }}
            className="
              w-full px-4 py-2.5 text-left text-sm
              text-red-400 hover:bg-red-500/10
            "
          >
            Logout
          </button>
        </div>
      )}
    </div>
  </div>
</header>


      {/* ===== CONTENT ===== */}
      <main className="relative z-10 max-w-6xl mx-auto px-6 py-10 space-y-10">

        {/* Intro */}
        <section>
          <h2 className="text-2xl font-semibold text-slate-100">Settings</h2>
          <p className="text-slate-300 mt-1">
            Manage your profile, AI preferences, and security options.
          </p>
        </section>

        {/* SETTINGS GRID */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Profile */}
          <div className={cardBase}>
            <h3 className="text-lg font-semibold text-slate-100 mb-4">
              Profile Information
            </h3>

            <div className="space-y-4 text-sm">
              <div>
                <p className="text-slate-400">Name</p>
                <p className="text-slate-100 font-medium">Enterprise User</p>
              </div>
              <div>
                <p className="text-slate-400">Email</p>
                <p className="text-slate-100 font-medium">
                  enterprise@company.com
                </p>
              </div>
              <div>
                <p className="text-slate-400">Role</p>
                <p className="text-slate-100 font-medium">Employee</p>
              </div>
            </div>
          </div>

          {/* AI Preferences */}
          <div className={cardBase}>
            <h3 className="text-lg font-semibold text-slate-100 mb-4">
              AI Preferences
            </h3>

            <div className="space-y-4 text-sm text-slate-300">
              {[
                "Context-aware answers",
                "Use document priority",
                "Verbose responses",
              ].map((label, i) => (
                <label
                  key={i}
                  className="flex items-center justify-between"
                >
                  <span>{label}</span>
                  <input
                    type="checkbox"
                    defaultChecked={i < 2}
                    className="accent-indigo-500 scale-110"
                  />
                </label>
              ))}
            </div>
          </div>

          {/* Security */}
          <div className={cardBase}>
            <h3 className="text-lg font-semibold text-slate-100 mb-4">
              Security
            </h3>

            <div className="space-y-4">
              <button
                className="
                  w-full py-2.5 rounded-xl
                  bg-gradient-to-r from-indigo-500 to-purple-500
                  text-white font-medium
                  hover:from-purple-500 hover:to-pink-500
                  shadow-lg shadow-indigo-500/30
                  transition-all active:scale-[0.97]
                "
              >
                Change Password
              </button>

              <button
                className="
                  w-full py-2.5 rounded-xl
                  bg-white/10 border border-white/20
                  text-slate-200
                  hover:bg-white/20
                  transition-all active:scale-[0.97]
                "
              >
                Enable Two-Factor Authentication
              </button>
            </div>
          </div>

          {/* System */}
          <div className={cardBase}>
            <h3 className="text-lg font-semibold text-slate-100 mb-4">
              System
            </h3>

            <div className="space-y-3 text-sm text-slate-300">
              <p>
                Version:{" "}
                <span className="text-slate-100 font-medium">v1.0.0</span>
              </p>
              <p>
                Status:{" "}
                <span className="text-green-400 font-medium">Operational</span>
              </p>
              <p>
                Last Sync:{" "}
                <span className="text-slate-100 font-medium">Just now</span>
              </p>
            </div>
          </div>

        </section>
      </main>
    </div>
  );
};

export default Settings;
