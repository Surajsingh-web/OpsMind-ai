import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const menuItems = [
    { label: "Workspace", path: "/home" },
    { label: "Settings", path: "/settings" },
    { label: "Profile", path: "/profile" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-slate-950 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* ===== LEFT : BRAND ===== */}
        <div>
          <h1 className="text-lg font-semibold text-white tracking-wide">
            OpsMind <span className="text-indigo-400">AI</span>
          </h1>
          <p className="text-[10px] text-slate-500">
            Corporate Knowledge Assistant
          </p>
        </div>

        {/* ===== RIGHT : 3 DOT MENU ===== */}
        <div className="relative">

          {/* 3 Dots Button */}
          <button
            onClick={() => setOpen(!open)}
            className="
              w-9 h-9 rounded-full
              flex items-center justify-center
              text-slate-300 hover:text-white
              hover:bg-white/10 transition
            "
          >
            ⋮
          </button>

          {/* Dropdown */}
          {open && (
            <div className="
              absolute right-0 mt-3 w-44
              bg-slate-900 border border-white/10
              rounded-xl shadow-xl overflow-hidden
              animate-fade-in
            ">
              {menuItems.map((item) => (
                <button
                  key={item.path}
                  onClick={() => {
                    navigate(item.path);
                    setOpen(false);
                  }}
                  className={`
                    w-full text-left px-4 py-2.5 text-sm
                    transition
                    ${
                      location.pathname === item.path
                        ? "bg-indigo-500/10 text-indigo-400"
                        : "text-slate-300 hover:bg-white/5 hover:text-white"
                    }
                  `}
                >
                  {item.label}
                </button>
              ))}

              {/* Divider */}
              <div className="h-px bg-white/10 my-1" />

              {/* Logout */}
              <button
                onClick={() => navigate("/")}
                className="
                  w-full text-left px-4 py-2.5 text-sm
                  text-red-400 hover:bg-red-500/10 transition
                "
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
