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

let user_age = "";
let user_age_temp = "";
let user_gender = "";
let user_gender_temp = "";
let user_vote = "";
let user_vote_temp = "";
let population = "population";
/*takes in the users age and gender */
app.post('/submit-form', (req, res) => {
  //console.log("POST RECEIVED");
  const {age, gender} = req.body;
  user_age_temp = age; 
  user_gender_temp = gender;
  /*mapping ages*/
  if (user_age_temp === "firstyear") {
    user_age = "Freshman";
  } else if (user_age_temp === "secondyear") {
    user_age = "Sophomores";
  } else if (user_age_temp === "thirdyear") {
    user_age = "Juniors";
  } else if (user_age_temp === "fourthyear") {
    user_age = "Seniors";
  }else{
    throw new Exception("PROCESSING ISSUE");
  }
  /*mapping gender*/
  if(user_gender_temp === "male"){
    user_gender = "Boys";
  }
  else if(user_gender_temp === "female"){
    user_gender = "Girls";
  }else{
    throw new Exception("PROCESSING ISSUE");
  }
  res.json({ message: 'Data received' });
});


app.post('/submit-vote', (req, res) => {
  //console.log("FORM SUBMITTED");
  const vote = req.body.bar;
  user_vote_temp = vote;
  /*mapping votes*/
  if (user_vote_temp === "RedShed") {
    user_vote = "Red Shed";
  } else if (user_vote_temp === "Luckys") {
    user_vote = "Luckys";
  } else if (user_vote_temp === "Wandos") {
    user_vote = "Wandos";
  } else if (user_vote_temp === "Chasers") {
    user_vote = "Chasers";
  }else if (user_vote_temp === "Dannys") {
    user_vote = "Dannys";
  } else if (user_vote_temp === "Sconnies") {
    user_vote = "Sconnies";
  } else if (user_vote_temp === "Jordans Big 10") {
    user_vote = "Jordans Big 10";
  }else if (user_vote_temp === "Plaza") {
    user_vote = "Plaza";
  } else if (user_vote_temp === "Whiskey Jacks") {
    user_vote = "Whiskey Jacks";
  } else if (user_vote_temp === "DoubleU") {
    user_vote = "DoubleU";
  }else{
    throw new Exception("PROCESSING ISSUE");
  }
  /*preparing query*/
  var query =  `update barstatus set ${user_age} = ${user_age} +1,${user_gender} = ${user_gender} +1, ${population} = ${population} +1 where BarName = '${user_vote}'`;
  pool.query(query, (err, rows) =>{
    if(err){
      console.log(err);
    }else{
      console.log(rows);
    }
  });
  res.json({ message: 'Vote received' });
});

//retrieves values form database to server
//retrieving redshed
app.get('/retrieve', (req, res) => {
  pool.query(`SELECT BarName, population,Boys, Girls, Freshman, Sophomores, Juniors,Seniors FROM barstatus order by population desc`, (error, results, fields) => {
    if (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }
    res.json(results);
  });
});

app.listen(5000, () => console.log(`Server started on port 5000`));