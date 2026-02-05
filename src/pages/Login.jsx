import { useEffect, useState } from "react";
import LoginForm from "../components/auth/LoginForm";

const Login = () => {
  const productName = "OpsMind AI";
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 300);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0f1f] px-4">

      {/* ================= BACKGROUND GRADIENT ANIMATION ================= */}
      <div className="absolute inset-0 animate-bgMove bg-[radial-gradient(circle_at_20%_30%,rgba(20,241,217,0.25),transparent_40%),radial-gradient(circle_at_80%_60%,rgba(217,70,239,0.25),transparent_40%)]" />

      {/* ================= FLOATING PARTICLES ================= */}
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-cyan-400/40 rounded-full animate-float"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${i * 0.6}s`,
          }}
        />
      ))}

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 flex flex-col items-center w-full">

        {/* LOGO / TITLE */}
        <h1
          className={`text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-400 to-fuchsia-500 mb-3 transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {productName}
        </h1>

        {/* TAGLINE */}
        <p className="text-slate-400 text-sm tracking-wide mb-10">
          Context-Aware Corporate Knowledge Assistant
        </p>

        {/* ================= LOGIN CARD ================= */}
        <div
          className={`
          w-full max-w-md p-10 rounded-3xl
          bg-white/5 backdrop-blur-2xl
          border border-white/10
          shadow-[0_0_40px_rgba(0,255,255,0.12)]
          transition-all duration-700
          hover:scale-[1.02]
          ${visible ? "opacity-100" : "opacity-0"}
        `}
        >
          <LoginForm />
        </div>
      </div>

      {/* ================= ANIMATIONS ================= */}
      <style>{`
        @keyframes bgMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .animate-bgMove {
          background-size: 200% 200%;
          animation: bgMove 15s ease infinite;
        }

        @keyframes float {
          0% { transform: translateY(0px); opacity: 0.6; }
          50% { transform: translateY(-25px); opacity: 1; }
          100% { transform: translateY(0px); opacity: 0.6; }
        }

        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Login;
