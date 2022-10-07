'use strict';

export default (function main() {
  return {
    title,
    author,
    type,
    date
  };
})();

function title(input) {
  const regex = /(.+)\s\(/;
  const match = input.match(regex);
  const title = match ? match[1] : null;
  return title;
}

function author(input) {
  const regex = /\((.+?)\)/g;
  const matches = input.matchAll(regex);
  const arrayMatch = Array.from(matches);
  const lastMatch = arrayMatch.slice(-1);
  const author = arrayMatch.length ? lastMatch[0][1] : null;
  return author;
}

function type(input, keywords) {
  return keywords
    .find(keyword => input.toLowerCase().includes(keyword))
    || null;
}

function date(input) {
  const regex = /(?:\|.+)?\|\s(.+\d)/;
  const match = input.match(regex);
  const date = match ? match[1] : null;
  return date;
}