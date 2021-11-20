const request = require('request');
const breed = process.argv.slice(2);
const searchQuery = 'https://api.thecatapi.com/v1/breeds/search?q=';

request(searchQuery + breed, (error, response, body) => {
  if (error) {
    console.log('Error:', error);
  } else if (JSON.parse(body).length < 1) {
    console.log('Breed is not found');
  } else {
    console.log(JSON.parse(body)[0]['description']);
  }
});