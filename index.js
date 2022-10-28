const catBreedFetch = require('./breedFetcher');

const breedName = process.argv[2];



catBreedFetch(breedName, (error, desc) => {
  // console.log('response status:', response.status);
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});

// const breedDescription = catBreedFetch('Siberian', (error, description) => {
//  });