import React, { useState, useRef, useEffect } from "react";
import "./chatbot.css"; 
import "./chatbot-button.css"; 
import ChatBotIcon from "./ChatBotIcon";
import ChatForm from "./ChatForm";
import ChatMessage from "./ChatMessage";

const Chatbot = () => {
  const [chatHistory, setChatHistory] = useState([]);
  const [showChatBot, setShowChatBot] = useState(false);
  const chatBodyRef = useRef();

  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@24,400,1,0";
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  const generateBotResponse = async (history) => {
    console.log("API URL:", process.env.REACT_APP_API_URL);
    const updateHistory = (text) => {
      setChatHistory((prev) => [
        ...prev.filter((msg) => msg.text !== "Thinking..."),
        { role: "model", text },
      ]);
    };

    history = history.map(({ role, text }) => ({ role, parts: [{ text }] }));

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ contents: history }),
    };

    try {
      console.log("Sending request to API...");
      const response = await fetch(process.env.REACT_APP_API_URL, requestOptions);

      if (!response.ok) {
        throw new Error(`API request failed with status: ${response.status}`);
      }

      const data = await response.json();
      console.log("API response data:", data);

      if (
        !data ||
        !data.candidates ||
        !data.candidates[0] ||
        !data.candidates[0].content ||
        !data.candidates[0].content.parts
      ) {
        throw new Error("Invalid API response format or missing parts");
      }

      const apiResponseText = data.candidates[0].content.parts[0].text
        .replace(/\*\*(.*?)\*\*/g, "$1") 
        .trim();

      updateHistory(apiResponseText);
    } catch (error) {
      console.error("Error fetching API:", error.message);
    }
  };

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTo({ top: chatBodyRef.current.scrollHeight, behavior: "smooth" });
    }
  }, [chatHistory]);

  return (
    <>
      {/* Chatbot Toggle Button */}
      <button
        onClick={() => setShowChatBot((prev) => !prev)}
        className="chat-toggle-button"
      >
        💬
      </button>

      {/* Chatbot Popup */}
      {showChatBot && (
        <div className="container show-chatbot">
          <div className="chatbot-popup">
            <div className="chat-header">
              <div className="header-info">
                <ChatBotIcon />
                <h2 className="logo-text">Chatbot</h2>
              </div>
              <button onClick={() => setShowChatBot(false)} className="material-symbols-rounded">
                keyboard_arrow_down
              </button>
            </div>

            <div ref={chatBodyRef} className="chat-body">
              <div className="message bot-message">
                <ChatBotIcon />
                <p className="message-text">
                  Hey There! <br /> How can I help you today?
                </p>
              </div>

              {chatHistory.map((chat, index) => (
                <ChatMessage key={index} chat={chat} />
              ))}
            </div>

            <div className="chat-footer">
              <ChatForm
                chatHistory={chatHistory}
                setChatHistory={setChatHistory}
                generateBotResponse={generateBotResponse}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
