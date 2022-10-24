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
  const reference = object['library'][author ? author : title] ? true : false;
  if (!reference) {
    object['library'][author ? author : title] = {};
  }
  return object;
}

function title(object, data) {
  const {author, title} = data;
  const reference = object['library'][author][title] ? true : false;
  if (!reference) {
    object['library'][author][title] = {'count': {}, 'entries': []};
  }
  return object;
}

function type(object, data) {
  const {author, title, type} = data;
  const reference = object['library'][author][title]['count'][type]
    ? true : false;
  if (!reference) {
    object['library'][author][title]['count'][type] = 0;
  }
  object['library'][author][title]['count'][type] += 1;
  return object;
}

function entry(object, data) {
  const {author, title, page, position, content, type, date} = data;
  const entry = {type, content, page, position, date};
  object['library'][author][title]['entries'].push(entry);
  return object;
}

function main(clippings, data) {
  const fns = [lang, author, title, type, entry];
  return fns.reduce((accumulator, fn) => fn(accumulator, data), clippings);
}

export default main;