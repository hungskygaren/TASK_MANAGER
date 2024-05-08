import React from "react";

const ChatBot = () => {
  return (
    <div>
      {/* Thẻ df-messenger để nhúng chatbot */}
      <df-messenger
        intent="WELCOME"
        chat-title="HUNGAIU"
        agent-id="4ec3ff65-1528-4949-ba00-0a107c7a78b5"
        language-code="vi"
      ></df-messenger>
    </div>
  );
};

export default ChatBot;
