import { BiSolidWallet } from 'react-icons/bi';
import { FaBullhorn, FaUsers } from 'react-icons/fa';
import { IoHome, IoPieChart } from 'react-icons/io5';
import { MdOutlineWork } from 'react-icons/md';

export const navLinks = [
  {
    title: 'Дашборд',
    link: '/',
    icon: <IoHome className="w-4 h-4" />,
  },
  { title: 'Пользователи', link: '/users', icon: <FaUsers className="w-4 h-4" /> },
  {
    title: 'План менеджера',
    link: '/manager-plan',
    icon: <MdOutlineWork className="w-4 h-4" />,
  },
  {
    title: 'Рекламные каналы',
    link: '/ads',
    icon: <FaBullhorn className="w-4 h-4" />,
  },
  { title: 'Таблицы', link: '/tables', icon: <IoPieChart className="w-4 h-4" /> },
  { title: 'Финансы', link: '/finance', icon: <BiSolidWallet className="w-4 h-4" /> },
];
