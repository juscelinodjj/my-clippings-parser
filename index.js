'use strict';

import test from './utils/test.js';
import entries from './utils/entries.js';
import languages from './utils/languages.js';
import parse from './utils/parse.js'
import merge from './utils/merge.js'

export default function main(fileContent, inJson) {
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
      const title = parse.title(titleAndAuthor);
      const author = parse.author(titleAndAuthor);
      const date = parse.date(entry.info);
      const type = parse.type(entry.info, keywords);
      const currentObj = {
        lang, titleAndAuthor, content, title, author, date, type
      };
      return merge(initialObj, currentObj);
    }, initialObj);
  return !inJson ? clippings : JSON.stringify(clippings, null, 2);
}