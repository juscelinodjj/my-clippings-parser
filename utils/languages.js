'use strict';

export default (function main() {
  return {
    list,
    codes,
    keywords,
    identify
  };
})();

function list() {
  return {
    'de': {
      'bookmark': 'lesezeichen',
      'highlight': 'markierung',
      'note': 'notiz',
      'date': 'hinzugefügt'
    },
    'en': {
      'bookmark': 'bookmark',
      'highlight': 'highlight',
      'note': 'note',
      'date': 'added'
    },
    'es': {
      'bookmark': 'marcador',
      'highlight': 'subrayado',
      'note': 'nota',
      'date': 'añadido'
    },
    'fr': {
      'bookmark': 'signet',
      'highlight': 'surlignement',
      'note': 'note',
      'date': 'ajouté'
    },
    'it': {
      'bookmark': 'segnalibro',
      'highlight': 'evidenziazione',
      'note': 'nota',
      'date': 'aggiunto'
    },
    'pt': {
      'bookmark': 'marcador',
      'highlight': 'destaque',
      'note': 'nota',
      'date': 'adicionado'
    }
  };
}

function codes() {
  return Object.keys(list());
}

function keywords(code) {
  return code ? Object.values(list()[code]) : [];
}

function identify(entry) {
  return codes().find(code => {
    const date = list()[code]['date'];
    const info = entry['info'].toLowerCase();
    return info.includes(date);
  }) || null;
}