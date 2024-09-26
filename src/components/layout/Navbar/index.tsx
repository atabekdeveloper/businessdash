import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LuPanelRightOpen } from 'react-icons/lu';
import { FaUser } from 'react-icons/fa';

import { useToggleStore } from 'src/store';
import { navLinks } from './links';

import logo from 'src/assets/logo.png';
import divider from 'src/assets/divider.png';

export const Navbar: React.FC = () => {
  const { pathname } = useLocation();
  const toggleNavbar = useToggleStore((state) => state.toggleNavbar);
  return (
    <div className="w-72 bg-white shadow-lg flex flex-col justify-between rounded-xl py-[25px] px-[23px] relative">
      <>
        <div className="flex justify-center">
          <img src={logo} alt="Logo" />
        </div>
        <div className="my-5">
          <img src={divider} alt="Divider" />
        </div>
        <nav className="flex flex-col">
          {navLinks.map((el, i) => (
            <Link
              key={i}
              to={el.link}
              className={`nav-item ${
                el.link === pathname && 'shadow-[0px_5px_14px_0px_#0000000D]'
              }`}
              onClick={toggleNavbar}
            >
              <span
                className={`p-2 text-primary rounded-lg transition-all delay-75 ${
                  el.link === pathname && 'bg-primary text-white'
                }`}
              >
                {el.icon}
              </span>
              <span className={`${el.link === pathname && 'font-semibold'}`}>{el.title}</span>
            </Link>
          ))}
          <h2 className="my-4 font-semibold">Аккаунт</h2>
          <Link
            to="/profile"
            className={`nav-item ${
              '/profile' === pathname && 'shadow-[0px_5px_14px_0px_#0000000D]'
            }`}
          >
            <span
              className={`p-2 text-primary rounded-lg transition-all delay-75 ${
                '/profile' === pathname && 'bg-primary text-white'
              }`}
            >
              <FaUser className="w-4 h-4" />
            </span>
            <span className={`${'/profile' === pathname && 'font-semibold'}`}>Профиль</span>
          </Link>
        </nav>
      </>

      <button
        className="absolute z-20 p-2 text-white bg-blue-500 rounded-md top-2 left-2 lg:hidden"
        onClick={toggleNavbar}
      >
        <LuPanelRightOpen className="w-5 h-5" />
      </button>

      <div className="relative z-20 p-4 my-4 overflow-hidden text-base font-semibold text-center text-white bg-primary rounded-2xl">
        <div className="mb-2">
          <div className="w-12 px-8 py-2 mx-auto bg-white rounded-lg text-primary">
            <span className="flex items-center justify-center h-full">Logo</span>
          </div>
        </div>
        <h2 className="text-lg font-semibold">Купить подписку</h2>
        <p className="text-xs text-white/80 font-medium leading-[1.2]">
          С подпиской у вас будет больше полезных инструментов для бизнеса
        </p>
        <button className="px-2 py-2 mt-4 text-base font-semibold bg-white text-primary rounded-2xl">
          Оформить подписку
        </button>
        <span className="absolute top-[-80px] right-[-80px] bg-[#5195d5] rounded-full h-48 w-48 -z-10"></span>
        <span className="absolute bottom-[-80px] left-[-80px] bg-[#5195d5] rounded-full h-48 w-48 -z-10"></span>
      </div>
    </div>
  );
};
