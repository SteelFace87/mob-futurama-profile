const { Router } = require('express');
const getQuote = require('../services/futuramaApi');

const Profile = require('../models/Profile');

module.exports = Router()
  .post('/', (req, res) => {
    const {
      name,
      favoriteCharacter
    } = req.body;

    getQuote(favoriteCharacter)
      .then(tagline => {
        return Profile
          .create({
            name,
            favoriteCharacter,
            tagline
          });
      })
      .then(createdProfile => {
        res.send(createdProfile);
      });


  });
