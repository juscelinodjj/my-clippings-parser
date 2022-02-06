# Kindle Clippings to JSON

## Uso
```bash
node kc2json.js '/caminho-para/My Clippings.txt'
```
```javascript
kc2json('My Clippings');
```
## Saída JSON
```json
{
  "language": [],
  "books": {
    "book": {
      "clippings": [
        {
          "type": "",
          "text": "",
          "page": "",
          "location": "",
          "date": ""
        }
      ]
    }
  }
}
```
> Caso a propriedade "type" seja bookmark (marcador), a propriedade "text" é omitida.

## Idiomas suportados (My Clippings.txt)
- Alemão
- Espanhol
- Francês
- Inglês
- Italiano
- Português

## Licença
Distribuído sob a licença GPLv3. Ver [LICENSE](https://github.com/juscelinodjj/kc2json/blob/main/LICENSE) para maiores informações.