# HttpClient

## Introduction

Nous allons utiliser maintenant un module pour communiquer avec une base de données distante. 
Nous devrons modifier l’approche pour interroger les données, ceci aura des impacts dans le 
service PastrieService et les components suivants : 
PastriesComponent, PastrieDetailsComponent, PastrieDescriptionComponent.

## Httpclient

Ce module basé sur RxJS permet d’interroger des serveurs distants à l’aide du protocole HTTP. 
Il utilise l’interface XMLHttpRequest exposée par le navigateur.

HttpClient est une couche d’abstraction pour la consommation de requêtes HTTP : 
testabilité, gestion des erreurs, objets Request et Response.

Importez le module dans AppModule de l’application :

```typescript
import { HttpClientModule } from '@angular/common/http';

// N'oubliez pas de le définir dans les imports

imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule, // module HttpClient
],
```

##  Service HttpClient

### Imports 

```typescript
// Service et classe utile
import { HttpClient, HttpHeaders } from '@angular/common/http';
// Opérateurs de RxJS
import { map } from 'rxjs/operators';
// libraire utile pour le traitement de données
import * as _ from 'lodash';

// définition des headers
const httpOptions = {
    headers: new HttpHeaders({
         'Content-Type': 'application/json',})
};
```

L’injection de dépendance dans le service se fera de manière classique : 

```typescript
constructor(private http: HttpClient) { }
```

### Définition des routes

Vous devez également définir les routes permettant d’accéder aux données sur le
serveur de base de données MongoDB dans votre service PastrieService.

```typescript
// Service PastrieService

@Injectable({
providedIn: 'root'
})
export class PastrieService {
    // convention dans l'API ajoutez votre identifant de base de données
    private pastriesUrl = 'http://localhost:4200/pastries'; // votre url locale pour les pâtisseries
    private ingredientsListsUrl = 'http://localhost:4200/ingredientsLists'; // votre url locale pour la liste des ingrédients
}
```

*Nota Bene : l'url pour une seule pâtisserie sera sous la forme "http://localhost:4200/pastrie/{id}"*

## Exercice 1

Voici comment vous allez refactoriser la récupération des données, 
nous vous donnons deux exemples vous ferez le reste de la factorisation pour toute l’application.

Voyez les exemples sur les méthodes getPastries et getPastrie suivantes et 
refactorisez les autres méthodes de l’application pour que tout refonctionne comme avant.
Attention nous utilisons lodash qui est une libraire JS ; elle nous permet ici de préparer 
les données récupérées depuis MongoDB pour les exploiter correctement dans notre application.

```typescript
import {Pastrie} from "./pastrie";

@Injectable({
    providedIn: 'root'
})
export class PastrieService {
    
    // ...

    getPastries(): Observable<Pastrie[]> {
        
        return this.http.get<Pastrie[]>(this.pastriesUrl + '/.json', httpOptions).pipe(
            // Préparation des données avec _.values pour avoir un format exploitable 
            // dans l'applimap(pastries => _.values(pastries)),
            // Ordonnez les pâtisseries par ordre de quantités décroissantes
            map(pastries => {
                return this._pastries.sort(
                    (a, b) => {
                        return b.quantity - a.quantity
                    }
                );
            })
        )
    }

    getPastrie(id: string): Observable<Pastrie> {
    // URL/ID/.json pour récupérer une pâtisserie
        return this.http.get<Pastrie>(this.pastriesUrl + `/${id}/.json`).pipe(
            map(pastrie => pastrie) // JSON
        );
    }
    
    // ...
}
```

Dans le component PastriesComponent vous devez maintenant souscrire pour récupérer les données :

```typescript
// ...

export class PastriesComponent implements OnInit {

    titlePage: string = "Page principale : liste des pâtisseries à gagner";
    pastries: Pastrie[] = PASTRIES;
    selectedPastrie : Pastrie | null = null;
    maxPastries : number = 3;

    constructor(private pastrieService: PastrieService) {
        
    // récupération des données depuis MongoDB avec la méthode HttpClient
        console.log(this.pastrieService.getPastries().subscribe(
            pastries => console.log(pastries)
        ))
    }


    // ...
}
```

Terminez cet exercice en refactorisant les autres méthodes. 
Considérez les remarques pour les méthodes suivantes.

```typescript
map(pastries => {
    if (word.length > 2) {
        let response:Pastrie[] = [];
    }
    // lodash
    _.forEach(pastrie => {
        if (pastrie.title.includes(word)) response.push(pastrie);
    });
    
    return response;
})
```

Pour le component PaginateComponent, vous devrez refactoriser la méthode init
comme suit :

```typescript
init(page: number = 1) {
    // lorsqu'on a à disposition le nombre de pâtisseries depuis la base de données :
    this.aS.count().subscribe(count => {
        this.perPage = this.perPageElement;
        this.setParameters(count, page);
        this.pages = [];
        
        for (let i = 1; i < this.numberPages + 1; i++) {
            this.pages.push(i);
        }
    })
}
```