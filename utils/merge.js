'use strict';

function lang(object, data) {
  const lang = data.lang;
  const reference = object['lang'].includes(lang);
  if (!reference) {
    object['lang'].push(lang);
  }
  return object;
}

function author(object, data) {
  const {author, title} = data;
  const authorOrTitle = author ? author : title;
  const reference = object['library'][authorOrTitle] ? true : false;
  if (!reference) {
    object['library'][authorOrTitle] = {};
  }
  return object;
}

function title(object, data) {
  const {author, title} = data;
  const authorOrTitle = author ? author : title;
  const reference = object['library'][authorOrTitle][title] ? true : false;
  if (!reference) {
    object['library'][authorOrTitle][title] = {'count': {}, 'entries': []};
  }
  return object;
}

function type(object, data) {
  const {author, title, type} = data;
  const authorOrTitle = author ? author : title;
  const reference = object['library'][authorOrTitle][title]['count'][type]
    ? true : false;
  if (!reference) {
    object['library'][authorOrTitle][title]['count'][type] = 0;
  }
  object['library'][authorOrTitle][title]['count'][type] += 1;
  return object;
}

function entry(object, data) {
  const {author, title, page, position, content, type, date} = data;
  const entry = {type, content, page, position, date};
  const authorOrTitle = author ? author : title;
  object['library'][authorOrTitle][title]['entries'].push(entry);
  return object;
}

function main(clippings, data) {
  const fns = [lang, author, title, type, entry];
  return fns.reduce((accumulator, fn) => fn(accumulator, data), clippings);
}

export default main;