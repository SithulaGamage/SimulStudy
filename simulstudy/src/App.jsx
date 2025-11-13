import React from 'react';
import './App.css';
import { StudyTimer } from './studyTimer/studyTimer.jsx';
import { WeekProgress } from './weekProgress/weekProgress.jsx';
import { InformationBlock } from './informationBlock/informationBlock.jsx';
import { OptionsBlock } from './optionsBlock/optionsBlock.jsx';
import { Leaderboard } from './leaderboard/leaderboard.jsx';

function App() {
  return (
    <div className='wrapper-app'>
      {/* Top Block */}
      <div className='topBlock-app'>
        <div className='left-topBlock-app'>
          <WeekProgress />
          <InformationBlock />
        </div>

        <div className='right-topBlock-app'>
          <StudyTimer />
        </div>
      </div>

      <div className='optionsBlock-app'>
        <OptionsBlock />
      </div>

      <div className='middleBlock-app'>
        <Leaderboard />
      </div>

    </div>
  );
}

export default App;
