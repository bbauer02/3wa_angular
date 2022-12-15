#  Les modules

Une application Angular peut être vue comme un ensemble de modules isolés
les uns des autres, contenant une hiérarchie de components et avec la possibilité
de faire communiquer les components directives et services entre ces entités.

Remarque : *La notion de module en Angular est propre à ce Framework.*

## Exemple

Ci-dessous CA1, CA2 et CB1, CB2, CB3 sont les components respectifs des
modules A et B :

![](../../../cours%20antoine/AAH/ANGULAR/SEMAINE_02/J4/images/exemple_modules.png)

## Exercice 01

Créez le module AppRoutingModule à l’aide de la ligne de code suivante, cette
dernière créera un module à la racine de l’application et déclarera ce dernier
dans AppModule :

```bash
ng g m app-routing --flat --module=app
```

Placez la navigation dans ce module et complètez avec les routes. Il faudra également exporter ce module pour qu’il soit accessible dans AppModule (un module
est isolé des autres modules par défaut). Nous avons retiré CommonModule et
la déclaration de component car, ici nous n’en aurons pas besoin :

```typescript
// ...
const pastriesRoutes: Routes = [];

@NgModule({
    imports: [
        RouterModule.forRoot(pastriesRoutes),
    ],
    exports : [RouterModule]
})
export class AppRoutingModule { }
```

Terminez l’exercice en rendant fonctionnel le code.

## Exercice 02

Créez maintenant le module AdminModule et le component pastrie sans “s” pour
la gestion de la ressource pastrie en base de données :

```bash
ng g m admin
```

```bash
ng g c admin/pastrie
```

La dernière commande crée le component pastrie dans le module AdminModule.

Remarques : *lorsque vous créez un module comme nous venons de le faire,
Angular importe dans celui-ci le module CommonModule ; ce dernier contient
les directives dont nous avons classiquement besoin comme ngIf, ngFor dans
les components. Notez que dans l’AppModule ces directives sont importées
directement dans le module BrowserModule.*

Rendre disponible le component PastrieComponent dans le reste de l’application :

```typescript
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PastrieComponent } from './pastrie/pastrie.component';

@NgModule({
    imports: [
// directives classiques à importer dans le module
        CommonModule
    ],
// déclarer le component dans le module
    declarations: [PastrieComponent],
// exporter le component pour le reste de l'application
    exports : [PastrieComponent]
})
export class AdminModule { }
```

Dans le module principal AppModule de l’application importez maintenant
le module AdminModule ; le component exporté, PastrieComponent, sera alors
disponible dans AppModule et donc dans notre application.

Notons que le service PastrieService est disponible dans tous les modules de
l’application car nous l’avons déclaré comme étant disponible pour l’ensemble
de l’application.

```typescript
@Injectable({
providedIn: 'root'
})
```

Changez le fonctionnement de notre application au niveau des routes. Maintenant faites en sorte qu’une fois connecté 
nous soyons redirigés vers la page listant les pâtisseries à administrer 
(nous n’utiliserons plus le component DashboardComponent).

Gérez la redirection dans LoginComponent. Nous choisirons une route admin pour arriver sur la page listant 
les pâtisseries dans la partie administration.

## Exercice 03 (sharemodule)

Nous allons créer un module ShareModule qui permettra de partager le component de pagination, avec d’autres modules. 
En effet, ce dernier se trouve défini dans AppModule et n’est donc pas exporté dans le module AdminModule.  
La technique la plus courante dans ce cas consiste à créer un module de partage permettant de mettre à disposition 
des autres modules les components, directives et services.

Terminez cette refactorisation des modules pour que celle-ci soit fonctionnelle dans l’application et 
ajoutez la pagination dans l’administration des pâtisseries.
