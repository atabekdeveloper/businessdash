import React from 'react';

interface CardProps {
  title: string;
  value: string;
  percentage: string;
  isPositive: boolean;
  Icon: React.ComponentType;
  iconBg: string;
}

export const Card: React.FC<CardProps> = ({
  title,
  value,
  percentage,
  isPositive,
  Icon,
  iconBg,
}) => {
  return (
    <div className="flex flex-col justify-between w-full p-4 mx-2 bg-white shadow-md rounded-xl">
      <div className="flex flex-col items-start gap-2">
        <div className={`p-2 rounded-full ${iconBg}`}>
          {/* @ts-ignore */}
          <Icon className="text-white" size={20} />
        </div>
        <p className="text-sm text-black">{title}</p>
      </div>
      <div className="flex items-center gap-2">
        <h3 className="text-xl font-bold text-[#454545]">{value}</h3>
        <p className={`text-sm ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
          {percentage} {isPositive ? '↑' : '↓'}
        </p>
      </div>
    </div>
  );
};
