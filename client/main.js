// Assume you are using Axios for making HTTP requests
// Make sure to include Axios in your frontend dependencies
// using npm install axios or yarn add axios
const axios = require('axios');

function fetchDataFromServer() {
  axios.post('/api/slice')
    .then((response) => {
      const { firstThreeCharacters } = response.data;
      console.log('First three characters:', firstThreeCharacters);
      // Do whatever you want with the first three characters
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
}

// Call the function to fetch data from the server
fetchDataFromServer();
