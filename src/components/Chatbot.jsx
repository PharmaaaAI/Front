import React, { useState, useContext, useEffect } from "react";
import { getAiRecommendations } from "../api/chat";
import { AuthContext } from "../context/AuthContext";
import ChatMessage from "./ChatMessage";
import RecommendedProduct from "./RecommendedProduct";

const Chatbot = () => {
  const { token } = useContext(AuthContext);
  const [messages, setMessages] = useState(
    JSON.parse(sessionStorage.getItem("chatMessages")) || []
  );
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    sessionStorage.setItem("chatMessages", JSON.stringify(messages));
  }, [messages]);

  const handleSend = async () => {
    if (input.trim() === "") return;

    const userMessage = { text: input, isUser: true };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    const data = await getAiRecommendations(input, token);

    setLoading(false);

    if (data.success) {
      const aiMessage = {
        text: data.message,
        isUser: false,
        recommendations: data.recommendations,
      };
      setMessages((prev) => [...prev, aiMessage]);
    } else {
      const errorMessage = {
        text: "Sorry, I'm having trouble getting recommendations right now.",
        isUser: false,
      };
      setMessages((prev) => [...prev, errorMessage]);
    }
  };
  return (
    <div className="fixed bottom-20 right-4 w-96 h-[28rem] bg-white border-1 border-gray-400 rounded-lg shadow-lg flex flex-col">
      <div className="p-4 border-b">
        <h2 className="text-lg font-semibold">PharmaAI Assistant</h2>
      </div>
      <div className="flex-1 p-4 overflow-y-auto">
        {messages.map((msg, index) => (
          <div key={index}>
            <ChatMessage message={msg.text} isUser={msg.isUser} />
            {msg.recommendations && (
              <div className="ml-8">
                {msg.recommendations.map((product) => (
                  <RecommendedProduct key={product._id} product={product} />
                ))}
              </div>
            )}
          </div>
        ))}
        {loading && <ChatMessage message="..." isUser={false} />}
      </div>
      <div className="p-4 border-t flex">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          className="flex-1 p-2 border rounded-lg"
          placeholder="Ask me anything..."
        />
        <button
          onClick={handleSend}
          className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
