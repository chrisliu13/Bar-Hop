const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// create a variable to store the number of votes
let voteCount = 0;

// parse application/json
app.use(bodyParser.json());

// create an endpoint to get the vote count
app.get('/api', (req, res) => {
    res.json({ votes: voteCount });
});

// create an endpoint to handle the vote button click
app.post('/api', (req, res) => {
  // increment the vote count
  voteCount++;
  res.json({ votes: voteCount });
});

app.listen(5000, () => console.log(`Server started on port 5000`));