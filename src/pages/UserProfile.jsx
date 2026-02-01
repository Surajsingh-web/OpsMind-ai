import { useNavigate } from "react-router-dom";
import { Pencil, ShieldCheck, FileText, Activity } from "lucide-react";

const UserProfile = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-slate-900 to-cyan-900 relative overflow-hidden">

      {/* ===== Ambient Glow ===== */}
      <div className="absolute inset-0">
        <div className="absolute top-[-20%] left-[-15%] w-[700px] h-[700px] bg-emerald-400/20 rounded-full blur-[160px]" />
        <div className="absolute bottom-[-25%] right-[-15%] w-[700px] h-[700px] bg-cyan-400/20 rounded-full blur-[160px]" />
      </div>

      {/* ===== TOP BAR ===== */}
      <header className="relative z-10 bg-white/10 backdrop-blur-xl border-b border-white/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div>
      <h1 className="text-xl font-semibold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            OpsMind AI
          </h1>
      <p className="text-xs text-slate-400">
        Context-Aware Corporate Knowledge Assistant
      </p>
    </div>


          <button
            onClick={() => navigate("/home")}
            className="text-sm text-slate-300 hover:text-white transition"
          >
            ← Back to Workspace
          </button>
        </div>
      </header>

      {/* ===== MAIN ===== */}
      <main className="relative z-10 max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* ===== LEFT PROFILE CARD ===== */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-xl">

          {/* Avatar */}
          <div className="flex flex-col items-center text-center">
            <div className="relative">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                E
              </div>

              <button className="absolute -bottom-2 -right-2 bg-white/20 p-2 rounded-full hover:bg-white/30 transition">
                <Pencil size={14} />
              </button>
            </div>

            <h2 className="mt-4 text-xl font-semibold text-white">
              Enterprise User
            </h2>
            <p className="text-slate-400 text-sm">
              enterprise@company.com
            </p>

            <span className="mt-3 inline-flex items-center gap-2 text-xs px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
              <ShieldCheck size={14} />
              Active Account
            </span>
          </div>

          {/* Info */}
          <div className="mt-8 space-y-4 text-sm">
            <div className="flex justify-between">
              <span className="text-slate-400">Role</span>
              <span className="text-white font-medium">Employee</span>
            </div>

            <div className="flex justify-between">
              <span className="text-slate-400">Department</span>
              <span className="text-white font-medium">Operations</span>
            </div>

            <div className="flex justify-between">
              <span className="text-slate-400">Account Type</span>
              <span className="text-white font-medium">Enterprise</span>
            </div>

            <div className="flex justify-between">
              <span className="text-slate-400">Member Since</span>
              <span className="text-white font-medium">Jan 2025</span>
            </div>
          </div>
        </div>

        {/* ===== RIGHT CONTENT ===== */}
        <div className="lg:col-span-2 space-y-8">

          {/* ===== STATS ===== */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { label: "Documents", value: "128", icon: FileText },
              { label: "AI Queries", value: "2,340", icon: Activity },
              { label: "Usage Score", value: "92%", icon: ShieldCheck },
            ].map((stat, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-6 text-center hover:-translate-y-1 transition"
              >
                <stat.icon className="mx-auto text-cyan-400 mb-3" size={22} />
                <p className="text-2xl font-semibold text-white">
                  {stat.value}
                </p>
                <p className="text-xs text-slate-400 mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* ===== ACTION PANEL ===== */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-xl">

            <h3 className="text-lg font-semibold text-white mb-4">
              Account Controls
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button className="py-3 rounded-xl font-medium text-white bg-gradient-to-r from-emerald-500 to-cyan-500 hover:to-sky-500 transition shadow-lg">
                Edit Profile
              </button>

              <button className="py-3 rounded-xl font-medium text-white bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-500 transition shadow-lg">
                Account Settings
              </button>

              <button className="py-3 rounded-xl font-medium text-white bg-gradient-to-r from-cyan-600 to-sky-600 hover:to-indigo-500 transition shadow-lg sm:col-span-2">
                Security & Access Logs
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default UserProfile;
