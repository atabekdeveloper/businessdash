import { ApexOptions } from 'apexcharts';
import React from 'react';
import ReactApexChart from 'react-apexcharts';

const series: ApexAxisChartSeries = [
  {
    name: 'Продаж',
    data: [10000, 0, 30000, 20000, 40000],
    color: '#FCAA0B',
  },
];

const options: ApexOptions = {
  chart: {
    type: 'line',
    zoom: {
      enabled: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  grid: {
    row: {
      colors: ['#fff', 'transparent'], // takes an array which will be repeated on columns
      opacity: 0.5,
    },
  },
  xaxis: {
    categories: [2020, 2021, 2022, 2023, 2024],
  },
};

export const LineChart: React.FC = () => {
  return (
    <div className="p-4 bg-white rounded-xl md:w-[450px] w-full">
      <h2 className="text-xl font-semibold">Объем продаж</h2>
      <ReactApexChart options={options as any} width="100%" series={series} type="line" />
    </div>
  );
};
