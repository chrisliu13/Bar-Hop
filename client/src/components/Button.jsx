import React, { useState, useEffect } from 'react';

function Button() {
  const [votes, setVotes] = useState(0);

  useEffect(() => {
    fetch('/api')
      .then(response => response.json())
      .then(data => setVotes(data.votes))
      .catch(error => console.error(error));
  }, []);

  const handleVoteClick = () => {
    fetch('/api', { method: 'POST' })
      .then(response => response.json())
      .then(data => setVotes(data.votes))
      .catch(error => console.error(error));
  };

  return (
    <div>
      <p>Number of votes: {votes}</p>
      <button onClick={handleVoteClick}>Vote</button>
    </div>
  );
}

export default Button;