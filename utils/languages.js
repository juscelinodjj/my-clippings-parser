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
      'date': 'hinzugefügt',
      'page': 'seite',
      'position': 'position'
    },
    'en': {
      'bookmark': 'bookmark',
      'highlight': 'highlight',
      'note': 'note',
      'date': 'added',
      'page': 'page',
      'position': 'location'
    },
    'es': {
      'bookmark': 'marcador',
      'highlight': 'subrayado',
      'note': 'nota',
      'date': 'añadido',
      'page': 'página',
      'position': 'posición'
    },
    'fr': {
      'bookmark': 'signet',
      'highlight': 'surlignement',
      'note': 'note',
      'date': 'ajouté',
      'page': 'page',
      'position': 'emplacement'
    },
    'it': {
      'bookmark': 'segnalibro',
      'highlight': 'evidenziazione',
      'note': 'nota',
      'date': 'aggiunto',
      'page': 'pagina',
      'position': 'posizione'
    },
    'pt': {
      'bookmark': 'marcador',
      'highlight': 'destaque',
      'note': 'nota',
      'date': 'adicionado',
      'page': 'página',
      'position': 'posição'
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