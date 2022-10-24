'use strict';

import test from './utils/test.js';
import entries from './utils/entries.js';
import languages from './utils/languages.js';
import extract from './utils/extract.js';
import merge from './utils/merge.js';

function main(fileContent, inJson) {
  if (!test(fileContent)) {
    return new Error('SyntaxError');
  }
  const rawClippings = entries(fileContent);
  const clippings = rawClippings
    .reduce((clippings, rawClipping) => {
      const lang = languages.identify(rawClipping);
      const keywords = languages.keywords(lang);
      const titleAndAuthor = rawClipping.titleAndAuthor;
      const content = rawClipping.content;
      const title = extract('title', null, titleAndAuthor);
      const author = extract('author', null, titleAndAuthor);
      const page = extract('page', keywords, rawClipping.info,);
      const position = extract('position', keywords, rawClipping.info,);
      const date = extract('date', null, rawClipping.info);
      const type = extract('type', keywords, rawClipping.info);
      const data = {lang, content, title, author, page, position, date, type};
      return merge(clippings, data);
    }, {lang: [], library: {}});
  return !inJson ? clippings : JSON.stringify(clippings, null, 2);
}

export default main;