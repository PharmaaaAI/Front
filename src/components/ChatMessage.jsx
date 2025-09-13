import React from "react";
import ReactMarkdown from "react-markdown";

const ChatMessage = ({ message, isUser }) => {
  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} mb-4`}>
      <div
        className={`rounded-lg px-4 py-2 ${
          isUser
            ? "bg-blue-500 text-white"
            : "bg-gray-200 text-gray-800"
        }`}
      >
        {isUser ? <p>{message}</p> : <ReactMarkdown>{message}</ReactMarkdown>}
      </div>
    </div>
  );
};

export default ChatMessage;
