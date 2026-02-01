const ChatMessage = ({ sender, text }) => {
  const isUser = sender === "user";

  return (
    <div
      className={`flex mb-4 ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`
          max-w-[70%]
          px-4 py-2.5
          rounded-2xl
          text-sm leading-relaxed
          break-words
          backdrop-blur-xl
          transition-all duration-300
          hover:scale-[1.02]

          ${
            isUser
              ? `
                bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500
                text-white
                shadow-lg shadow-indigo-500/30
                hover:shadow-purple-500/40
              `
              : `
                bg-white/10
                border border-white/20
                text-slate-100
                shadow-lg shadow-black/20
                hover:bg-white/15
              `
          }
        `}
      >
        {text}
      </div>
    </div>
  );
};

export default ChatMessage;
