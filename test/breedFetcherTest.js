// breedFetcherTest.js

const catBreedFetch = require('../breedFetcher');
const { assert } = require('chai');

describe('fetchBreedDescription', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    catBreedFetch('Siberian', (err, desc) => {
      // we expect no error for this scenario
      assert.equal(err, null);

      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      // compare returned description
      assert.equal(expectedDesc, desc.trim());

      done();
    });
  });
  it('should return the search followed by \'not found\' when non existant breed is passed in', (done) => {
    catBreedFetch('nonexist', (err, desc) => {

      assert.equal('nonexist not found', desc);

      done();
    });
  });
});