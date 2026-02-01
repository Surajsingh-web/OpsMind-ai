import { useState } from "react";

const ChatInput = ({ onSend, disabled }) => {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (!message.trim() || disabled) return;
    onSend(message);
    setMessage("");
  };

  return (
    <div
      className="
        flex items-center gap-3 mt-4
        bg-white/5
        border border-white/20
        rounded-xl
        px-4 py-3
        backdrop-blur-xl
        transition-all duration-300
        hover:bg-white/10
        hover:shadow-lg hover:shadow-indigo-500/20
      "
    >
      {/* Input */}
      <input
        type="text"
        placeholder={
          disabled
            ? "Upload a document to enable chat..."
            : "Ask a question from uploaded documents..."
        }
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSend()}
        disabled={disabled}
        className="
          flex-1
          bg-transparent
          text-sm text-slate-100
          placeholder:text-slate-400
          focus:outline-none
          disabled:cursor-not-allowed
        "
      />

      {/* Send Button */}
      <button
        onClick={handleSend}
        disabled={disabled || !message.trim()}
        className="
          px-5 py-2.5
          rounded-xl
          text-sm font-medium text-white
          bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500
          shadow-lg shadow-indigo-500/30
          transition-all duration-300
          hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500
          hover:shadow-purple-500/40
          active:scale-[0.97]
          disabled:opacity-40
          disabled:cursor-not-allowed
        "
      >
        Send
      </button>
    </div>
  );
};

export default ChatInput;
