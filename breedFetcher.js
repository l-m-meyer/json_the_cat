/**
 * Program will use TheCatAPI to fetch descriptions of cat breeds.
 *
 * @returns {String} Description of queried cat breed
 */
const request = require('request');

const fetchBreedDescription = (breedName, callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    // checks if url is incorrect, returns an error
    if (error) {
      return console.log('Request failed:', error);
    }
    
    // creates an object data
    const data = JSON.parse(body);
    // checks if data exists
    if (data[0]) {
      callback(null, data[0].description);
    } else {
      callback(null, 'Breed not found.');
    }
  });
};

module.exports = { fetchBreedDescription };