# MongoDB : Introduction & Présentation

MongoDB est une base de données NoSQL (Not Only SQL) crée en 2007, mature et orientée document (fichier BJSON).

MongoDB est un DSL (Domain-Specific Language), il n'utilise pas le paradigme SQL, mais un langage original dédié à l'interrogation des données.

Il est adapté au stockage de données **massives** qui peuvent varier dans le temps, son DSL est puissant et permet d'interroger les données facilement. Notez que lorsque la structure des données est connues au préalable et ne bouge pas dans le temps on utilisera de préférence du SQL.

Dans un projet d'application Web vous serez amené à travailler avec les **deux** paradigmes SQL et NoSQL, par exemple MySQL et MongoDB.

Enfin, MongoDB propose un ensemble important de drivers pour les langages comme PHP, JS, Python, ... Comme par exemple MySQL.

## Document et collection

Dans une base de données MongoDB vous manipulerez des **documents**, fichiers semi-structurés BJSON dont les propriétés sont typées. BJSON est un **binaire** qui permet d'interroger les données plus rapidement.

Les documents sont stockés dans une collection qui se trouve dans une base de données sur un serveur MongoDB.

## Modélisation des données

MongoDB ne gère **aucun schéma de données** il est orienté flexibilité, les collections n'ont donc pas de structure pré-déterminée ou fixe, elles peuvent donc **évoluer dans le temps**. Dans un document, des champs peuvent être ajoutés, supprimés, modifiés et renommés à tout moment ...

Le modèle des documents est basé sur un système de **clés/valeurs**. Chaque valeur peut être de type scalaire, c'est-à-dire des numériques, chaîne de caractères, boléens ou la valeur particulière `null`. Ces valeurs peuvent également comporter des listes de valeurs ou même des documents imbriqués.

Ci-dessous un exemple représentant une collection de 2 documents :

```json
{
  // Collection
  "pastries": [
    {
      "id": "1",
      "ref": "Pâtisserie",
      "name": "Fondant supreme",
      "description": "Voluptate mollit consectetur pariatur labore. Quis amet quis minim nulla voluptate amet nisi. Ut sint veniam magna aute velit minim laborum eiusmod mollit dolor laborum. Minim Lorem Lorem pariatur adipisicing laborum tempor consequat est officia proident. Qui consequat duis ipsum minim Lorem cillum in excepteur.\r\n",
      "url": "https://media.istockphoto.com/photos/confectioner-decorating-chocolate-cake-closeup-picture-id1187830875?s=612x612",
      "quantity": 8,
      "order": 1,
      "tags": ["sucré", "yummy", "dessert"],
      "like": "Much"
    },
    {
      "id": "2",
      "ref": "Pâtisserie",
      "name": "Cake tout Chocolat",
      "description": "Magna laborum quis qui deserunt id. Aute sint consequat aliquip minim duis tempor reprehenderit laborum pariatur ut anim culpa. Laboris sit ea cillum ex nostrud deserunt. Nulla deserunt exercitation non eu ipsum. Cillum ut irure et ea esse ea anim nostrud proident. Non incididunt ut velit pariatur. Occaecat qui fugiat cupidatat est pariatur irure sunt excepteur anim.\r\n",
      "url": "https://media.istockphoto.com/photos/confectioner-decorating-chocolate-cake-closeup-picture-id1187830875?s=612x612",
      "quantity": 10,
      "order": 2,
      "tags": ["sucré", "yummy", "dessert", "chocolat"],
      "like": "Much"
    }
  ]
}
```

Remarque : chaque document possède obligatoirement une clé unique `_id`, le type de cette propriété est par défaut **ObjectId**, mais peut être de n'importe **quel type scalaire**. La valeur de ce champ doit cependant **être unique** dans le document et bien sûr non mutable. Vous ne pouvez pas définir par exemple cette clé avec un array ou un objet qui sont des valeurs mutables.

## Installation de MongoDB

**Windows, macOS, Linux ?**

