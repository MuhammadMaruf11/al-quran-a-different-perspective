require('dotenv').config();
const express = require('express');
const cors = require('cors');
const contactRoutes = require("../routes/contact");
require('../config/database');

const app = express();
// require('../config/database');

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get('/', (req, res) => {
    res.send('<h1>Server is open</h1>')
});



// Routes
app.use("/api/contact", contactRoutes);


module.exports = app;