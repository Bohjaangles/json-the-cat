
const request = require('request');


const catBreedFetch = (breedName, callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    // Response parameter is included but not used as removing it breaks the code. As per compass instructions not to include any further console.logs.
    //if (body === '[]') console.log('this breed of cat was not found, or perhaps a spelling mistake is present'); << again, compass asked for no console.logs here.
    if (error) {
      callback(error, null); 
    }  
    if (body.length === 2) {
      callback(error,`${breedName} not found`);
      return;
    }
    const data = JSON.parse(body);
    callback(error, data[0].description);
  });
};



module.exports = catBreedFetch;