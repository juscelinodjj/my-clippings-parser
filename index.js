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
      const title = parse('title', null, titleAndAuthor);
      const author = parse('author', null, titleAndAuthor);
      const page = parse('page', keywords, entry.info,);
      const position = parse('position', keywords, entry.info,);
      const date = parse('date', null, entry.info);
      const type = parse('type', keywords, entry.info);
      const currentObj = {
        lang, titleAndAuthor, content, title, author, page, position, date, type
      };
      return merge(initialObj, currentObj);
    }, initialObj);
  return !inJson ? clippings : JSON.stringify(clippings, null, 2);
}