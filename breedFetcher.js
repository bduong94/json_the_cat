const request = require('request');

request('https://api.thecatapi.com/v1/breeds/search?q=siberian', (error, response, body) => {
  console.log(typeof body);
})