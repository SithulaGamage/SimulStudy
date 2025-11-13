import React from 'react';
import './informationBlock.css';
import { Clock, Flame, Award } from 'lucide-react'; // optional, if you're using lucide-react icons

export const InformationBlock = () => {
  const infoData = [
    {
      title: 'Current Rank',
      value: '#1',
      icon: <Award className="icon-svg text-purple-600" />,
      bgColor: 'bg-purple',
    },
    {
      title: 'Day Streak',
      value: '3',
      icon: <Flame className="icon-svg text-orange-500" />,
      bgColor: 'bg-orange',
    },
    {
      title: 'Sessions Today',
      value: '2',
      icon: <Clock className="icon-svg text-blue-600" />,
      bgColor: 'bg-blue',
    },
  ];

  return (
    <div className="wrapper-informationBlock">
      {infoData.map((item, index) => (
        <div key={index} className="infoCard">
          <div className={`icon-wrapper ${item.bgColor}`}>
            {item.icon}
          </div>
          <div className="text-content">
            <p className="title">{item.title}</p>
            <p className="value">{item.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
