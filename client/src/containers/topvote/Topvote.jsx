import './topvote.css';
import React from 'react';
import {Vote} from '../../components';
import {Ranking} from '../../containers';
//this class stores the bar vote section along with the rankings
const Topvote = () => {
  return (
    <div className = "bh__topvote section_margin" id = "charts">
      <div className = "bh__topvote-vote">
        <Vote/> {/*shows vote option */}
      </div>
      <div>
        <Ranking/> {/*shows US news ranking */}
      </div>
    </div>
  )
}

export default Topvote