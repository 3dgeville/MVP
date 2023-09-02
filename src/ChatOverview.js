import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const styles = {
    container: {
        backgroundColor: '#D3D3D3',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px'
    },
    chatList: {
        width: '80%', 
        marginTop: '20px'
    },
    chatItem: {
        backgroundColor: 'white',
        padding: '15px',
        borderRadius: '5px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        margin: '10px 0',
        display: 'flex',
        justifyContent: 'space-between',
        cursor: 'pointer'
    },
    chatName: {
        color: 'black'
    },
    lastMessage: {
        color: '#888',
        fontSize: '12px'
    },
    newChatButton: {
        backgroundColor: '#D3D3D3',
        border: 'none',
        padding: '10px 20px',
        borderRadius: '4px',
        color: 'black',
        cursor: 'pointer',
        marginTop: '20px'
    }
};

function ChatOverview() {
    const navigate = useNavigate();
    const [chats, setChats] = useState([
        {id: '1', chatName: 'General', lastMessage: 'Hi there!'},
        {id: '2', chatName: 'Tech', lastMessage: 'How does this work?'},
    ]);

    const navigateToChat = (chatId) => {
        navigate(`/chat/${chatId}`);
    };

    const goToNewChat = () => {
        navigate('/chat');  // Navigate to the Chat component when "New Chat" is clicked.
    };

    return (
        <div style={styles.container}>
            <h1>Chats</h1>
            <div style={styles.chatList}>
                {chats.map((chat, index) => (
                    <div 
                        key={index} 
                        style={styles.chatItem} 
                        onClick={() => navigateToChat(chat.id)}
                    >
                        <span style={styles.chatName}>{chat.chatName}</span>
                        <span style={styles.lastMessage}>{chat.lastMessage}</span>
                    </div>
                ))}
            </div>
            <button style={styles.newChatButton} onClick={goToNewChat}>New Chat</button>
        </div>
    );
}

export default ChatOverview;

