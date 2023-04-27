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

  return (
    //maps out each unique bar, but only top 10
    <div id = "vote">
        {stats.slice(0, 10).map((bar,index)=>(
            <IndividualRank barName = {bar.BarName} rank = {index+1} boys= {bar.Boys} girls = {bar.Girls} fresh ={bar.Freshman} soph = {bar.Sophomores} juni = {bar.Juniors} seni = {bar.Seniors} population = {bar.population}/>
        ))}
    </div>
  )
}

export default Ranking