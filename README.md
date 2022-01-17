# GROUPOMANIA

## Créer un réseau social d'entreprise

*Projet 7 de la formation Développeur web d'OpenClassRooms.*

Le projet consiste à construire un réseau social interne pour les employés de Groupomania.
Le but de cet outil est de faciliter les interactions entre les collègues.

## Compétences évaluées

#### La création de l'application fait appel aux compétences suivantes:

- Implémenter un stockage de données sécurisé en utilisant SQL
- Personnaliser le contenu envoyé à un client web
- Authentifier un utilisateur et maintenir sa session
- Gérer un stockage de données à l'aide de SQL

## Comment utiliser l'application?

#### Les installations et commandes suivantes sont nécessaires:

- Installer Node, Sass, Npm, mySql sur votre poste de travail
- Télécharger ou cloner le projet
- Vous devez créer 3 base de données Sql sur votre poste de travail (groupomania, groupomania_test et groupomania_production) en les laissant dans le dossier par défaut de vos bases de données MySql.
- Pour vous connecter à cette base de données, vous devez renseigner son nom dans le fichier backend/config/config.json
- Vous devez aussi mettre vos informations de connection mysql à cet endroit, dans mon cas sqluser/password.
- Une fois cela fait, vous pouvez créer les tables avec les modèles Sequelize que j'ai concus. La commande pour ca est:  npx sequelize db:migrate (depuis le terminal backend).
- Certaines colonnes des tables ne seront pas utilisées car par manque de temps je n'ai pas pu développer toutes les fonctionnalités que j'aurais voulues.
- Pour profiter pleinement de actions possibles dans l'application, il faut créer un administrateur (qui fait office de modérateur). Pour cela, inscrivez vous de manière classique sur l'application. Puis dans votre terminal mySql, et taper: UPDATE 'users' SET 'isAdmin' = '1' WHERE 'id'=1 (si c'est le premier utilisateur que vous créez)
- Aller dans le frontend (via un terminal) et faire `npm install`
- Faire `npm run serve` , le serveur se lance sur http://localhost:8080
- Aller dans le backend (via un terminal) et  faire `npm install`
- Toujours dans le dossier backend,  créer un fichier .env et insérer dedans (TOKEN='Random_secret_token')
- Faire `nodemon`. L'écoute se fait sur le port 3000 et vous pouvez vous rendre à présent sur l'adresse du localhost pour tester l'application.


#### Sécurisation de l'application et des données?

- bcrypt (hash et salage du mot de passe utilisateur)
- jsonwebtoken (sécurisation de l'authentification pour les requêtes)
- Base de données mySQL sur laquelle les informations sensibles ne sont pas stockées sans cryptage
- Création d'une API REST avec le framework Express
- Vérification du jeton et du propriétaire pour la suppression de contenu
- Jeton avec une durée d'expiration de 12h

## Environnement de développement

#### 

- Framework VUE JS (VUE CLI, VUE ROUTER, VUE X)
- Node / Sass / Npm
- Sequelize / Axios
- Nodemon
- MySql

#### Pour en savoir plus sur la sécurité informatique (développement/production/utilisation):

- [Framework Express: meilleures pratiques en production](https://expressjs.com/fr/advanced/best-practice-security.html)
- [GitHub Advisory Database](https://github.com/advisories)
- [OWASP Top 10 Web Application Security Risks](https://owasp.org/www-project-top-ten/)