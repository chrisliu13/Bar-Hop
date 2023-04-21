import './topvote.css';
import React from 'react';
import {Vote} from '../../components';
const Topvote = () => {
  return (
    <div className = "bh__topvote section_margin" id = "charts">
      <div className = "bh__topvote-vote">
        <Vote/>
      </div>
    </div>
  )
}

export default Topvote