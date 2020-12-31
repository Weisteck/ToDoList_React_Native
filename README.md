# To Do List

## Sommaire :

* Consignes, objectifs.
* Organisation du dossier
* Les difficultés rencontrées
* Les modules complémentaires installés

## Consignes et objectifs :

### Consignes : 

> Il vous sera demandé de rendre sur Moodle la ou les URL correspondantes:
> * Pour github, le lien vers le repository (veillez à le rendre publique)

### Objectifs : 

> Le but de ce projet est de créer une application de TodoList. Celle-ci peut prendre la forme que vous souhaitez aussi bien sur le fond que sur l’apparence. Quelques instructions seront quand même à respecter.

## Organisation du dossier

```
├── routes
│   └── homeStack.js
├── screens
│   ├── details.js
│   └── home.js
└── src
    ├── detailitem
    │   └── main
    │       ├── index.js
    │       └── styles.js
    ├── header
    │   ├── index.js
    │   └── styles.js
    ├── listitem
    │   ├── addtodoitem
    │   │   ├── index.js
    │   │   └── styles.js
    │   ├── main
    │   │   ├── index.js
    │   │   └── styles.js
    │   └── todoitem
    │       ├── index.js
    │       └── styles.js
    └── old.folder.test
        └── crashtest.js
App.js
```
L'`App.js` est le fichier source qu'intéreprête l'Application.

Dans le dossier `routes` se trouve le chemin de navigation des différentes vues.

Dans le dossier `screens`, il y a les fichiers appelé par l'application quand on change de vue.

Le dossier `src` est le dossier qui contient tous les composants personnalisés pour ce projet.

:warning: Ne pas prendre un considération le dossier `old.folder.test`, c'est juste pour conserver le travail de recherche pour résoudre mon problème de flalist et d'identifiant unique.

## Difficultés rencontrés :

Arriver à passer une fonction dans une vue de navigation.

Le Asyncstorage avec la Flalist et le besoin d'identifiant unique.

## Les modules complémentaires installés : 

```bash

expo init
npm install @react-native-async-storage/async-storage
npm install @react-native-community/masked-view
npm install react-native-screens
npm install @react-native-navigation
npm install @react-navigation/native
npm install @react-navigation/stack
npm install react-native-paper
npm install react-native-elements
expo install react-native-gesture-handler react-native-reanimated

```
:+1: D'ailleuirs prochaine fois plutôt utiliser `expo` à la place de `npm`, comme cela ça permet de vérifier la compatibilité des modules installés et des versions de chacun.