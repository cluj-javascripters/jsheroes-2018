import data2017 from './2017';
import data2018 from './2018';
import data2019 from './2019';
import data2020 from './2020';
import menuItems from './menuitems';
import news from './news';
import socialmedia from './socialmedia';

const allSpeakers = [
  ...data2017.speakers,
  ...data2018.speakers,
  ...data2019.speakers,
  ...data2020.speakers,
];

export default {
  currentYear: '2020',
  data2017,
  data2018,
  data2019,
  data2020,
  allSpeakers,
  menuItems,
  news,
  socialmedia,
  cfpOpen: false,
};