Si vous êtes sous **macOS** ou **Linux**, il est plus pratique d'utiliser Docker pour mettre en place une base Mongo dans un conteneur.

Si vous êtes sous **Windows** (et que vous n'avez pas déjà Docker d'installé), il est préférable d'installer MongoDB manuellement.

Voici les deux procédures différentes :

### 1.a. Docker

Vous devez au préalable avoir Docker installé sur votre système avant de continuer : https://docs.docker.com/get-docker/

Vous utiliserez l'[image officielle MongoDB](https://hub.docker.com/_/mongo) se trouvant sur le docker hub. Vous pouvez récupérer cette image directement avec la commande suivante :

```bash
docker pull mongo
```

Puis, démarrez un nouveau conteneur nommé `mongo_node` en partageant le port interne de MongoDB `27017` avec le même numéro de port sur la machine hôte :

```bash
docker run --name mongo_node -p 27017:27017 -d mongo
```

Le conteneur peut ensuite être stoppé et redémarré avec les commandes suivantes :

```bash
docker stop mongo_node # stoppe le conteneur sans le supprimer
docker start mongo_node # redémarre le conteneur
```

_⚠ Attention : si vous supprimez le conteneur, vous supprimerez également toutes les données qui vont avec._

---

Vous avez maintenant une base MongoDB sur laquelle il sera possible de se connecter avec Express en utilisant le port `27017`.

N'oubliez pas que pour aller consulter votre base, il faudra entrer dans le conteneur et lancer la commande `mongosh` :

```bash
docker exec -it mongo_node bash

> mongosh

> show dbs
```

### 1.b. Windows

Vous pouvez installer MongoDB en utilisant l'installeur officiel **MongoDB Community Server** :

https://www.mongodb.com/try/download/community

