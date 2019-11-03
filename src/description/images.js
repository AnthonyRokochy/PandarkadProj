import {
  TWOD, THREED, SCETCH, PROCESS,
} from '../consts/galleriesNames';

const urls = {
  [TWOD]:
        'https://i.imgur.com/ExCaFKu.jpg',
  [THREED]:
        'https://i.imgur.com/JMwiEqT.jpg',
  [SCETCH]:
        'https://i.imgur.com/hOqnnP8.jpg',
  [PROCESS]:
        'https://i.imgur.com/YnEGok4.jpg',
};

export default (() => {
  const get = (name) => {
    return _.get(urls, name);
  };

  return {
    get,
  };
})();
