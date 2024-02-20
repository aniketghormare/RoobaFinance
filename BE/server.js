// app.js
const express = require('express');
const bodyParser = require('body-parser');
const requestLogger = require('./requestLogger');
const routes = require('./routes');
const cors=require("cors")
const app = express();
const PORT = process.env.PORT || 8000;
require("dotenv").config()
const mongoose = require('mongoose');
app.use(bodyParser.json());
app.use(requestLogger); 
app.use(cors())
app.use('/api', routes);
mongoose.connect(process.env.MONGODB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
 
  serverSelectionTimeoutMS: 30000,
  socketTimeoutMS: 30000
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Error connecting to MongoDB:', err));
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