**ATTENTION** : Veillez à choisir l'installation **Custom** et non complète, puis choisissez **et notez** l'emplacement des fichiers et dossiers de Mongo dans votre système (par défaut : `C:\Program Files\MongoDB\Server\`).
Choisissez l'installation de MongoD en tant que Service, et **n'installez pas MongoDB Compass** : c'est une interface graphique pour Mongo qui peut être installée séparament. Mais nous utiliserons la ligne de commande pour dialoguer avec Mongo dans ce cours.

Une fois l'installation terminée, ouvrez un terminal et vérifiez que vous avez accès à la commande `mongo` en tapant : `mongo --version`.

Si vous obtenez une erreur type _- commande non reconnue -_, il faut alors modifier votre variable d'environnement `Path` :

1. Ouvrez le menu "Démarrer"
2. Tapez _"Modifier les variables d'environnement système"_
3. Cliquez sur le bouton _"Variables d'environnement..."_
4. Cliquez sur la variable `Path` dans la liste des variables utilisateur et cliquez sur "Modifier"
5. Créez une nouvelle entrée contenant le chemin vers `/bin` à l'emplacement où vous avez installé Mongo (par défaut : `C:\Program Files\MongoDB\Server\<VOTRE_VERSION>\bin`)
6. Refermez toutes les fenêtres en appuyant sur OK.
7. Relancez **complètement** votre terminal et tapez à nouveau la commande `mongo --version`

---

Mongo dispose de 2 éléments :

- Le serveur de base de donnée (`mongod.exe`).
- Le client (`mongo.exe`) pour se connecter au serveur.

Comme vous avez installé MongoD en tant que Service, vous n'aurez pas besoin de lancer manuellement le serveur 👍.

#### Mongo SH

Le programme Mongo Shell (`mongosh.exe`) est une version modernisée du CLI installé par défaut avec MongoDB (`mongo.exe`).

Cette installation n'est pas obligatoire mais plutôt conseillée pour avoir des couleurs et des options supplémentaires pour manipuler vos bases de données.

[Installer Mongo Shell](https://www.mongodb.com/try/download/shell)

### 2. Connectez-vous à MongoDB

Ouvrez un terminal et connectez-vous à votre serveur MongoDB (si vous êtes sous Docker, n'oubliez pas d'abord d'entrer dans le conteneur) :

```bash
mongosh
```

## Exemples de commandes MongoDB

Une fois connecté sur votre serveur MongoDB, vous avez accès aux commandes CLI (Command Line Interface). Si vous souhaitez quitter le CLI, vous taperez dans MongoDB :

```bash
quit()  # équivalent : exit
```

Dans le CLI sur le serveur MongoDB, vous avez accès aux commandes de base suivantes :

```js
// Affichez les bases de données
show dbs

// Connexion et/ou création d'une base de données "restaurants"
use restaurants

// Connaitre le nom de la base de données sur laquelle on est connecté
db

// Créer une collection vide "addresses"
db.createCollection('addresses')

// Voir les collections existantes de la 'db'
show collections

// Insérer un document dans une collection
db.addresses.insertOne(
  {
    name: 'Indiana Coffee',
    location: '4th Baker Street, London'
  }
)

// Voir la liste des documents dans une collection
db.addresses.find()

// Renommer une collection "addresses" en "address"
db.addresses.renameCollection("address")

// ex: Supprimer l'ensemble des documents dans une collection
db.address.deleteMany({})

// Supprimer physiquement une collection
db.address.drop()

// Supprimer la base de données actuelle
//  ⚠ Cela supprimera également toutes les collections dans cette base !
db.dropDatabase()


// Efface la console
cls
```

# Mongoose : ODM Object Document Mapping

Nous allons aborder MongoDB en utilisant une couche d'abstraction (mongoose) pour l'intégrer dans Express.

Mongoose utilise les Promesses JS. Nous utiliserons par la suite la syntaxe `async/await` de JavaScript pour manipuler ces promesses.

## Mongoose : Installation & exemple

Créez dans votre dossier `/api/` un dossier **yams**. Puis installez Mongoose :

```bash
# Initialisation du projet
npm init -y

# Installation du ODM
npm install mongoose --save
```

Dans le fichier `app.js`, nous allons tout d'abord nous connecter à la base de données `yams`, notez que celle-ci se créera automatiquement dans MongoDB si elle n'existe pas.

Dans un fichier à la racine du projet créer un fichier `.env` dans lequel vous définissez la chaîne de connexion :

N'oubliez pas d'installer également **express**.

Créez maintenant un fichier `app.js` à la racine du projet, écrivez :

```js
import express from "express";
import mongoose from "mongoose";

// Connexion à la base de données
mongoose
  .connect("mongodb://localhost:27017/yams", {
    useNewUrlParser: true,
    useUnifiedTopology: true, // options qui évitent des warnings inutiles
  })
  .then(init); // Toutes les méthodes de mongoose renvoient des promesses

async function init() {
  // …
}
```

## Création de modèle

Dans la fonction `init()`, nous allons maintenant créer un schéma pour les données.

```js
const PastriesSchema = new mongoose.Schema({
  ref: String,
  name: String,
  description: String,
  quantity: Number,
  order: Number,
  url: String,
  tags: [String],
  like: String,
  ingredients: [String],
  date : Date
});
```

Puis nous créeons les collections et un modèle à partir de ce schéma, voyez la proposition de serveur Node.js dans les dossiers.

```js
const PastrieModel = mongoose.model("pastries", PastriesSchema);
```

Une fois le modèle créé vous pouvez par exemple vous en servir pour créer un nouveau document, que vous enregistrez dans votre base données comme suit :

```js
// Création d'une instance de document
data = {
  ref: "Pâtisserie",
  name: "Tarte poire chocolat",
  description:
    "Nostrud veniam dolor velit id occaecat cupidatat aliquip exercitation id aliqua nostrud. Ad mollit Lorem consectetur minim consequat est eiusmod deserunt pariatur est ullamco. Veniam anim veniam Lorem excepteur irure. Esse adipisicing nulla in incididunt. Consectetur fugiat exercitation aliquip excepteur ipsum ullamco ullamco magna commodo.\r\n",
  url: "https://media.istockphoto.com/photos/confectioner-decorating-chocolate-cake-closeup-picture-id1187830875?s=612x612",
  quantity: 5,
  order: 7,
  tags: ["sucré", "yummy", "chocolat", "poires", "fruits"],
  like: "Much",
  ingredients: ["ad", "qui", "deserunt", "nulla", "cupidatat"],
};
const Pastrie = new PastrieModel({ ...data });

// Sauvegarde du document en base
try {
  await Pastrie.save();
  console.log(doc);
} catch (err) {
  console.error(err.message);
}
```

Pour vérifier que le document est bien enregistré, on peut utiliser la méthode `find`. Elle s'utilise comme un _find_ dans MongoDB, avec la même syntaxe :

```js
try {
  const docs = await Pastrie.find({});
  res.json(docs);
} catch (err) {
  console.error(err.message);
}
```

## Démarrer votre serveur

Testez cet exemple sur votre serveur. Vérifiez dans la console mongo que les documents ont bien été créés.

```bash
mongosh

> db.Pastrie.find({})
```

Serveur exemple complet :

```js
import express from "express";
import mongoose from "mongoose";

// Connexion à la base de données
mongoose
  .connect("mongodb://localhost:27017/yams", {
    useNewUrlParser: true,
    useUnifiedTopology: true, // options qui évitent des warnings inutiles
  })
  .then(init); // Toutes les méthodes de mongoose renvoient des promesses

async function init() {
  // Création d'un schéma
  const PastriesSchema = new mongoose.Schema({
    name: String,
    date: { type: Date, default: Date.now },
  });

  // Création d'un objet Modèle basé sur le schéma
  const CatModel = mongoose.model("cats", CatsSchema);

  // Initialisation de l'app Express
  const app = express();

  // On interroge la base de données et on récupère tous les documents liés à la collection cats
  // ==========================
  app.get("/", async (req, res) => {
    try {
      // la méthode .find() du Modèle permet de récupérer les documents
      const docs = await CatModel.find({});
      res.json(docs);
    } catch (err) {
      res.status(500).send(err.message);
    }
  });

  // Création d'un nouveau document
  // ==========================
  app.get("/save", async (req, res) => {
    try {
      const Cat = new CatModel({ name: "Neko", date: "1990-02-02" });
      // on sauve garde l'instance du modèle que l'on vient de créer dans la base de données MongoDB kittens avec la méthode .save()
      await Cat.save();
      res.status(201).send("Saved!");
    } catch (err) {
      res.status(500).send(err.message);
    }
  });

  // Démarrage de l'app Express
  app.listen(8000, () =>
    console.log(`Server running at http://localhost:8000/`)
  );
}
```

## 01 Exercice Schéma

Créez dans le dossier Exercices un dossier `/inventory/`.

Voici un exemple de document produit :

```js
{
    sale : true,
    price : 0.99,
    society : "Alex",
    qty: 19,
    size: { h: 11, w: 29, uom: "cm" },
    year : "2019-08-01"
};
```

1. En vous aidant de la documentation de Mongoose, créez le schéma correspondant à ce document dans un nouveau fichier `Product.js` et exportez son modèle Mongoose ([Documentation en ligne](https://mongoosejs.com/docs/guide.html))

```js
import mongoose from "mongoose";
const { Schema, model } = mongoose;

// TODO …

export const ProductModel = /* TODO … */
```

2. Ajoutez des documents à votre collection.

Créez un fichier principal que vous appellerez `save.js` , importez votre modèle ainsi que les données depuis `./Data/products.js`, du dossier d'exercice.

Puis à l'aide de l'instruction suivante insérer les données en base de données, écrire le code dans un fichier save.js

```js
await ProductModel.insertMany(/* VOS DOCUMENTS */);
```

Pour insérer les données tapez la ligne de commande suivante :

```bash
node save.js
```

3. Vérifiez que les données sont bien en place à l'aide de la syntaxe suivante, dans le même fichier save.js

```js
const companies = await ProductModel.find(
  {},
  { _id: 0, society: 1, price: 1, qty: 1 }
);
console.log("Companies:", companies);
```

## Query

Vous bénéficiez de toute la syntaxe de MongoDB pour effectuer des requêtes. Par exemple si l'on souhaite récupérer uniquement les produits dont la quantité est supérieure ou égale à 100 on écrira :

```js
const companiesHighStock = await ProductModel.find({ qty: { $gte: 100 } });
```

Rappels de syntaxe MongoDB.

```js
// plus grand que
$gt, $gte;

// Plus petit que
$lt, $lte;

// collection inventory  quantité < 20
db.inventory.find({ quantity: { $lt: 20 } });
```

D'autres filtres :

```js
// différent de
$ne
"number" : {"$ne" : 10}

// fait partie de ...
$in, $nin
"notes" : {"$in" : [10, 12, 15, 18] }
"notes" : {"$nin" : [10, 12, 15, 18] }

// Ou
$or
"$or" : [
  { "notes" : { "$gt" : 10 } },
  { "notes" : { "$lt" : 5  } }
]
// and
$and
"$and" : [
  { "notes" : { "$gt" : 10 } },
  { "notes" : { "$lt" : 5  } }
]

// négation
$not
"notes" : {"$not" : {"$lt" : 10} }

// existe
$exists
"notes" : {"$exists" : true}

// tous les documents qui possède(nt) la propriété level
db.inventory.find( { level : { $exists: true } } )

// tous les documents qui ne possède(nt) pas la propriété level
db.inventory.find( { level : { $exists: false } } )

// test sur la taille d'une liste
$size
"notes" : {"$size" : 4}

// element match

/*
{
    "content" : [
        { "name" : <string>, year: <number>, by: <string> }
        ...
    ]
}
*/

{ "content": { $elemMatch: { "name": "Turing Award", "year": { $gt: 1980 } } } }

// recherche avec une Regex simple
$regex
{ "name": /^A/  }

```

Vous pouvez également ordonner les résultats en fonction d'un champ du document avec 1 et -1 pour respectivement croissant et décroissant.

```js
await ProductModel.find({ qty: { $gte: 20 } }).sort({ qty: -1 }); // Par ordre de quantité décroissant
```

## Mise à jour

Les méthodes de modification vous permettent facilement de mettre à jour les documents :

Exemples :

1. Update unique : ne modifie que le 1er document trouvé qui correspond à la requête

```js
await ProductModel.updateOne({ society: "Alex" }, { $set: { qty: 1000 } });
```

2. Update multiple : modifie TOUS les documents trouvés qui correspondent à la requête

```js
await ProductModel.updateMany({ qty: 100 }, { $set: { qty: 200 } });
```

## Suppression

Les modèles Mongoose disposent également des méthodes de suppression :

```js
ProductModel.deleteOne({ name: "Alex" }); // Supprime le 1er document trouvé

ProductModel.deleteMany({ name: "Alex" }); // Supprime TOUS les documents trouvés
```

---

## 02 Exercice pastries

Récupérez le fichier `Product.js`, et vérifiez que les données sont toujours présentes dans la base `shop`.

Mettez en place une petite API pour interroger ces données. Cette application retournera uniquement du JSON. Vous installerez un serveur Node.js Express avec ce que vous avez déjà vu en cours.

Voici les endpoints API que l'on souhaiterait mettre en place :

- / => Sur l'adresse principale on peut afficher la statistique des contenus : combien de document en tout (JSON)

- /all => Tous les noms des entreprises avec leurs quantitées respectives

- /delete/Alex => Supprimez un document donné en fonction du nom de sa société.

- /show/Alice => Affichez les informations d'une société en fonction de son nom.

Vous utiliserez également les mots-clé `async/await` pour manipuler les promesses Mongoose.