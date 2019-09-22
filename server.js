const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./db');
const cors = require('cors');

// Load env
dotenv.config({ path: './config.env' });

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));
app.use(cors());

// Define Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/users', require('./routes/users'));
app.use('/api/foods', require('./routes/foods'));

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${port}!`
  );
});
