import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import "../styles/ChatWindow.scss";

// Initialize socket connection
const socket = io("https://electronics-gadgets-serv.vercel.app");

const ChatWindow = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [summary, setSummary] = useState("");

  useEffect(() => {
    socket.on("chat message", (msg) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
    });

    socket.on("chat history", (history) => {
      setMessages(history);
    });

    return () => {
      socket.off("chat message");
      socket.off("chat history");
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input) {
      socket.emit("chat message", input);
      socket.emit("system response", input);
      setInput("");
    }
  };

  const generateSummary = () => {
    const totalMessages = messages.length;
    const firstMessage = messages[0]?.text || "";
    const lastMessage = messages[messages.length - 1]?.text || "";
    setSummary(
      `Total Messages: ${totalMessages}\nFirst Message: ${firstMessage}\nLast Message: ${lastMessage}`
    );
  };

  const handleClearChat = () => {
    socket.emit("clear chat");
    setMessages([]);
    setSummary("");
  };

  return (
    <div className="container">
      <div className="navbar">
        <h1>Interactive Real-Time Chat</h1>
      </div>
      <div className="chat-box border rounded p-3 mb-3">
        <div className="messages mb-3">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`message ${msg.id === "system" ? "text-success" : ""}`}
            >
              <strong>{msg.id === "system" ? "System" : msg.id}:</strong>{" "}
              {msg.text}
            </div>
          ))}
        </div>
        <form onSubmit={handleSubmit} className="form-inline">
          <input
            type="text"
            className="form-control mr-2"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message"
          />
          <button type="submit" className="btn btn-primary">
            Send
          </button>
        </form>
      </div>
      <div className="button-group">
        <button onClick={generateSummary} className="btn btn-info">
          Generate Summary
        </button>
        <button onClick={handleClearChat} className="btn btn-danger">
          Clear Chat
        </button>
      </div>
      {summary && (
        <div className="summary mt-3 border rounded p-3">
          <h4>Chat Summary</h4>
          <pre>{summary}</pre>
        </div>
      )}
    </div>
  );
};

export default ChatWindow;
