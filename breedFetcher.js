const request = require('request');
const args = process.argv.splice(2);


request(`https://api.thecatapi.com/v1/breeds/search?q=${args[0]}`, (error, respode, body) => {

  //if there is an error return the error
  if (error) {
    return console.log(error);
  }

  //type of body is a string
  const data = JSON.parse(body); // type of data is an object

  //if body is empty square brackets string.
  if (body === '[]') return console.log('The breed you typed does not exist.')

  //if body is not just '[]'
  if (body) return console.log(data[0].description);
  
});