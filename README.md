# 🚀 Projet BLOG

Ce projet utilise **Vite** pour le bundling rapide et moderne, avec **Sass** pour le stylage avancé.

---

## ⚙️ Étapes de configuration

### 1. Initialiser le projet Node

```bash
npm init
```

### 2. Installer Vite

```bash
npm install -D vite
```

### 3. Ajouter la configuration de Vite

Créez un fichier `vite.config.js` :

```js
import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  root: "src",
  build: {
    outDir: "../dist",
    target: "es2022",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        form: resolve(__dirname, "src/form/form.html"),
      },
    },
  },
});
```

---

## 🎨 Ajouter Sass

### 1. Installer Sass

```bash
npm install -D sass
```

## 📁 Structure du projet

```bash
vite-project/
│
├── dist/                   # Répertoire de sortie (généré automatiquement)
├── node_modules/           # Modules Node
├── public/                 # Contient les fichiers statiques
├── src/                    # Répertoire source principal
│   ├── assets/
│   │   ├── images/         # Images
│   │   ├── javascripts/    # Scripts JS
│   │   │   ├── modal.js
│   │   │   └── topbar.js
│   │   └── styles/         # Fichiers CSS générés automatiquement
│   │       ├── index-GrrC6sdN.css
│   │       └── main-GrrC6sdN.css
│   ├── form/               # Dossier pour les composants de formulaire (si utilisé)
│   ├── index.html          # Fichier HTML principal
│   ├── index.js            # Script d'entrée
│   ├── index.scss          # Fichier SCSS (page principale)
│   └── style.scss          # Fichier SCSS (général)
│
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js
```

---

## ▶️ Démarrer le projet

Lancer le serveur de développement :

```bash
npx vite
```

Ou en ajoutant ce script dans `package.json` :

```json
"scripts": {
  "dev": "vite"
}
```

Et ensuite :

```bash
npm run dev
```

---

## ✅ Vous êtes prêts !

Vous pouvez désormais développer avec **Vite** et **Sass** dans un environnement rapide, modulaire et moderne. Créé avec ❤️ par Geordy.🎉
