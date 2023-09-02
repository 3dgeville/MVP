import React, { useState, useEffect } from 'react';
import './Chat.css';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const [selectedMessageId, setSelectedMessageId] = useState(null);
  
  useEffect(() => {
    const messageList = document.querySelector('.messageList');
    if (messageList) {
      messageList.scrollTop = messageList.scrollHeight;
    }
  }, [messages]);

  
  const addMessage = (type) => {
	const senderName = type === 'main' ? 'John' : 'Jane';
  
	if (inputText.trim() !== '') {
	  const newMessage = {
		id: Date.now(),  // Use timestamp as a unique ID
		content: `${senderName}: ${inputText}`,
		type,
		secondaryMessages: [],
	  };
  
	  if (type === 'secondary' && selectedMessageId !== null) {
		// Deep copy messages state
		const updatedMessages = JSON.parse(JSON.stringify(messages));
		// Find the parent message and add the secondary message
		const parentMessage = updatedMessages.find(m => m.id === selectedMessageId);
		if (parentMessage) {
		  parentMessage.secondaryMessages.push(newMessage);
		}
		setMessages(updatedMessages);
	  } else {
		setMessages(prevMessages => [...prevMessages, newMessage]);
	  }
  
	  setInputText('');
	}
  };
  
  const selectMessage = (messageId) => {
    if (selectedMessageId === messageId) {
      setSelectedMessageId(null); // Deselect the current message
    } else {
      setSelectedMessageId(messageId);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    selectedMessageId ? addMessage('secondary') : addMessage('main');
  };

  return (
    <div className="container">
      <div className="messageList">
        {messages.map((message) => (
          <div key={message.id} className="messageContainer">
            <div
              className={`messageBubble ${message.type === 'main' ? 'mainMessageBubble' : 'secondaryMessageBubble'}`}
              onClick={() => selectMessage(message.id)}
            >
              {message.content}
            </div>
            {/* Display secondary messages if this main message is selected */}
            {selectedMessageId === message.id && message.secondaryMessages.map((secondaryMessage, index) => (
              <div
                key={index}
                className="messageBubble secondaryMessageBubble"
              >
                {secondaryMessage.content}
              </div>
            ))}
          </div>
        ))}
      </div>
      <form className="inputContainer" onSubmit={handleSubmit}>
        <input
          type="text"
          className="input"
          placeholder="Write a message..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button type="submit" style={{ display: 'none' }}>Submit</button>
      </form>
    </div>
  );
};

export default Chat;
