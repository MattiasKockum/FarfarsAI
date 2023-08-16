exports.handler = async (event) => {
    const { num1, num2 } = JSON.parse(event.body);

    const result = num1 + num2;

    return {
        statusCode: 200,
        body: JSON.stringify({ result }),
    };
};

//const express = require('express');
//const app = express();
//const port = process.env.PORT || 5000;

// Serve static files from the 'client' directory
//app.use(express.static('client'));

//const apiKey = process.env.GPT_KEY

//app.use(express.json());

//app.post('/api/slice', (req, res) => {
  //const slicedKey = apiKey.slice(0, 3);
  //res.json({ firstThreeCharacters: slicedKey });
  //res.json({firstThreeCharacters: "ABD"})
//});

//app.listen(port, () => {
  //console.log(`Server is running on port ${port}`);
//});
