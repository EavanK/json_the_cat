const request = require('request');


const fetchBreedDescription = (breedName, callback) => {

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {

    if (error) return callback(error, null);
    
    if (body === '[]') return callback(error, 'The breed you typed does not exist.');
    
    let data = JSON.parse(body)[0].description;
    callback(error, data);
  });
};

module.exports = { fetchBreedDescription };