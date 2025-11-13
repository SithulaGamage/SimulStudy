import React from 'react';
import { FaTrophy, FaArrowUp, FaArrowDown, FaMinus } from 'react-icons/fa';
import './leaderboard.css';

export const Leaderboard = () => {
  const leaderboardData = [
    { rank: 1, name: 'Sarah Chen', time: '20h 47m', change: 2, emoji: '🏆' },
    { rank: 2, name: 'Marcus Johnson', time: '19h 16m', change: -1, emoji: '🥈' },
    { rank: 3, name: 'Emily Rodriguez', time: '18h 9m', change: 1, emoji: '🥉' },
    { rank: 4, name: 'David Kim', time: '14h 36m', change: 0, emoji: '🎓' },
    { rank: 5, name: 'Priya Patel', time: '13h 43m', change: -2, emoji: '💻' },
    { rank: 6, name: 'Alex Thompson', time: '12h 36m', change: 1, emoji: '📚' },
    { rank: 7, name: 'Lisa Wang', time: '11h 29m', change: -1, emoji: '🧠' },
    { rank: 8, name: 'You', time: '0h 2m', change: 3, emoji: '👤', you: true },
  ];

  return (
    <div className='wrapper-leaderboard'>
      {/* Header */}
      <div className='heading-leaderboard'>
        <div className='title-heading-leaderboard'>
          <FaTrophy className='trophy-icon' />
          <h2>Weekly Leaderboard</h2>
        </div>
        <p className='subtitle-heading-leaderboard'>
          Top students this week – Compete to reach the top!
        </p>
      </div>

      {/* Leaderboard List */}
      <div className='leaderboardBlock-leaderboard'>
        {leaderboardData.map((person) => (
          <div
            key={person.rank}
            className={`person-leaderboardBlock-leaderboard ${
              person.you ? 'you' : ''
            }`}
          >
            <div className='left-person'>
              <div className='rank-person'>
                {person.rank <= 3 ? person.emoji : `#${person.rank}`}
              </div>
              <div className='description-person'>
                <div className='name'>{person.name}</div>
                <div className='time'>{person.time}</div>
              </div>
            </div>
            <div className='change-person'>
              {person.change > 0 && (
                <span className='up'>
                  <FaArrowUp /> {person.change}
                </span>
              )}
              {person.change < 0 && (
                <span className='down'>
                  <FaArrowDown /> {Math.abs(person.change)}
                </span>
              )}
              {person.change === 0 && (
                <span className='neutral'>
                  <FaMinus />
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Message */}
      <div className='message-leaderboard'>
        💪 Keep studying to climb the rankings!
      </div>
    </div>
  );
};
