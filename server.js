const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/ecommerce', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());
app.use('/api/products', require('./routes/products'));

// Serve static frontend
app.use(express.static(path.join(__dirname, '../frontend')));

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
