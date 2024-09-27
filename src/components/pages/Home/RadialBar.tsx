import React from 'react';
import ReactApexChart from 'react-apexcharts';

const series = [76, 67, 61];

const options = {
  chart: {
    type: 'radialBar',
  },
  plotOptions: {
    radialBar: {
      offsetY: 0,
      startAngle: 0,
      endAngle: 270,
      hollow: {
        margin: 5,
        size: '30%',
        background: 'transparent',
        image: undefined,
      },
      dataLabels: {
        name: {
          show: false,
        },
        value: {
          show: false,
        },
      },
      barLabels: {
        enabled: true,
        useSeriesColors: true,
        offsetX: -8,
        fontSize: '16px',
        formatter: function (seriesName: any, opts: any) {
          return seriesName + ':  ' + opts.w.globals.series[opts.seriesIndex];
        },
      },
    },
  },
  colors: ['#0068F733', '#0068F799', '#0068F7'],
  labels: ['Offline', 'Online', 'Tg'],
  responsive: [
    {
      breakpoint: 480,
      options: {
        legend: {
          show: false,
        },
      },
    },
  ],
};

export const RadialBar: React.FC = () => {
  return (
    <div className="p-4 bg-white rounded-xl md:w-[520px] w-full">
      <h2 className="mb-2 text-xl font-semibold">Каналы эффективности продаж</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <ReactApexChart options={options as any} width={300} series={series} type="radialBar" />
        <div className="flex flex-col gap-2">
          <>
            <h3 className="flex items-center gap-2 text-sm font-bold">
              <span className="w-4 h-4 bg-[#C2D7F4] rounded-sm"></span>
              <span className="text-[#464E5F]">Соцсети</span>
            </h3>
            <p className="text-xl font-bold">123 323 продаж</p>
            <p className="text-green-500">+123%</p>
          </>
          <>
            <h3 className="flex items-center gap-2 text-sm font-bold">
              <span className="w-4 h-4 bg-[#619FF6] rounded-sm"></span>
              <span className="text-[#464E5F]">Онлайн</span>
            </h3>
            <p className="text-xl font-bold">123 323 продаж</p>
            <p className="text-green-500">+123%</p>
          </>
          <>
            <h3 className="flex items-center gap-2 text-sm font-bold">
              <span className="w-4 h-4 bg-[#619FF6] rounded-sm"></span>
              <span className="text-[#464E5F]">Оффлайн</span>
            </h3>
            <p className="text-xl font-bold">123 323 продаж</p>
            <p className="text-green-500">+123%</p>
          </>
        </div>
      </div>
    </div>
  );
};
