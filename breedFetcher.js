const request = require('request');
const searchQuery = 'https://api.thecatapi.com/v1/breeds/search?q=';

const fetchBreedDescription = (breedName, callback) => {
  request(searchQuery + breedName, (error, response, body) => {
    if (error || JSON.parse(body).length < 1) {
      return callback(error, null);
    } else {
      let description = JSON.parse(body)[0]['description'];
      return callback(error, description);
    }
  });
};

module.exports = {
  fetchBreedDescription
};