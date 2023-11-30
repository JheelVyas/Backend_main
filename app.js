const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://jheel0696be21:DnzaZhGBGOLQqJaX@cluster0.tgemhd7.mongodb.net/?retryWrites=true&w=majority', { 
    useNewUrlParser: true, useUnifiedTopology: true 
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Routes
const moviesRouter = require('./routes/movies');
const reviewsRouter = require('./routes/reviews');

app.use('/api/movies', moviesRouter);
app.use('/api/reviews', reviewsRouter);

// Start the server
app.listen(5000, () => {
  console.log(`Server is running on port 5000`);
});
