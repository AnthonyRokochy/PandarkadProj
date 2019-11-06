import lang from './lang';

export const getDict = (defLang) => {
  const translate = (word) => {
    return _.get(lang, `${defLang}.${word}`, word);
  };

  return { translate };
};
