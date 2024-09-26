import {
  AiOutlineUser,
  AiOutlineShoppingCart,
  AiOutlineCheckCircle,
  AiOutlineWarning,
} from 'react-icons/ai'; // Пример иконок
import { MdOutlineAttachMoney } from 'react-icons/md';

export const cardsData = [
  {
    title: 'Новые пользователи',
    value: '12',
    percentage: '+15%',
    isPositive: true,
    Icon: AiOutlineUser,
    iconBg: 'bg-blue-400',
  },
  {
    title: 'Повторные продажи',
    value: '122 212',
    percentage: '+15%',
    isPositive: true,
    Icon: AiOutlineShoppingCart,
    iconBg: 'bg-orange-400',
  },
  {
    title: 'Кол-во закрытых сделок',
    value: '122 212',
    percentage: '-2%',
    isPositive: false,
    Icon: AiOutlineCheckCircle,
    iconBg: 'bg-purple-400',
  },
  {
    title: 'Потери в воронке',
    value: '-1 322 212сум',
    percentage: '-12%',
    isPositive: false,
    Icon: MdOutlineAttachMoney,
    iconBg: 'bg-pink-400',
  },
  {
    title: 'Кол-во обработанных заявок',
    value: '1 323',
    percentage: '-12%',
    isPositive: false,
    Icon: AiOutlineWarning,
    iconBg: 'bg-yellow-400',
  },
];
