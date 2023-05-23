// components/Chatbot.tsx
import React, { useState, useEffect, useRef } from "react";
import "./Chatbot.css";
import backgroundImg from "../assets/gf.png";

interface Message {
  sender: string;
  content: string;
}

const Chatbot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "Matthew",
      content: "Test",
    },
  ]);
  const [userInput, setUserInput] = useState("");

  const messagesContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const addUserMessage = () => {
    if (userInput.trim()) {
      setMessages([...messages, { sender: "User", content: userInput }]);
      setUserInput("");
      addGFResponse();
    }
  };

  const addGFResponse = () => {
    // Call the chatbot logic here and update the response
    const gfResponse = "Test";
    setMessages([...messages, { sender: "GF", content: gfResponse }]);
  };

  const handleUserInput = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      addUserMessage();
    }
  };

  return (
    <div className="Chatbot" style={{ backgroundImage: `url(${backgroundImg})` }}>
      <div className="messages-container" ref={messagesContainerRef}>
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender.toLowerCase()}`}>
            <strong>{msg.sender}:</strong> {msg.content}
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          onKeyDown={handleUserInput}
          placeholder="Type your message here..."
        />
      </div>
    </div>
  );
};

export default Chatbot;