import { useEffect, useRef, useState } from "react";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";

const ChatBox = ({ enabled = true }) => {
  const [messages, setMessages] = useState([]);
  const [aiTyping, setAiTyping] = useState(false);
  const [typingDots, setTypingDots] = useState("");

  const messagesContainerRef = useRef(null); // 👈 container ref

  // ✅ Scroll ONLY inside chat box (NOT PAGE)
  useEffect(() => {
    const container = messagesContainerRef.current;
    if (!container) return;

    container.scrollTo({
      top: container.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, aiTyping]);

  // Typing animation
  useEffect(() => {
    if (!aiTyping) {
      setTypingDots("");
      return;
    }

    const interval = setInterval(() => {
      setTypingDots((prev) => (prev === "..." ? "" : prev + "."));
    }, 400);

    return () => clearInterval(interval);
  }, [aiTyping]);

  const handleSend = (text) => {
    setMessages((prev) => [...prev, { sender: "user", text }]);
    setAiTyping(true);

    setTimeout(() => {
      setAiTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: "This response will be generated from uploaded enterprise documents."
        }
      ]);
    }, 1500);
  };

  return (
    <div className="flex flex-col h-[420px] rounded-2xl bg-white/5 border border-white/20 backdrop-blur-xl p-6">
      
      {/* Header */}
      <div className="mb-4 flex-shrink-0">
        <h3 className="text-lg font-semibold text-slate-100">
          Ask Your Documents
        </h3>
        <p className="text-sm text-slate-300 mt-1">
          Query uploaded SOPs, HR policies, and internal knowledge.
        </p>
      </div>

      {/* Messages Area */}
      <div
        ref={messagesContainerRef}
        className="flex-1 overflow-y-auto pr-2 mb-4 space-y-3"
      >
        {messages.length === 0 ? (
          <div className="h-full flex items-center justify-center text-sm text-slate-400 italic border border-dashed border-white/20 rounded-xl bg-white/5">
            Upload a document to begin asking questions.
          </div>
        ) : (
          <>
            {messages.map((msg, index) => (
              <ChatMessage key={index} sender={msg.sender} text={msg.text} />
            ))}

            {aiTyping && (
              <ChatMessage sender="ai" text={`Typing${typingDots}`} />
            )}
          </>
        )}
      </div>

      {/* Input */}
      <div className="pt-2 border-t border-white/10 flex-shrink-0">
        <ChatInput onSend={handleSend} disabled={!enabled} />
      </div>
    </div>
  );
};

export default ChatBox;





