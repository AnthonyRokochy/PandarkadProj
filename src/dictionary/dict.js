import dictionary from './lang';

const dict = (() => {
  const translate = (word, language) => {
    return _.get(dictionary, `${language}.${word}`, word);
  };

  return {
    translate,
  };
})();

export default dict;
