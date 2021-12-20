const express = require('express');

require('dotenv').config();

const app = express();

const userRoutes = require('./routes/user');

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use('/', (req, res, next) => {
    const test = [
      {
        _id: 'test _id',
        title: 'test title pour mon nouvel API',
        description: 'Ceci est une description',
        userId: 'test userID',
      },
     
    ];
    res.status(200).json(test);
  });

app.use('/api/auth', userRoutes);  

module.exports = app;