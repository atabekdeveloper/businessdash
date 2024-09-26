import React from 'react';
import { FaUser } from 'react-icons/fa';
import { IoIosNotifications } from 'react-icons/io';
import { IoSettingsSharp } from 'react-icons/io5';
import { Link, useLocation } from 'react-router-dom';
import { LuPanelLeftOpen } from 'react-icons/lu';
import { TbCalendarEvent } from 'react-icons/tb';

import { navLinks } from '../Navbar/links';
import { useToggleStore } from 'src/store';

export const Header: React.FC = () => {
  const { pathname } = useLocation();

  const toggleNavbar = useToggleStore((state) => state.toggleNavbar);
  return (
    <header className="flex flex-col items-center justify-between w-full py-4 text-white md:flex-row">
      <button
        className="fixed z-20 p-2 text-white bg-blue-500 rounded-md top-[30px] left-5 md:hidden"
        onClick={toggleNavbar}
      >
        <LuPanelLeftOpen className="w-6 h-6" />
      </button>
      <div className="flex flex-col gap-2">
        <div className="flex items-center space-x-2 text-sm">
          <Link to="/" className="text-gray-200">
            Главная страница
          </Link>
          <span>/</span>
          <span>{navLinks.find((el) => el.link === pathname)?.title}</span>
          <span>{pathname === '/profile' && 'Профиль'}</span>
        </div>
        <span className="font-bold">{navLinks.find((el) => el.link === pathname)?.title}</span>
        <span className="font-bold">{pathname === '/profile' && 'Профиль'}</span>
      </div>

      <div className="flex space-x-4">
        <div className="flex items-center px-4 py-2 space-x-2 text-gray-400 bg-white rounded-lg shadow-md">
          {/* Иконка календаря */}
          <TbCalendarEvent size={20} className="text-black" />

          {/* Текст "Этот месяц" */}
          <span className="text-sm">Этот месяц</span>

          {/* Стрелка вниз для Dropdown */}
          <svg
            className="w-4 h-4 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.292 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>

        <div className="relative">
          <input
            type="text"
            id="Search"
            placeholder="Поиск"
            className="w-full py-2 pl-3 text-black border-gray-200 rounded-md shadow-sm outline-none pe-10 sm:text-sm"
          />

          <span className="absolute inset-y-0 grid w-10 end-0 place-content-center">
            <button type="button" className="text-gray-600 hover:text-gray-700">
              <span className="sr-only">Поиск</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </button>
          </span>
        </div>

        <div className="flex items-center space-x-4 text-sm text-white">
          <button className="flex items-center gap-2">
            <FaUser />
            <span>Kirish</span>
          </button>
          <div className="flex items-center gap-2">
            <IoIosNotifications className="w-4 h-4" />
            <IoSettingsSharp />
          </div>
        </div>
      </div>
    </header>
  );
};
