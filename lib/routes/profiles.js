const { Router } = require('express');

const Profile = require('../models/Profile');

module.exports = Router()
  .post('/', (req, res) => {
    const {
      name,
      favoriteCharacter
    } = req.body;

    Profile
      .create({
        name,
        favoriteCharacter
      })
      .then(createdProfile => {
        res.send(createdProfile);
      });


  });
