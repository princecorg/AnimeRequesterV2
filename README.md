# Anime Requester – V2

[![GitHub repo size](https://img.shields.io/github/repo-size/princecorg/AnimeRequesterV2)](https://github.com/princecorg/AnimeRequesterV2) 
[![GitHub last commit](https://img.shields.io/github/last-commit/princecorg/AnimeRequesterV2)](https://github.com/princecorg/AnimeRequesterV2/commits/main)
[![GitHub issues](https://img.shields.io/github/issues/princecorg/AnimeRequesterV2)](https://github.com/princecorg/AnimeRequesterV2/issues)

📝Lien du projet : [Anime Requester V2](https://princecorg.github.io/AnimeRequesterV2/)
---

## Socle technique
- **Langages** : JavaScript, HTML, CSS  
- **IDE** : Visual Studio Code  
- **Versionnage** : Git et GitHub (repository public distant)  

---

## Objectifs pédagogiques
- Utiliser une API conformément à sa documentation  
- Effectuer des requêtes HTTP avec `fetch`  
- Manipuler le DOM pour intégrer dynamiquement des contenus  
- Interagir avec la mise en forme via JavaScript  
- Utiliser les modules JS pour structurer le code  

---

## Fonctionnalités
- Recherche d’animes par :  
  - **Titre**  
  - **ID**  
  - **Classement**  
  - **Genre** (sélection multiple via cases à cocher)  
  - **Liste de tous les genres**  
- Affichage des résultats sous forme de **cartes** :  
  - Image (si disponible)  
  - Titre  
  - Synopsis  
  - Genres / catégories  
  - Classement  
  - Nombre d’épisodes  
- **Bouton Rechercher** et **Bouton Effacer**  
- **Mode clair / sombre**, persistant pendant la session  
- **Saisie et stockage de la clé API en sessionStorage**  
- **Bouton “Retour en haut”** pour une meilleure navigation  
- Design responsive et ergonomique  

---

## API utilisée
**Anime DB API** via RapidAPI : [Anime DB de Brian Rofiq](https://rapidapi.com/brian.rofiq/api/anime-db)  

**Pour utiliser l’API :**  
1. Créer un compte RapidAPI : [https://rapidapi.com/auth/sign-up](https://rapidapi.com/auth/sign-up)  
2. Rechercher “Jikan” et ajouter l’API à vos favoris  
3. Récupérer votre clé API et la saisir dans l’interface de la page  

---

## Contraintes et exigences
- Page **responsive** sur mobile, tablette et ordinateur  
- Code **HTML et CSS validé par les outils W3C**  
- Respect des **exigences d’accessibilité WCAG AA 2.0**  
- Code JavaScript organisé en **modules** (séparation responsabilités : API, affichage, interactions)  
- Projet hébergé sur **GitHub Pages**  

---

## Utilisation
1. Ouvrir la page dans un navigateur moderne.  
2. Saisir votre **clé API** si c’est la première utilisation.  
3. Choisir le type de recherche et compléter le paramètre requis (titre, ID, classement, genre).  
4. Cliquer sur **Rechercher** pour afficher les résultats.  
5. Cliquer sur **Effacer** pour réinitialiser le formulaire (le thème et la clé API persistent grâce au sessionStorage).  
6. Utiliser les boutons en haut à droite pour :  
   - **Basculer le thème clair / sombre**  
   - **Remonter en haut de la page**  
   - **Changer la clé API**  

---

## Ressources utiles
- [Récupérer et afficher des données d’API avec HTML/JavaScript et Fetch](https://www.youtube.com/watch?v=C8bKthavr6E)  
- [Modules JavaScript (tutoriel Grafikart)](https://grafikart.fr/tutoriels/javascript-import-modules-2069)  

---

## Historique des versions
- **V1** : Recherche basique (titre, ID, classement) avec affichage de cartes  
- **V2** : Ajout recherche par genre, stockage clé API et thème, hébergement GitHub Pages
