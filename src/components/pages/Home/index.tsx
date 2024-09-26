import React from 'react';

import { Card } from './Card';

import { cardsData } from 'src/data';
import { LineChart } from './LineChart';
import { RadialBar } from './RadialBar';

export const Home: React.FC = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3 sm:grid-cols-2">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            value={card.value}
            percentage={card.percentage}
            isPositive={card.isPositive}
            Icon={card.Icon}
            iconBg={card.iconBg}
          />
        ))}
      </div>
      <div className="flex flex-wrap gap-5 md:flex-nowrap">
        <LineChart />
        <RadialBar />
      </div>
    </div>
  );
};
