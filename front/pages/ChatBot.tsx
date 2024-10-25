import { useState } from 'react';
import '../src/App.css';

function ChatBot() {
  const [messages, setMessages] = useState([{ text: 'Hello! How can I help you today?', sender: 'bot' }]);
  const [userInput, setUserInput] = useState('');

  // Basic response function
  const getBotResponse = (input: string): string => {
    if (input.toLowerCase().includes('hello')) return "Hi there!";
    return "I'm here to help!";
  };

  const handleSendMessage = () => {
    if (userInput.trim() === '') return;

    // Add user message
    const newMessages = [...messages, { text: userInput, sender: 'user' }];
    setMessages(newMessages);

    // Generate bot response
    setTimeout(() => {
      const botMessage = getBotResponse(userInput);
      setMessages([...newMessages, { text: botMessage, sender: 'bot' }]);
    }, 500);

    setUserInput(''); // Clear input
  };

  return (
    <div className="chat-container">
      <div className="chat-box">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender}`}>
            {message.text}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        placeholder="Type a message..."
        onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
      />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
}

export default ChatBot;
