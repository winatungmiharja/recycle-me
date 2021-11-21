import { FiFeather, FiHome, FiPenTool } from 'react-icons/fi';

const data = [
  {
    title: 'Home',
    icon: <FiHome size={25} />,
    link: '/',
  },
  {
    title: 'Craft',
    icon: <FiPenTool size={25} className='-rotate-90' />,
    link: '/craft',
  },
  {
    title: 'Forest',
    icon: <FiFeather size={25} />,
    link: '/forest',
  },
];

export default data;
