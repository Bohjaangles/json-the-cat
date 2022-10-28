
const request = require('request');

const args = process.argv.slice(2);

// const body;


const catBreedFetch = (searchKey) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${searchKey}`, (error, response, body) => {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response.statusCode); // Print the response status code if a response was received
    if (body === '[]') console.log('this breed of cat was not found, or perhaps a spelling mistake is present');
    console.log('body:', body); // Print the HTML for the Google homepage.
  });
};
catBreedFetch(args);
