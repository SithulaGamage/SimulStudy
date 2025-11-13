import React, { useState } from 'react';
import './weekProgress.css';

export const WeekProgress = () => {
  return (
    <div className='wrapper-weekProgress'>
      <div className='title-weekProgress'>This Week's Progress</div>

      {/* Time Studied */}
      <div className='timeStudied-weekProgress'>
        <div className='hours-timeStudied-weekProgress'>0 hours</div>
        <div className='minutes-timeStudied-weekProgress'> 20 min</div>
      </div>

      {/* Goal */}
      <div className='goal-weekProgress'>
        {/* Description - Goal */}
        <div className='description-goal-weekProgress'>
          <div className='logo-description-goal-weekProgress'></div>
          <div className='text-description-goal-weekProgress'>Goal: 20 hours/week</div>
        </div>

        {/* Percentage - Goal */}
        <div className='percentageOfGoal-goal-weekProgress'>
          <div className='bar-percentageOfGoal-goal-weekProgress'></div>
          <div className='description-percentageOfGoal-goal-weekProgress'>0% of weekly goal</div>
        </div>
      </div>
    </div>
  );
};
