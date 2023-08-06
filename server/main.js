const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

// Assume the API key is stored in a variable named apiKey
const apiKey = process.env.GPT_KEY

app.use(express.json());

app.post('/api/slice', (req, res) => {
  const slicedKey = apiKey.slice(0, 3);
  res.json({ firstThreeCharacters: slicedKey });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
