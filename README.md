# MERN-User-Manager

![Node.js](https://img.shields.io/badge/Node.js-v14.17.0-green)
![Express](https://img.shields.io/badge/Express-v4.17.1-blue)
![JWT](https://img.shields.io/badge/JSON%20Web%20Token-v8.5.1-orange)

Ce repo contient un serveur et une application frontend prêts pour la production pour une application de base de gestion des utilisateurs MERN Stack.  
 
 Le back-end est construit avec Node.js et Express et MongoDB pour Database.

 Front-end est construit avec Reactjs en utilisant Vitejs. 

## Fonctionnalité

- **Gérer les authentifications:** Utilisé [base-auth-handler](https://www.npmjs.com/package/base-auth-handler) pour une authentification robuste JWT.
- **Gérer les erreurs:** Utilisé [base-error-handler](https://www.npmjs.com/package/base-error-handler) pour gérer les erreurs.

## API Documentation

**Note:** La documentation détaillée de l’API Backend est disponible sur Postman. 
Référence : [API Documentation on Postman](https://documenter.getpostman.com/view/27773540/2s9YeG4qvf).

De plus, Swagger est intégré pour une exploration pratique de l’API:

- Swagger UI: [http://localhost:5000/api-docs](http://localhost:5000/api-docs)

Vous pouvez également accéder à la documentation de l’API au format JSON :

- API Docs JSON: [http://localhost:5000/api-docs.json](http://localhost:5000/api-docs.json)

### Backend Server
- Base URL: [http://localhost:5000](http://localhost:5000)

### Frontend Server
- Base URL: [http://localhost:3000](http://localhost:3000)

## Prérequis

- Node.js
- Express
- React.js
- JSON Web Token (JWT)
- MongoDB

## Variable d'environnement

```bash
APPLICATION_NAME = MERN-User-Manager  
PORT = 5000  
NODE_ENV = development  
(Use development for dev environment and production for prod environment)  
JWT_KEY = your_jwt_key_here  
JWT_TOKEN_DURATION = 30d  
MONGO_DB_URI = your_mongodburi_here  
ADMIN_REGISTRATION_KEY = your_adminSecret  
```

## Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/alwinsimon/MERN-User-Manager.git
   ```

2. **Les installations:**

   ```bash
   cd MERN-User-Manager
   ```
   ```bash
   npm install
   ```

   Installer le frontend.
   ```bash
   cd frontend
   ```

   ```bash
   npm install
   ```

3. **Set up environment variables:**

   Créez un fichier `.env' à la racine du projet et ajoutez les variables d’environnement énumérées ci-dessus.

4. **Demarrer le serveur:**  

   ```bash
   npm run app
   ```
