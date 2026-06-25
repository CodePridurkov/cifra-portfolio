# Цифра — портфолио студии

Сайт-портфолио студии Цифра. Деплой на GitHub Pages.

## Локальный запуск

```bash
npm install
npm run dev      # http://localhost:5173
```

## Первый деплой на GitHub Pages

### 1. Создать репозиторий на GitHub

Открой <https://github.com/new> → имя репозитория `cifra-portfolio` (или любое другое — главное запомнить).

### 2. Запушить код

```bash
cd E:\work\cifra-portfolio
git init
git add .
git commit -m "init"
git branch -M main
git remote add origin https://github.com/USERNAME/REPO.git
git push -u origin main
```

(подставь свой `USERNAME` и `REPO`)

### 3. Включить GitHub Pages

GitHub → твой репозиторий → **Settings → Pages**
- **Source:** Deploy from a branch
- **Branch:** `gh-pages` / `(root)`
- Save.

### 4. Задеплоить

```bash
# для пути вида https://USERNAME.github.io/REPO/ (с подпапкой)
$env:VITE_BASE = "/REPO/"     # PowerShell (Windows)
npm run deploy

# для USERNAME.github.io (если репо называется именно так)
$env:VITE_BASE = "/"
npm run deploy

# для своего домена (cifra.studio и т.п.)
$env:VITE_BASE = "/"
npm run deploy
```

Через 30–60 секунд сайт будет на адресе из настроек Pages.

## Обновление сайта

После любых правок:

```bash
git add .
git commit -m "что поменял"
git push           # сохранить в репо
npm run deploy     # выложить новую версию на Pages
```

## Подключение своего домена (потом)

1. Купи домен (например `cifra.studio`, `cifradev.ru`).
2. В DNS зоне домена: A-записи на IP GitHub Pages — `185.199.108.153`, `.109.153`, `.110.153`, `.111.153`.
3. Создай файл `public/CNAME` с содержимым `cifra.studio` (только домен, без https).
4. `npm run deploy`. GitHub Pages → Settings → Pages → Custom domain.
