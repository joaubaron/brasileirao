# Como adicionar um novo time

Exemplo: **Vasco**

---

## 1. Criar a pasta do time

Criar pasta `vasco/` com 3 arquivos:

### `vasco/meutime.png`
Escudo do time.

---

### `vasco/manifest.json`
```json
{
  "name": "Vasco",
  "short_name": "Vasco",
  "start_url": "/brasileirao/vasco/index.html",
  "scope": "/brasileirao/vasco/",
  "display": "standalone",
  "theme_color": "#1a1f45",
  "background_color": "#1a1f45",
  "orientation": "portrait-primary",
  "icons": [
    { "src": "/brasileirao/icon-192.png", "sizes": "192x192", "type": "image/png" },
    { "src": "/brasileirao/icon-512.png", "sizes": "512x512", "type": "image/png" }
  ]
}
```

---

### `vasco/index.html`
Copiar o `index.html` do flamengo e trocar **apenas** esta linha:

```javascript
const meutimeUrl = "https://www.flamengo.com.br/";
```
por:
```javascript
const meutimeUrl = "https://www.vasco.com.br/";
```

---

## 2. Atualizar o `sw.js` da raiz

Adicionar 3 linhas no array `ASSETS`:

```javascript
'/brasileirao/vasco/manifest.json',
'/brasileirao/vasco/index.html',
'/brasileirao/vasco/meutime.png'
```

---

## 3. O que NÃO muda

- `deploy.yml` — não mexe
- `sw.js` (exceto o ASSETS) — não mexe
- Ícones da raiz — não mexe

---

## Acessar e instalar

```
https://joaubaron.github.io/brasileirao/vasco/
https://rapid-pine-1fe3.jabaron.workers.dev/fluminense
```
