const request = require('superagent');

function getQuote(character) {
  return request
    .get(`http://futuramaapi.herokuapp.com/api/characters/${character}/1`)
    .then(res => {
      const [character] = res.body;
      return character.quote;
    });

}

module.exports = getQuote;
