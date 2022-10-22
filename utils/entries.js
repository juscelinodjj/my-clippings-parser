'use strict';

function removeStrangerCharacters(input) {
  // [Carriage Return, Zero Width No-Break Space]
  const badCharCodes = [13, 65279];
  return input.split('')
    .filter(char => !badCharCodes.includes(char.charCodeAt()))
    .join('');
};

function entries(input) {
  const regex = /(.+)\n(-.+)\n+(.+\n?.*)?\n+={10}/g;
  const matches = input.matchAll(regex);
  const arrayMatch = Array.from(matches);
  const entries = arrayMatch.map(element => {
    const [,titleAndAuthorMaybeWithSpace, info, rawContent] = element;
    const titleAndAuthor = titleAndAuthorMaybeWithSpace.trim();
    const content = rawContent ? rawContent : '';
    return {titleAndAuthor, content, info};
  });
  return entries;
};

function main(input) {
  const fns = [removeStrangerCharacters, entries];
  return fns.reduce((result, fn) => fn(result), input);
}

export default main;