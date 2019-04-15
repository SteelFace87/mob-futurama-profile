const express = require('express');
const app = express();
const profileRoutes = require('./routes/profiles');

app.use(express.json());

app.use('/profile', profileRoutes);

module.exports = app;
