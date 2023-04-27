import React from 'react'
import './individualrank.css'
import {Bar, Pie, Doughnut} from 'react-chartjs-2'
import {Chart as ChartJS} from 'chart.js/auto'
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
    const arr = [boys, girls];
    const ages = [fresh,soph,juni,seni];
    return (
        <div className = 'bh__IndividualRank section_margin'>
            <div className = "bh__individualrank-header">
                <h1 className = "fontHeader">{barName}</h1>
            </div>
            <div className = "bh__individualrank-rank">
                <h3 className = "fontRank"># {rank } in popularity tonight</h3>
            </div>
            <div className = "bh__individualrank-stats">
                {/*implementing bar visual*/}
                <div className = "housingbar">
                    <Bar
                        data = {
                            {labels: ["Boys", "Girls"],
                            datasets:[
                                {
                                    label: "Ratio",
                                    data: arr,
                                    backgroundColor: ['rgba(54, 162, 235, 0.2)', 'rgba(255, 99, 132, 0.2)'],
                                    borderColor:['rgb(54, 162, 235)','rgb(255, 99, 132)'],
                                    borderWidth: 1
                                } 
                            ]}
                        }
                        height= {400}
                        width = {600}
                        options = {{
                            maintainAspectRatio: true
                        }}
                    />
                </div>
                <div className = "housingbar">
                    <Doughnut
                        data = {
                            {labels: ["Freshman", "Sophomores", "Juniors", "Seniors"],
                            datasets:[
                                {
                                    label: "Ratio",
                                    data: ages,
                                    backgroundColor: ['rgba(54, 162, 235, 0.2)', 'rgba(255, 99, 132, 0.2)','rgba(255, 205, 86, 0.2)','rgba(75, 192, 192, 0.2)'],
                                    borderColor:['rgb(54, 162, 235)','rgb(255, 99, 132)','rgb(255, 205, 86)','rgb(75, 192, 192)'],
                                    borderWidth: 1
                                } 
                            ]}
                        }
                        height= {400}
                        width = {600}
                        options = {{
                            maintainAspectRatio: true
                        }}
                    />
                </div>
            </div>
            <div className = "bh__individualrank-population">
                <p className = "fontPop">Population</p>
                <p className = "font">{status}: estimate of <strong>{population}</strong> people</p>
            </div>
        </div>
    )
}

export default IndividualRank