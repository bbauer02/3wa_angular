# Component `PastrieDetailsComponent` & `PastriesComponent`

Nous allons voir maintenant la communication de l’enfant vers le parent data
**binding one-way** encore mais dans l’autre sens.

## Introduction aux notions EventEmitter et @Ouput ##

### Exercice 12 (Application)

Vous allez mettre en place une méthode **preference** sur un bouton **Choice** dans le
template `pastrie-details.component.html`. L’objectif étant de pouvoir désigner les pâtisseries 
que vous préféreriez obtenir en lot.  

**Attention ! Vous ne pouvez pas désigner plus de 3 pâtisseries que vous souhaitez gagner.**

Suivez les indications ci-dessous elles vous guident dans le développement de cette partie.

Définissez cette méthode dans le *TypeScript* (component `PastrieDetailsComponent`).

Nous allons préciser à *Angular* que nous souhaitons émettre un événement vers
le component parent.

Importez dans le component la classe `EventEmitter` et le décorateur `@Output` :

```typescript
// PastrieDetailsComponent
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
```

Puis, définissez, toujours dans le component, la propriété `onOrder` de ce component
comme suit :

```typescript
// PastrieDetailsComponent
@Output() changePreference: EventEmitter<string> = new EventEmitter();
```

Nous définissons une propriété émettrice. C’est celle-ci qui nous permettra
d’émettre l'`id` de la pâtisserie vers le parent (communication de l’enfant vers le parent
data **binding one-way**).

Dans la méthode `order` de ce component `PastrieDetailsComponent` écrivez maintenant :

```typescript
// PastrieDetailsComponent
preference(id: string) {
    this.changePreference.emit(id); // émettre l'id de la pâtisserie vers le parent
}
```

## Récupération de la propriété depuis le parent

Dans le template `pastrie.component.html`, dans le sélecteur du component
enfant `PastrieDetailsComponent`, écrivez le code qui suit :

```typescript
<!-- changePreference méthode enfant et changeParentPreference méthode parent -->
<app-pastrie-details [pastrie]="selectedPastrie" (changePreference)="changeParentPreference($event)">
</app-pastrie-details>
```

La méthode `changeParentPreference` est une méthode du component `PastriesComponent` :
* Définissez-la.
 La propriété `event` est une convention d’écriture pour signaler que
l’on récupère une propriété émise.

Lorsqu’on cliquera sur le bouton `Choice`, dans un détail d'une pâtisserie dans la colonne de
gauche affichez un tag `[Priority]`, sur la pâtisserie cliquée, à côté du bouton **Choice**.

Une fois que 3 pâtisseries ont été sélectionnées, on souhaite que le bouton **Choice** soit désactivé (non-cliquable).