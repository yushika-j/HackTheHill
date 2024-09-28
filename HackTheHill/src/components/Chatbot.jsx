// src/components/Chatbot.jsx
import React, { useState } from 'react';

const Chatbot = () => {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([]);

    const handleInputChange = (e) => {
        setInput(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.trim()) {
            setMessages([...messages, { text: input, type: 'user' }]);
            // Here you would typically call your chatbot API
            // For now, let's simulate a response
            setTimeout(() => {
                setMessages((prevMessages) => [
                    ...prevMessages,
                    { text: "This is a simulated response.", type: 'bot' }
                ]);
            }, 1000);
            setInput('');
        }
    };

    return (
        <div>
            <h2>Chatbot</h2>
            <div className="chat-window">
                <div className="messages">
                    {messages.map((msg, index) => (
                        <div key={index} className={msg.type}>
                            {msg.text}
                        </div>
                    ))}
                </div>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={input}
                        onChange={handleInputChange}
                        placeholder="Type your message..."
                    />
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
    );
};

export default Chatbot;
