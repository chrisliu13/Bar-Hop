import React, {useEffect, useState} from 'react'
import './ranking.css'
import {IndividualRank} from '../../components'
//houses all of the individualRank
const Ranking = () => {
    const [stats,setStats] = useState([]);
    //retrieving backend data
    useEffect(() => {
        fetch('/retrieve').then(response => response.json())
        .then(data => setStats(data)) //stats becomes an array of objects
        .catch(error => console.error(error));
    }, []);

  //TODO: implement ordering system
  return (
    <div>
        <pre>{JSON.stringify(stats[0],null,2)}</pre>
    </div>
  )
}

export default Ranking