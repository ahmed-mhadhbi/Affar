const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Initialize Passport
app.use(passport.initialize());
require('./config/passport'); // Import Passport config

const corsOptions = {
  origin: 'http://localhost:3000', // Replace with your frontend URL
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));


app.use('/api/auth', require('./routes/auth'));
app.use('/api/users', require('./routes/users'));
app.use('/api/listings', require('./routes/listings'));

app.post('/api/chat', async (req, res) => {

  try {
    const { message } = req.body;
    console.log('Received message:', message); // Log the received message

    //chat
    const response = generateChatResponse(message); // Call a function to generate a response
    res.json({ response });
  } catch (err) {
    console.error('Error in /chat endpoint:', err); // Log any errors
    res.status(500).json({ error: 'Something went wrong on the server.' });
  }

});

// Serve static files from the 'uploads' folder
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

//db
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
