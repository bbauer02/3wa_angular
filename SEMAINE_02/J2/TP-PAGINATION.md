# Pagination

Vous allez mettre en place la pagination dans l’application. Ce TP n’est pas
trop détaillé, il vous permettra de valider vos compétences vues sur la semaine précédente ainsi
que sur les premiers cours de cette semaine.

Nous indiquons ce que nous souhaitons faire, vous êtes cependant libre d’avoir
une approche personnelle de la problématique.

Nous vous donnons quelques conseils pour vous guider dans la suite du document.

## Exercice

Créez un component propre à la pagination.

```bash
ng g c paginate
```

Mettez en place le component paginate puis placez le code HTML de manière
pertinente dans l’application (utilisez le Bootstrap).

Fonctionnement : des boutons **Previous** et **Next** permettront respectivement de
reculer et d’avancer dans l’affichage des pâtisseries.

Les boutons de pagination seront cliquables et permettront d’afficher un nombre
de pâtisseries prédéfini par page (ceci sera réalisé par vos soins dans le code).

Créez une méthode paginate dans votre service, elle retournera un tableau
de pâtisseries slicées (utilisez la méthode slice de JS).

Dans le component PaginateComponent créez les méthodes de pagination classiques :

next() ; previous() et des propriétés classiques comme perPage (nombre
de pâtisseries par page)), total (nombre total de pâtisseries), ...

Le component enfant PaginateComponent mettra à jour le nombre de pâtisseries à
afficher sur la page « pastries ».