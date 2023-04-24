import './topvote.css';
import React from 'react';
import {Vote} from '../../components';
import {Ranking} from '../../containers';
//this class stores the bar vote section along with the rankings
const Topvote = () => {
  return (
    <div className = "bh__topvote" id = "charts">
      <div className = "bh__topvote-vote">
        <Vote/> {/*shows US news ranking */}
      </div>
      <h1 className = "topcharts">Top Charts</h1>
      <h2 className = "spec">"10 Hottest Bars of the Night"</h2>
      <div>
        <Ranking/> {/*shows US news ranking */}
      </div>
    </div>
  )
}

export default Topvote