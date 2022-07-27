import {
  faBaseball,
  faBook,
  faBowlFood,
  faDesktop,
  faEye,
  faGlassCheers,
  faGlasses,
  faPersonRunning,
  faPlane,
  faShoppingBag,
} from '@fortawesome/free-solid-svg-icons';

const TAGS = [
  {
    id: 1,
    name: 'Travel',
    color: '#DC0073',
    icon: faPlane,
  },
  {
    id: 2,
    name: 'Eating',
    color: '#d32',
    icon: faBowlFood,
  },
  {
    id: 3,
    name: 'Drink',
    color: '#0C4767',
    icon: faGlassCheers,
  },
  {
    id: 4,
    name: 'Shopping',
    color: '#F5B700',
    icon: faShoppingBag,
  },
  {
    id: 6,
    name: 'Studying',
    color: '#FE9920',
    icon: faGlasses,
  },
  {
    id: 7,
    name: 'Internet',
    color: '#566E3D',
    icon: faDesktop,
  },
  {
    id: 8,
    name: 'Sleep',
    color: '#011627',
    icon: faEye,
  },
  {
    id: 9,
    name: 'Reading',
    color: '#6369D1',
    icon: faBook,
  },
  {
    id: 10,
    name: 'Training',
    color: '#DB5A42',
    icon: faPersonRunning,
  },
  {
    id: 11,
    name: 'Sport',
    color: '#A57F60',
    icon: faBaseball,
  },
];

const TASKS = [
  {
    id: 1,
    name: 'FYP',
    date: '30-july-2022',
    timeFrom: '08:30',
    timeTo: '22:30',
    enableDND: true,
    allowAutomaticMessageOnMissedCall: true,
    description: 'AOA! I am doing my FYP. Dont disturb me.',
    hasReminder: true,
    reminders: [
      {
        id: 1,
        name: 'FYP MUKAAO',
        time: '9:30',
        description: 'FYP URAO YAAR ',
        priority: 2,
      },
    ],
    tags: [TAGS[2]],
    numbersToOverrideQuietMode: [],
    priority: 1,
  },
  {
    id: 2,
    name: 'Langar Khana',
    date: '31-july-2022',
    timeFrom: '05:30',
    timeTo: '18:30',
    enableDND: true,
    allowAutomaticMessageOnMissedCall: true,
    description: 'AOA! Paijan Langar khana hai tou poncho galdi, Calls na kro',
    hasReminder: true,
    reminders: [
      {
        id: 1,
        name: 'TIme py langar khany jana',
        time: '9:30',
        description: 'Rajh k khao r shopper mein daal k bhi laao ',
        priority: 2,
      },
    ],
    tags: [TAGS[2]],
    numbersToOverrideQuietMode: [],
    priority: 1,
  },
  {
    id: 3,
    name: 'KHAO PEO HAJO MOTO SOJAO R SOTY HOWE BUND NA DO',
    date: '29-july-2022',
    timeFrom: '10:30',
    timeTo: '15:30',
    enableDND: true,
    allowAutomaticMessageOnMissedCall: true,
    description: 'AOA! Paijan Tang na kro',
    hasReminder: true,
    reminders: [
      {
        id: 1,
        name: 'Hathi ka time',
        time: '12:30',
        description: 'shampoo k sath',
        priority: 1,
      },
    ],
    tags: [TAGS[2]],
    numbersToOverrideQuietMode: [],
    priority: 1,
  },
];

export {TAGS, TASKS};
