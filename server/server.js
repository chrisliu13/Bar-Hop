const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let user_age = "";
let user_gender = "";
/*takes in the users age and gender */
app.post('/submit-form', (req, res) => {
  const {age, gender} = req.body;
  user_age = age; 
  user_gender = gender;
  // Do something with the data (e.g. save it to a database)
  //console.log(user_age);
  res.json({ message: 'Data received' });
});


app.listen(5000, () => console.log(`Server started on port 5000`));