import React, { useState, useEffect, useRef } from "react";
import "./Chatbot.css";
import backgroundImg from "../assets/gf.png";

interface Message {
  sender: string;
  content: string;
}

const apiBasePath = import.meta.env.VITE_API_BASE_PATH;

const Chatbot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [userInput, setUserInput] = useState("");

  const messagesContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  }, [messagesContainerRef]);

  useEffect(() => {
    addGFResponse("Welcome to the chat!");
  }, []);

  const fetchGFResponse = async (messageContent: string) => {
    try {
      const response = await fetch(`${apiBasePath}/get-gf-response`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ messageContent }),
      });

      if (response.ok) {
        const data = await response.json();
        addGFResponse(data.gfResponse);
      } else {
        console.error("Error fetching GF response");
      }
    } catch (error) {
      console.error("Error fetching GF response:", error);
    }
  };

  const addUserMessage = () => {
    if (userInput.trim()) {
      setMessages([...messages, { sender: "User", content: userInput }]);
      setUserInput("");
      setTimeout(() => {
        fetchGFResponse(userInput);
      }, 500);
    }
  };

//   const addUserMessage = () => {
//     if (userInput.trim()) {
//       setMessages([...messages, { sender: "User", content: userInput }]);
//       setUserInput("");
//       setTimeout(() => {
//         addGFResponse();
//       }, 500);
//     }
//   };

  const addGFResponse = (response: string = "Test") => {
    setMessages((prevMessages) => [...prevMessages, { sender: "GF", content: response }]);
  };

  const handleUserInput = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      addUserMessage();
    }
  };

  return (
    <div className="Chatbot" style={{ backgroundImage: `url(${backgroundImg})` }}>
      <div className="messages-container" ref={messagesContainerRef}>
        {messages.slice(0).reverse().map((msg, index) => (
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