import React, { useState ,useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Chat() {
    
    const param = useParams();
    const recieverid = param.id;
    const [user_id, setUser_id] = useState(localStorage.getItem('user_id'));
    
    const [selectedChat, setSelectedChat] = useState(null);
    const [messages, setMessages] = useState([]);
    const [chats, setchats] = useState([]);

    // Dummy chat data
 
    const getchats = async () => {
        console.log(user_id);
        try {
            const response = await fetch(`http://localhost:5000/chat/getchats/${user_id}`);
            if (response.ok) {
                const data = await response.json();

                setchats(data.data);
            } else {
                console.error('Failed to fetch chats:', response.status);
            }
        } catch (error) {
            console.error('Error fetching chats:', error);
        }
    };

    useEffect(() => {
        getchats();
    }, []); //
    
    
    // Dummy messages data
    const initialMessages = [
        { id: 1, sender: 'John', text: 'Hello!' },
        { id: 2, sender: 'You', text: 'Hi there!' },
    ];

    const handleChatSelection = (chatId) => {
        setSelectedChat(chatId);
        // Simulating loading older messages
        setMessages(initialMessages);
    };

    const sendMessage = (text) => {
        if (text.trim() !== '') {
            const newMessage = { id: messages.length + 1, sender: 'You', text };
            setMessages([...messages, newMessage]);
        }
    };

    return (
        <div className="flex h-screen text-black bg-white">
            {/* Chat List */}
            <div className="w-1/4 shadow-lg ring-1 ring-black ring-opacity-5 ring-offset-4 ring-offset-white ">
                {chats.map((chat) => (
                    <div key={chat.chatid} onClick={() => handleChatSelection(chat.chatid)} className="p-4 m-4 text-black rounded shadow-lg cursor-pointer hover:bg-grrounded-sm hover:bg-green-300 ring-1 ring-black ring-opacity-5 ring-offset-4 ring-offset-white">
                        <div className="font-semibold text-black ">{chat.business_name}</div>
                        <div className="text-black">{chat.message}</div>
                    </div>
                ))}
            </div>
            {/* Chat Window */}
            <div className="w-3/4 bg-[rgb(246 247 246)] bg-[#ece5dd]">
                <div className="h-full overflow-y-scroll" style={{ maxHeight: 'calc(100vh - 5rem)' }}>
                    {selectedChat && (
                        <div>
                            {messages.map((message) => (
                                <div key={message.id} className={`p-2 ${message.sender === 'You' ? 'text-right' : ''}`}>
                                    <div className="inline-block max-w-xs p-2 text-white bg-green-500 rounded-lg">{message.text}</div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                <div className="p-4 bg-green-200 shadow-lg ring-1 ring-black ring-opacity-5 ring-offset-4 ">
                    <input
                        type="text"
                        placeholder="Type your message..."
                        className="p-2 border border-white rounded-l-lg w-[90%]"
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                sendMessage(e.target.value);
                                e.target.value = '';
                            }
                        }}
                    />
                    <button onClick={() => sendMessage(document.querySelector('input[type="text"]').value)} className="px-4 py-2 text-white bg-green-500 rounded-r-lg hover:bg-green-600 w-[10%]">
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Chat;
