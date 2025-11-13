import React, { useState } from 'react';
import './studyTimer.css';

export const StudyTimer = () => {
  return (
    <div className='wrapper-studyTimer'>
      {/* Header */}
      <div className='header-studyTimer'>
        <div className='logo-header-studyTimer'></div>
        <div className='title-header-studyTimer'>Study Timer</div>
      </div>

      {/* Timer */}
      <div className='timer-studyTimer'>00:00:00</div>

      {/* Subject */}
      <div className='subject-studyTimer'>
        <div className='title-subject-studyTimer'>Subject</div>
        <div className='enterSubjectBlock-subject-studyTimer'>e.g. Mathematics, Biology</div>
      </div>

      {/* Focus Mode */}
      <div className='focusMode-studyTimer'>
        {/* Text Block - Focus Mode */}
        <div className='textBlock-focusMode-studyTimer'>
          <div className='title-focusMode-studyTimer'>Focus Mode</div>
          <div className='description-focusMode-studyTimer'>Block distractions while studying</div>
        </div>

        {/* Toggle */}
        <div className='toggle-focusMode-studyTimer'></div>
      </div>

      {/* Start Session */}
      <div className='startSession-studyTimer'>
        <div className='playButton-startSession-studyTimer'></div>
        <div className='text-startSession-studyTimer'>Start Session</div>
      </div>
    </div>
  );
};
