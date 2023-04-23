import React from 'react'
import './individualrank.css'
import Chart from 'chart.js';
//this class represents each individual bar that will be 
//assesed in the overall "ranking" component

const IndividualRank = ({barName, rank, boys, girls, fresh, soph, juni, seni, population}) => {
    let status ="";
    return (
        <div>
            <div className = "bh__individualrank-header">
                <h2>{barName}</h2>
            </div>
            <div className = "bh__individualrank-rank">
                <p># {rank} in popularity tonight</p>
            </div>
            <div className = "bh__individualrank-stats">
                
            </div>
            <div className = "bh__individualrank-population">
                <p>Population</p>
                <p>{status}: estimate of {population} people</p>
            </div>
        </div>
    )
}

export default IndividualRank