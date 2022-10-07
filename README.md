# MyClippings Parser
Um parser simples para MyClippings.txt (Kindle)

## Uso
```javascript
import parse from './index.js';

// Retornando Object
const myClippings = parse(fileContent);

// Retornando JSON
const myClippings = parse(fileContent, true);
```

## Saída (json)
```json
{
  "lang": [
    "pt"
  ],
  "library": {
    "[Nome do autor]": {
      "[Título do livro]": {
        "count": {
          "[destaque]": 1,
          "[nota]": 1,
        },
        "entries": [
          {
            "type": "[destaque]",
            "content": "Lorem ipsum.",
            "date": "Adicionado: segunda-feira, 1 de janeiro de 2022 00:00:00"
          },
          {
            "type": "[nota]",
            "content": "Lorem ipsum.",
            "date": "Adicionado: segunda-feira, 1 de janeiro de 2022 00:00:00"
          },
        ]
      }
    }
  }
}
```

## Idiomas suportados
- Alemão
- Espanhol
- Francês
- Inglês
- Italiano
- Português

## Licença
Distribuído sob a licença [GPLv3](https://github.com/juscelinodjj/my-clippings-parser/blob/main/LICENSE).