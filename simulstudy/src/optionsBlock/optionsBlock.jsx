import React, { useState } from 'react';
import { FaTrophy, FaHistory, FaBullseye } from 'react-icons/fa';
import './optionsBlock.css';

export const OptionsBlock = () => {
  const [active, setActive] = useState('leaderboard');

  return (
    <div className='wrapper-optionsBlock'>
      {/* Leaderboard */}
      <div
        className={`option-item ${active === 'leaderboard' ? 'active' : ''}`}
        onClick={() => setActive('leaderboard')}
      >
        <FaTrophy className='option-icon' />
        <span className='option-text'>Leaderboard</span>
      </div>

      {/* History */}
      <div
        className={`option-item ${active === 'history' ? 'active' : ''}`}
        onClick={() => setActive('history')}
      >
        <FaHistory className='option-icon' />
        <span className='option-text'>History</span>
      </div>

      {/* Focus Tools */}
      <div
        className={`option-item ${active === 'focusTools' ? 'active' : ''}`}
        onClick={() => setActive('focusTools')}
      >
        <FaBullseye className='option-icon' />
        <span className='option-text'>Focus Tools</span>
      </div>
    </div>
  );
};
