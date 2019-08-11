const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const connectDB = require('./db');

// Load env
dotenv.config({ path: './config.env' });

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

// Define Routes
app.use('/api/foods', require('./routes/foods'));

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${port}!`
  );
});
