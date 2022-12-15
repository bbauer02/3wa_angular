# Login

Dans cette partie, nous allons nous connecter à la base de données.

## Exercice 01

Créez un service AuthService dans l’application et implémentez la méthode
auth dans ce service.

```typescript
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    
    constructor() { }
    
    // méthode d'authentification
    auth(email: string, password: string): Promise<any> {
        return; // TODO
    }
}
```

Créez un component DashboardComponent, pour l’instant ne faite rien dans ce
dernier.

En utilisant la méthode auth que nous venons de voir, terminez l’exercice en
utilisant cette méthode dans la partie login de l’application. Vous utiliserez le
service router d’Angular pour faire une redirection vers la page du dashboard
une fois authentifié.

Gérez un message d’erreur si l’utilisateur se trompe dans le choix de l’email et
du password.

Remarque : *Pensez à créer la route dashboard.*

## Exercice 02

Nous allons maintenant mettre en place la protection des routes pour accéder
au dashboard.

Créez tout d’abord le service GuardService et importez dans ce service les services
router et AuthService :

```typescript
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';   

@Injectable({
    providedIn: 'root'
})
export class GuardService implements CanActivate {
    constructor(private aS: AuthService, private router: Router) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): any | boolean {

        // TODO ...
        return false;
    }
}
```

Protégez les routes dans l’AppModule de la manière suivante :

```typescript
const pastriesRoutes: Routes = [
    // ...
    {
        path: 'dashboard', canActivate: [GuardService],
        component: DashboardComponent
    },
];
```

Terminez l’exercice en créant la méthode logout pour se déconnecter et faites en
sorte que lorsqu’on est connecté on ait dans le menu principal les options logout
et dashboard qui apparaissent à la place de login, voyez l’image qui suit.

*Indications : vous devrez utiliser la propriété authState du service AuthService
dans le menu pour vérifier ce point.* 

Non connecté :

![](../../../cours%20antoine/AAH/ANGULAR/SEMAINE_02/J4/images/logged_out.png)

Et une fois connecté :

