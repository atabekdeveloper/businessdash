import React from 'react';
import { Outlet } from 'react-router-dom';

import { useToggleStore } from 'src/store';

import { Navbar } from './Navbar';
import { Header } from './Header';

export const Layout: React.FC = () => {
  const isNavbar = useToggleStore((state) => state.isNavbar);

  return (
    <div className="relative flex min-h-full px-5 py-7">
      {/* Верхний блок с фоновым изображением */}
      <div
        className="fixed top-0 left-0 w-full h-[50vh] bg-primary bg-cover bg-no-repeat"
        style={{ backgroundImage: 'url(./src/assets/bg.png)' }}
      ></div>

      {/* Нижний блок с белым фоном */}
      <div className="fixed bottom-0 left-0 w-full h-[50vh] bg-[#f7fafc]"></div>

      {/* Боковой Navbar, который появляется при нажатии кнопки */}
      <div
        className={`fixed top-[30px] left-0 transform transition-transform duration-300 ease-in-out z-30 overflow-y-scroll h-screen rounded-xl not-scroll
        ${isNavbar ? 'translate-x-5' : '-translate-x-full'} md:translate-x-5`}
      >
        <Navbar />
      </div>

      {/* Основной контент */}
      <main className="relative transition-all duration-[0.2s] w-full min-h-full grow flex flex-col ml-0 lg:ml-[308px]">
        <Header />
        <Outlet />
      </main>
    </div>
  );
};
