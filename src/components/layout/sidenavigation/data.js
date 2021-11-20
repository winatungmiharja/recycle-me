import ArchivesIcon from './icons/archives';
import CreditsIcon from './icons/credits';
import DocumentationIcon from './icons/documentation';
import HomeIcon from './icons/home';
import SettingsIcon from './icons/settings';
import StatusIcon from './icons/status';

const data = [
  {
    title: 'Home',
    icon: <HomeIcon />,
    link: '/',
  },
  {
    title: 'Craft',
    icon: <StatusIcon />,
    link: '/craft',
  },
  {
    title: 'Forest',
    icon: <ArchivesIcon />,
    link: '/forest',
  },
  {
    title: 'Credits',
    icon: <CreditsIcon />,
    link: '/admin/credits',
  },
  {
    title: 'Settings',
    icon: <SettingsIcon />,
    link: '/admin/settings',
  },
  {
    title: 'Documentation',
    icon: <DocumentationIcon />,
    link: '/admin/documentation',
  },
];

export default data;
