import React, { useState } from 'react';
// import Akash2 from '../images/Akash2.jpg';
import Akash2 from '../Pages/images2/Akash2.jpg';

function ChatMessage({ name, message, isSentByUser }) {
  return (
    <div className={`flex items-center ${isSentByUser ? 'justify-end' : 'justify-start'} mb-4`}>
      {!isSentByUser && (
        <div className="flex-shrink-0">
          <img className="h-10 w-10 rounded-full" src='https://via.placeholder.com/150/33FF57/FFFFFF?text=Jane' alt="User Avatar" />
        </div>
      )}
      <div className={`${isSentByUser ? 'ml-3' : 'mr-3'}`}>
        <p className="text-sm font-medium text-gray-900">{name}</p>
        <p className="text-sm text-gray-700">{message}</p>
      </div>
      {isSentByUser && (
        <div className="flex-shrink-0">
          <img className="h-10 w-10 rounded-full" src={Akash2} alt="User Avatar" />
        </div>
      )}
    </div>
  );
}

function UserListItem({ user, isActive, isActiveNow, onClick }) {
  return (
    <div
      className={`flex items-center p-2 cursor-pointer ${isActive ? 'bg-gray-300' : ''}`}
      onClick={() => onClick(user.id)}
    >
      <div className="relative">
        <img className="h-8 w-8 rounded-full mr-2" src={user.imageUrl} alt="User Avatar" />
        {!isActiveNow && <span className="absolute bottom-0 right-0 w-3 h-3 bg-gray-500 rounded-full"></span>}
      </div>
      <p className="text-sm font-medium text-gray-900">{user.name}</p>
      {isActiveNow && <span className="ml-1 w-3 h-3 rounded-full bg-green-500"></span>}
    </div>
  );
}

function UserDetails({ user, isTyping }) {
  return (
    <div className="bg-gray-200 p-3 flex items-center justify-between">
      <div>
        <p className="text-lg font-semibold text-gray-800">{user.name}</p>
        {isTyping && <p className="text-sm text-gray-600">Typing...</p>}
      </div>
      <img className="h-8 w-8 rounded-full" src='https://via.placeholder.com/150/33FF57/FFFFFF?text=Jane' alt="User Avatar" />
    </div>
  );
}

function UserProfile({ user }) {
  return (
    <div className="bg-gray-200 p-3 flex items-center justify-between">
      <div>
        <p className="text-lg font-semibold text-gray-800">{user.name}</p>
      </div>
      <img className="h-8 w-8 rounded-full" src='https://via.placeholder.com/150/33FF57/FFFFFF?text=Jane' alt="User Avatar" />
    </div>
  );
}

function ChatInterface() {
  const [messages, setMessages] = useState([
    { id: 1, name: 'Ashba', message: 'AOA!', isSentByUser: false },
    { id: 2, name: 'Me', message: 'W.slam', isSentByUser: true },
    { id: 1, name: 'Ashba', message: 'How are you?', isSentByUser: false },
    { id: 1, name: 'Ashba', message: '...', isSentByUser: false },
    { id: 2, name: 'Me', message: 'Alhumdullilah & you?', isSentByUser: true },
    { id: 1, name: 'Ashba', message: 'im good', isSentByUser: false },
    // Add more initial messages here
  ]);

  const [users, setUsers] = useState([
    { id: 1, name: 'Ashba', imageUrl: 'https://via.placeholder.com/150/33FF57/FFFFFF?text=Jane' },
    { id: 2, name: 'Sir Tajamul', imageUrl: 'https://via.placeholder.com/150/33FF57/FFFFFF?text=Jane' },
    // Add more users here with different image URLs
  ]);

  const [selectedUserId, setSelectedUserId] = useState(null);
  const [isTyping, setIsTyping] = useState(false);

  const selectedUser = users.find(user => user.id === selectedUserId);

  const sendMessage = () => {
    // Add your logic here to send the message
    setIsTyping(false); // Assuming typing indicator is reset when message is sent
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/4 bg-gray-200 flex flex-col">
        <div className="p-4 border-b border-gray-300">
          <h2 className="text-lg font-semibold text-gray-800">Contacts</h2>
        </div>
        <div className="overflow-y-auto flex-1">
          {users.map(user => (
            <UserListItem
              key={user.id}
              user={user}
              isActive={selectedUserId === user.id}
              onClick={(userId) => setSelectedUserId(userId)}
            />
          ))}
        </div>
      </div>
      <div className="flex-1 flex flex-col">
        {selectedUser && (
          <UserProfile user={selectedUser} />
        )}
        <div className="bg-gray-100 flex-1 overflow-y-auto">
          <div className="px-4 py-2">
            {messages.map(message => (
              <ChatMessage
                key={message.id}
                name={message.name}
                message={message.message}
                isSentByUser={message.isSentByUser}
              />
            ))}
          </div>
        </div>
        <div className="bg-gray-200 px-4 py-2 flex">
          <input
            type="text"
            className="flex-1 border-gray-300 focus:ring-indigo-500 focus:border-bg-[#00967C] rounded-md px-3 py-1"
            placeholder="Type your message..."
            onChange={(e) => setIsTyping(e.target.value !== '')}
          />
          <button onClick={sendMessage} className="ml-2 px-4 py-1 bg-[#00967C] text-white rounded-md">Send</button>
        </div>
      </div>
    </div>
  );
}

export default ChatInterface;
