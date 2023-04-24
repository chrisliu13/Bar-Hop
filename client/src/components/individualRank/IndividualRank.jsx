import React from 'react'
import './individualrank.css'
import {Bar} from 'react-chartjs-2'
//this class represents each individual bar that will be 
//assesed in the overall "ranking" component

const IndividualRank = ({barName, rank, boys, girls, fresh, soph, juni, seni, population}) => {
    let status ="";
    if(population<20){
        status = "Not Busy"
    }else if(population<40){
        status = "Small Crowd"
    }
    else if(population<65){
        status = "Busy"
    }else{
        status = "Very Busy"
    }
    return (
        <div className = 'bh__IndividualRank section_margin'>
            <div className = "bh__individualrank-header">
                <h1 className = "fontHeader">{barName}</h1>
            </div>
            <div className = "bh__individualrank-rank">
                <h3 className = "fontRank"># {rank } in popularity tonight</h3>
            </div>
            <div className = "bh__individualrank-stats">
                
            </div>
            <div className = "bh__individualrank-population">
                <p className = "font">Population</p>
                <p className = "font">{status}: estimate of <strong>{population}</strong> people</p>
            </div>
        </div>
    )
}

export default IndividualRank