import React from 'react';

export const ManagerPlan: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-7">
      <div className="flex flex-wrap gap-7">
        <div className="w-full pb-3 overflow-x-auto bg-white rounded-xl">
          <h2 className="text-xl font-semibold text-[#454545] px-5 pt-4 pb-2">Сделки</h2>
          <table className="min-w-full text-sm bg-white divide-y-2 divide-gray-200">
            <thead className="text-left">
              <tr>
                <th className="px-4 py-2 font-medium text-[#7B809A] whitespace-nowrap">В работе</th>
                <th className="px-4 py-2 font-medium text-[#7B809A] whitespace-nowrap">Новые</th>
                <th className="px-4 py-2 font-medium text-[#7B809A] whitespace-nowrap">
                  Потерянные
                </th>
                <th className="px-4 py-2 font-medium text-[#7B809A] whitespace-nowrap">Успешные</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-4 py-2 text-[#344767] font-bold whitespace-nowrap">54</td>
                <td className="px-4 py-2 text-[#344767] font-bold whitespace-nowrap">12</td>
                <td className="px-4 py-2 text-[#344767] font-bold whitespace-nowrap">0</td>
                <td className="px-4 py-2 text-[#344767] font-bold whitespace-nowrap">22</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-bold text-green-400 whitespace-nowrap">
                  23 454 345 сум
                </td>
                <td className="px-4 py-2 font-bold text-green-400 whitespace-nowrap">
                  23 454 345 сум
                </td>
                <td className="px-4 py-2 text-[#344767] font-bold whitespace-nowrap">0 сум</td>
                <td className="px-4 py-2 font-bold text-green-400 whitespace-nowrap">
                  23 454 345 сум
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="w-full pb-3 overflow-x-auto bg-white rounded-xl">
          <h2 className="text-xl font-semibold text-[#454545] px-5 pt-4 pb-2">Покупатели</h2>
          <table className="min-w-full text-sm bg-white divide-y-2 divide-gray-200">
            <thead className="text-left">
              <tr>
                <th className="px-4 py-2 font-medium text-[#7B809A] whitespace-nowrap">В работе</th>
                <th className="px-4 py-2 font-medium text-[#7B809A] whitespace-nowrap">Новые</th>
                <th className="px-4 py-2 font-medium text-[#7B809A] whitespace-nowrap">
                  Потерянные
                </th>
                <th className="px-4 py-2 font-medium text-[#7B809A] whitespace-nowrap">Успешные</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-4 py-2 text-[#344767] font-bold whitespace-nowrap">54</td>
                <td className="px-4 py-2 text-[#344767] font-bold whitespace-nowrap">12</td>
                <td className="px-4 py-2 text-[#344767] font-bold whitespace-nowrap">0</td>
                <td className="px-4 py-2 text-[#344767] font-bold whitespace-nowrap">22</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-bold text-green-400 whitespace-nowrap">
                  23 454 345 сум
                </td>
                <td className="px-4 py-2 font-bold text-green-400 whitespace-nowrap">
                  23 454 345 сум
                </td>
                <td className="px-4 py-2 text-[#344767] font-bold whitespace-nowrap">0 сум</td>
                <td className="px-4 py-2 font-bold text-green-400 whitespace-nowrap">
                  23 454 345 сум
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="overflow-x-auto bg-white rounded-xl w-[1000px] pb-3">
        <h2 className="text-xl font-semibold text-[#454545] px-5 pt-4 pb-2">События</h2>
        <table className="min-w-full text-sm bg-white divide-y-2 divide-gray-200">
          <thead className="text-left">
            <tr>
              <th className="px-4 py-2 font-medium text-[#7B809A] whitespace-nowrap">
                Создано сделок
              </th>
              <th className="px-4 py-2 font-medium text-[#7B809A] whitespace-nowrap">
                Создано контактов
              </th>
              <th className="px-4 py-2 font-medium text-[#7B809A] whitespace-nowrap">
                Создано компаний
              </th>
              <th className="px-4 py-2 font-medium text-[#7B809A] whitespace-nowrap">
                Смена этапов
              </th>
              <th className="px-4 py-2 font-medium text-[#7B809A] whitespace-nowrap">
                Добавлено примечаний
              </th>
              <th className="px-4 py-2 font-medium text-[#7B809A] whitespace-nowrap">
                Завершение задачи с результатом
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            <tr>
              <td className="px-4 py-2 text-[#344767] font-bold whitespace-nowrap">54</td>
              <td className="px-4 py-2 text-[#344767] font-bold whitespace-nowrap">12</td>
              <td className="px-4 py-2 text-[#344767] font-bold whitespace-nowrap">12</td>
              <td className="px-4 py-2 text-[#344767] font-bold whitespace-nowrap">12</td>
              <td className="px-4 py-2 text-[#344767] font-bold whitespace-nowrap">12</td>
              <td className="px-4 py-2 text-[#344767] font-bold whitespace-nowrap">12</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
