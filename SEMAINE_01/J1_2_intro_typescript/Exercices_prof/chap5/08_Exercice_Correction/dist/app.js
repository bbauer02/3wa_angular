// Exercice 8.1 et 8.2
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function readonly(target, key, descriptor) {
    descriptor.writable = false; // modifier la visibilité à true si vous voulez redéfinir la méthode
    return descriptor;
}
// decorateur callable avec passage de paramètres
function modify(model) {
    let newModel = model;
    return function (target, key, descriptor) {
        descriptor.value = () => newModel;
    };
}
class Bike {
    constructor() { }
    speed() {
        return 8;
    }
    model() { return 'normal'; }
    price() {
        return 1500;
    }
}
__decorate([
    readonly
], Bike.prototype, "speed", null);
__decorate([
    modify('electric')
], Bike.prototype, "model", null);
let bike = new Bike;
bike.speed = () => 5; // on tente de redéfinir la méthode impossible car writable à false
// la méthode retournera 8 car elle n'est accessible qu'en lecture 
console.log(bike.speed());
console.log(bike.model()); // modification du modèle
function Feature(config) {
    return function (target) {
        // Permet de définir une nouvelle propriété 
        Object.defineProperty(target.prototype, // Nom de la classe Duck 
        'swim', // nom de la fonction que l'on ajoute
        // le descripteur on définit ici la méthode elle-même
        {
            value: () => config.action,
        });
    };
}
let Duck = class Duck {
    say() { return "Je suis un oiseau"; }
};
Duck = __decorate([
    Feature({
        action: "Nage comme un canard"
    })
], Duck);
let duck = new Duck;
console.log(duck.swim());
console.log(duck.say());
