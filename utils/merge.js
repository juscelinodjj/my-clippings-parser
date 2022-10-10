'use strict';

export default function main(clippings, args) {
  const {
    lang, titleAndAuthor, content, title, author, page, position, date, type
  } = args;
  clippings.lang = [...new Set([...clippings.lang, lang])];
  if (title && author) {
    if (!clippings.library[author]) {
      clippings.library[author] = {};
    }
    if (!clippings.library[author][title]) {
      clippings.library[author][title] = {count: {}, entries: []};
    }
  } else {
    if (!clippings.library[titleAndAuthor]) {
      clippings.library[titleAndAuthor] = {count: {}, entries: []};
    }
  }
  const reference = author && title
    ? clippings.library[author][title] : clippings.library[titleAndAuthor];
  if (!reference['count'][type]) {
    reference['count'][type] = 0;
  }
  reference['count'][type]++;
  reference['entries'].push({type, content, page, position, date});
  return clippings;
}