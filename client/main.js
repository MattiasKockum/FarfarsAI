import axios from 'axios';

function fetchDataFromServer() {
  axios.post('/api/slice')
    .then((response) => {
      const { firstThreeCharacters } = response.data;
      console.log('First three characters:', firstThreeCharacters);

      // Insert the first three characters into the page
      const apiKeyElement = document.createElement('p');
      apiKeyElement.textContent = `First three characters of API key: ${firstThreeCharacters}`;
      document.body.appendChild(apiKeyElement);
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
}

// Call the function to fetch data from the server
fetchDataFromServer();
