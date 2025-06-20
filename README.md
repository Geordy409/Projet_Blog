
# 🚀 Création du projet avec Vite

Ce guide vous accompagne dans la création d’un projet utilisant **Vite** avec **Sass**. Il part d’un projet vierge pour en faciliter la compréhension.

---

## 📁 Étapes de configuration initiale

### 1. Initialisez le projet Node

```bash
npm init
```

### 2. Installez Vite en tant que dépendance de développement

```bash
npm i -D vite
```

### 3. Créez le fichier de configuration `vite.config.js`

```js
import { defineConfig } from "vite";

export default defineConfig({
  root: "./src",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
  },
});
```

---

## 📄 Fichier `.gitignore`

Créez un fichier `.gitignore` à la racine du projet et ajoutez-y :

```
node_modules
dist
```

---

## 🗂️ Structure de base

Créez un dossier `src` avec les fichiers suivants :

- `index.html`
- `style.css`
- `index.js`

---

## 🎨 Utilisation de Sass avec Vite

### 1. Installation de Sass

Pour ajouter Sass à votre projet Vite :

```bash
npm install -D sass
```

### 2. Renommer le fichier CSS

Renommez le fichier `style.css` en :

```
style.scss
```

Vite reconnaîtra automatiquement le fichier comme un fichier Sass.

---

## ✅ Vous êtes prêts !

Lancez le serveur de développement avec :

```bash
npx vite
```

Ou ajoutez un script dans le `package.json` :

```json
"scripts": {
  "dev": "vite"
}
```

Et démarrez avec :

```bash
npm run dev
```

---

```

```

