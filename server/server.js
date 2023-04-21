const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/*database setup*/
const {createPool} = require('mysql');
const pool = createPool({
  host:'webdevuw.org',
  user: 'barhop',
  port: '3306',
  password: 'luna',
  database: 'barhop'
})
/*database setup*/

let user_age = "";
let user_gender = "";
/*takes in the users age and gender */
app.post('/submit-form', (req, res) => {
  const {age, gender} = req.body;
  user_age = age; 
  user_gender = gender;
  res.json({ message: 'Data received' });
});


app.listen(5000, () => console.log(`Server started on port 5000`));