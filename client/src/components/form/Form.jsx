import { useState } from "react";
import './form.css'
import {Header} from '../../containers'
import {Topvote} from '../../containers' //to be implemented
function Form() {
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [submitted, setSubmitted] = useState(false); /*this variable varies depending on if the user submitted or not*/
    
    const handleAgeChange = (event) => {
        setAge(event.target.value);
    };

    const handleGenderChange = (event) => {
        setGender(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Check if required fields are filled out
        if (age.trim() === "" || age.trim() === "--Select Year--"|| gender.trim() === "" || gender.trim()==="--Select Gender--") {
            alert("Please fill out all fields");
            return;
        }
        //all test stuff below. Sends data to server ****
        const response = await fetch('/submit-form', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({
            age: age,
            gender: gender
            })
        });
        
        if (!response.ok) {
            // Handle the case where the server responds with an error
            console.error(`Failed to send user data: ${response.status} ${response.statusText}`);
            return;
        }
        //all test stuff above. sends data to server *****

        setSubmitted(true);
    };
  if(!submitted){
    return (
        <form onSubmit={handleSubmit} className = "bh__form">
            <label htmlFor="age">Graduation Year:</label>
                <select id="age" name="age" value={age} onChange={handleAgeChange} required>
                    <option value="">-- Select Year -- </option>
                    <option value="fourthyear">2023</option>
                    <option value="thirdyear">2024</option>
                    <option value="secondyear">2025</option>
                    <option value="firstyear">2026</option>
                </select><br /><br />
            <label htmlFor="gender">Gender: </label>
                <select id="gender" name="gender" value={gender} onChange={handleGenderChange} required>
                    <option value="">-- Select Gender -- </option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Prefer not to say</option>
                </select><br /><br />

            <button type="submit">Submit</button>
        </form>
    );
  }
  else{
    return (
        <div>
            <h1 id= "thankyou">Thank you for submitting the form! You may now view the Top Charts and Cast a Vote</h1>;
            <Topvote/>
        </div>
    )
  }
}
export default Form