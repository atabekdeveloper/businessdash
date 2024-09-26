import React from 'react';

import { Card } from './Card';

import { cardsData } from 'src/data';

export const Home: React.FC = () => {
  return (
    <div>
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
    </div>
  );
};
