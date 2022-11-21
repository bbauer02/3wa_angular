# Les Directives d'attributs

Une `directive` est un compasant **Angular** qui ne possède pas de template ! 

Créer une directive permet d'intéragir avec des éléments HTML d'une page en leur attachant un comportement spécifique. 

Plusieurs directive peuvent être appliqué à un même élément. 

Une directive possède un sélecteur CSS qui indique au framework où l'activer. 
Lorsqu'Angular trouve une directive, il instancie alors la classe correspondante et donne à l'instance le contrôle sur la portion du DOM qui lui revient. 

Il existe 3 types de `directive` :

* Les composants.
* Les directives d'attributs ( représentatées au sein des balises HTML).
* Les directives structurelles. ( comme les `*ngIf` et `*ngFor`).


## Créer une directive d'attribut

Nous voulons changer le comportement de notre application. 
Il serait bien de pouvoir survoler notre liste de pâtisserie avec le curseur et de pouvoir mettre en évidence la carte d'une pâtisserie par une bordure colorée différente des autres. 

Nous allons donc créer une directive nommé `appBorderCard` pour gérer cela. Elle sera chargée d'ajouter une bordure de couleur sur la carte d'une pâtisserie lorsqu'elle sera survolé par le curseur de l'utilisateur. 

```
ng generate directive border-card
```

Un fichier est nommé `border-car.directive.ts` est créé. 

Son contenu : 

```typescript
import { Directive } from '@angular/core';

@Directive({
  selector: '[appBorderCard]'
})
export class BorderCardDirective {

  constructor() { }

}
```

Le décorateur `@Directive` ajoute un paramètre à notre class `BorderCardDirective` nommé `selector`. 

Cela correspond au nouvel attribut qui pourra être intégré dans nos éléments HTML. Vous remarquerez que le nom de cet attribut est encapsulé dans des `[]`, pour indiquer que ce `selector` va permettre de brancher un élément du DOM avec cet attribut. 

Par conséquent, nous allons avoir besoin ici, de manipuler cet élément du DOM. Il va falloir injecter sa référence dans notre directive par l'intermédiaire d'une injection de dépendance via le constructeur. 

* Ajoutez donc au constructeur : 

```typescript
private el : ElementRef
```

* Ajouter une méthode `setBorder` qui prend en argument une chaine de caractère `color`.

* Dans le constructeur, utilisez `setBorder` avec la couleur : `#f5f5f5` par exemple. 

Il faut maintenant que notre directive soit sensible aux évenements émis par l'utilisateur. 

Pour cela, il faudra ajouter une nouvelle importation : `HostListener` qui permet d'ajouter un `Listenner` d'événements à une méthode. 

**Par exemple :**
A la méthode `OnClick()`, j'ajoute le décorateur `HostListener` qui se "branche" sur les événements de click de souris. 

```typescript
 @HostListener('click') onClick() {
    console.log("Click !!);
  }
```

* Créez  une méthode décorée par `@HostListener` qui permettra de changer la couleur de la bordure au survol de la souris. 
  

Pour utilisez votre directive, il suffit d'ajouter l'attribut `appBorderCard` à l'élément HTML de votre projet ! 

* Appliquez la directive sur une carte de pâtisserie. 

Maintenant, nous souhaitons personnaliser la couleur depuis le template. 
Par exemple en écrivant : 


```html
 <div appBorderCard="red">
```

Pour cela, il faut pouvoir préciser une propiété d'entrée pour notre directive avec la notation `@input` que nous allons importer dans le fichier : `border-car.directive.ts`.

Ajoutons ensuite une propriété `borderColor` pour paramétrer les couleurs des bordures. 

```typescript
 @Input('appBorderCard') borderColor: string;
```

Maintenant que notre `directive` est branchée avec les entrées venant du template, faite les modifications dans le programme afin de permettre d'utiliser une couleur personnalisée. 

N'oubliez pas de relancer votre serveur pour que les modifications soient prises en compte. 



