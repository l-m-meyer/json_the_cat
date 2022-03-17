/**
 * Program will use TheCatAPI to fetch descriptions of cat breeds.
 *
 * @returns {String} Description of queried cat breed
 */
const request = require('request');

// retrieves command-line arguments
const breed = process.argv.slice(2);

request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
  // checks if url is incorrect, returns an error
  if (error) {
    return console.log('Request failed:', error);
  }

  // creates an object data
  const data = JSON.parse(body);
  // checks if data exists
  if (data[0]) {
    console.log(data[0].description);
  } else {
    console.log('Cat breed not found.');
  }
  
});

