import React, { useEffect, useState } from 'react';
import api from '../api';
import '../styles/chat.css'; // Import chat styles


const Listings = () => {
  const [listings, setListings] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [images, setImages] = useState([]);
  const [isCreating, setIsCreating] = useState(false);

  // Chat-related states
  const [chatMessages, setChatMessages] = useState([]);
  const [userMessage, setUserMessage] = useState('');

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const res = await api.get('/listings');
        setListings(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchListings();
  }, []);

  const handleCreate = async () => {
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    images.forEach((image) => formData.append('images', image));

    try {
      const res = await api.post('/listings', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setListings([...listings, res.data]);
      setIsCreating(false);
    } catch (err) {
      console.error(err);
    }
  };

  
  const handleSendMessage = async () => {
    if (!userMessage.trim()) return;

    
    const newMessage = { sender: 'user', text: userMessage };
    setChatMessages((prev) => [...prev, newMessage]);
    setUserMessage(''); //Clear

    try {
      const res = await api.post('/api/chat', { message: userMessage });

      console.log('Response from /chat:', res.data); 
      const botMessage = { sender: 'bot', text: res.data.response };
      setChatMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      console.error('Error sending message:', err); 
      const errorMessage = { sender: 'bot', text: 'Sorry, something went wrong.' };
      setChatMessages((prev) => [...prev, errorMessage]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex">
      {/* Chat Section */}
      <div className="w-1/4 bg-white p-4 rounded-lg shadow-lg mr-6 chat-container hover:expand">
        <h2 className="text-xl font-bold mb-4">Chat</h2>
        <div className="flex mb-4">
          <input
            type="text"
            placeholder="Ask about listings..."
            value={userMessage}
            onChange={(e) => setUserMessage(e.target.value)}
            className="w-full p-2 border rounded-lg mr-2"
          />
          <button
            onClick={handleSendMessage}
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Send
          </button>
        </div>
        <div className="h-96 overflow-y-auto mb-4">
          {chatMessages.map((msg, index) => (
            <div
              key={index}
              className={`mb-2 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}
            >
              <span
                className={`inline-block p-2 rounded-lg ${
                  msg.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
                }`}
              >
                {msg.text}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Listings Section */}
      <div className="flex-1">
        <h1 className="text-2xl font-bold mb-6">Listings</h1>
        <button
          onClick={() => setIsCreating(true)}
          className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200 mb-4"
        >
          Create Listing
        </button>
        {isCreating && (
          <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
            <h2 className="text-xl font-bold mb-4">Create Listing</h2>
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-2 border rounded-lg mb-4"
            />
            <textarea
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-2 border rounded-lg mb-4"
            />
            <input
              type="file"
              multiple
              onChange={(e) => setImages([...e.target.files])}
              className="mb-4"
            />
            <button
              onClick={handleCreate}
              className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-200"
            >
              Submit
            </button>
            <button
              onClick={() => setIsCreating(false)}
              className="bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition duration-200 ml-2"
            >
              Cancel
            </button>
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {listings.map((listing) => (
            <div key={listing._id} className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-bold mb-2">{listing.title}</h2>
              <p className="text-gray-700 mb-4">{listing.description}</p>
              <div className="grid grid-cols-2 gap-2">
                {listing.images.map((image, index) => (
                  <img
                    key={index}
                    src={`http://localhost:5000/${image}`}
                    alt={`Listing ${index + 1}`}
                    className="w-full h-32 object-cover rounded-lg"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Listings;
