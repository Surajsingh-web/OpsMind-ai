import { useEffect, useState } from "react";
import LoginForm from "../components/auth/LoginForm";

const Login = () => {
  const productName = "OpsMind AI";
  const [letters, setLetters] = useState([]);

  useEffect(() => {
    const splitLetters = productName.split("");
    let displayed = [];
    let i = 0;

    const interval = setInterval(() => {
      displayed.push(splitLetters[i]);
      setLetters([...displayed]);
      i++;
      if (i >= splitLetters.length) clearInterval(interval);
    }, 120);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#05070f] px-4">

      {/* ===== CYBER BACKGROUND GLOW ===== */}
      <div className="absolute inset-0">
        <div className="absolute -top-1/3 -left-1/4 w-[900px] h-[900px] bg-teal-400/15 rounded-full blur-[220px]" />
        <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] bg-fuchsia-500/15 rounded-full blur-[220px]" />
        <div className="absolute bottom-[-40%] left-1/3 w-[1000px] h-[1000px] bg-cyan-400/10 rounded-full blur-[240px]" />
      </div>

      {/* ===== CONTENT ===== */}
      <div className="relative z-10 flex flex-col items-center">

        {/* Product Name */}
        <h1 className="text-5xl md:text-6xl font-extrabold text-center mb-3 flex flex-wrap justify-center">
          {letters.map((letter, index) => (
            <span
              key={index}
             className="
  inline-block text-transparent bg-clip-text
  bg-[linear-gradient(90deg,#14f1d9,#00c6ff,#d946ef,#14f1d9)]
  bg-[length:300%_300%]
  animate-gradient-flow
  hover:scale-110
  transition-transform duration-300
  glow-letter animate-slide-in relative
"

              style={{ animationDelay: `${index * 0.12}s` }}
            >
              {letter === " " ? "\u00A0" : letter}
              <span className="absolute inset-0 bg-white/20 opacity-0 animate-shine pointer-events-none" />
            </span>
          ))}
        </h1>

        {/* Tagline */}
        <p className="
text-center text-sm font-medium
bg-clip-text text-transparent
bg-gradient-to-r from-teal-400 via-cyan-400 to-fuchsia-400
tracking-wide mb-10
drop-shadow-[0_0_12px_rgba(45,212,191,0.25)]
hover:from-fuchsia-400 hover:via-cyan-300 hover:to-teal-300
transition-all duration-500
"
>
          Context-Aware Corporate Knowledge Assistant
        </p>

        {/* Login Card */}
       
      <div className="login-card relative p-8 w-full max-w-md rounded-2xl backdrop-blur-3xl transition-all duration-500">
  <LoginForm />
</div>

      </div>

      {/* ===== ANIMATIONS ===== */}
      <style>{`
      @keyframes gradientFlow {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.animate-gradient-flow {
  animation: gradientFlow 6s ease infinite;
}


      
      `}</style>
    </div>
  );
};

export default Login;
