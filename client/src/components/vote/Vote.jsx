import './vote.css';
import React, {useState} from 'react'
//this class is designated for users casting votes for bar
function Vote(){
    const [bar, setBar] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleBarChange = (event) => {
        setBar(event.target.value);
    };

    //need to change handlesubmit function
    const handleSubmit = async (event) => {
        event.preventDefault();

        // Check if required fields are filled out
        if (bar.trim() === "" || bar.trim() === "--Select Bar--"){
            alert("Please fill out all fields");
            return;
        }
        //all test stuff below. Sends data to server ****
        const response = await fetch('/submit-vote', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({
            bar: bar
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
    //need to change above
    if(!submitted){
        return(
            <form onSubmit={handleSubmit} className = "bh__vote">
                <label htmlFor="bar">Vote for a Bar: </label>
                    <select id="bar" name="bar" value={bar} onChange={handleBarChange} required>
                        <option value="">-- Select Bar -- </option>
                        <option value="fourthyear">2023</option>
                        <option value="thirdyear">2024</option>
                        <option value="secondyear">2025</option>
                        <option value="firstyear">2026</option>
                    </select><br /><br />
                <button type="submit">Submit</button>
            </form>
        )
    }
    else{
        return (
            <div>
                <h1 id= "thankyou">Vote Received</h1>;
            </div>
        )
      }
}

export default Vote