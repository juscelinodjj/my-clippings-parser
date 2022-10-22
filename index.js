'use strict';

import test from './utils/test.js';
import entries from './utils/entries.js';
import languages from './utils/languages.js';
import extract from './utils/extract.js'
import merge from './utils/merge.js'

function main(fileContent, inJson) {
  if (!test(fileContent)) {
    return new Error('SyntaxError');
  }
  const initialObj = {lang: [], library: {}};
  const clippings = entries(fileContent)
    .reduce((initialObj, entry) => {
      const lang = languages.identify(entry);
      const keywords = languages.keywords(lang);
      const titleAndAuthor = entry.titleAndAuthor;
      const content = entry.content;
      const title = extract('title', null, titleAndAuthor);
      const author = extract('author', null, titleAndAuthor);
      const page = extract('page', keywords, entry.info,);
      const position = extract('position', keywords, entry.info,);
      const date = extract('date', null, entry.info);
      const type = extract('type', keywords, entry.info);
      const currentObj = {
        lang, titleAndAuthor, content, title, author, page, position, date, type
      };
      return merge(initialObj, currentObj);
    }, initialObj);
  return !inJson ? clippings : JSON.stringify(clippings, null, 2);
}

export default main;