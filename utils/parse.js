'use strict';

export default function main(target, keywords, input) {
  const regex = patterns()[target](keywords);
  const match = input.toLowerCase().match(regex);
  const result = match ? match[1] : null;
  return result;
}

function patterns() {
  const regex = rawRegex => new RegExp(rawRegex);
  return {
    title() {
      const rawRegex = '(.+)\\s\\(';
      return regex(rawRegex);
    },
    author() {
      const rawRegex = '(?![^\(]*\()([^\)]+)(?=\))';
      return regex(rawRegex);
    },
    type(keywords) {
      if (!keywords.length) {
        return null;
      }
      const rawRegex = keywords.reduce((accumulator, keyword, index) => {
        const isLast = keywords.length === (index + 1);
        return isLast
          ? (accumulator += keyword + ')') : (accumulator += keyword + '|');
      }, '(');
      return regex(rawRegex);
    },
    page(keywords) {
      const pageInCurrentLang = keywords[4];
      const rawRegex = pageInCurrentLang + '\\s(\\d+)\\s\\|';
      return regex(rawRegex);
    },
    position(keywords) {
      const positionInCurrentLang = keywords[5];
      const rawRegex = positionInCurrentLang + '\\s((?:\\d+)(?:-\\d+)?)';
      return regex(rawRegex);
    },
    date() {
      const rawRegex = '(?:\\|.+)?\\|\\s(.+\\d(?:\\s(?:am|pm))?)';
      return regex(rawRegex);
    }
  };
};