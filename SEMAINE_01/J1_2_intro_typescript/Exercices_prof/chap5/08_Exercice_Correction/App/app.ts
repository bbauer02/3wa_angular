// Exercice 8.1 et 8.2

function readonly(target, key, descriptor) {
    descriptor.writable = false; // modifier la visibilité à true si vous voulez redéfinir la méthode

    return descriptor;
}

// decorateur callable avec passage de paramètres
function modify(model: string) {
    let newModel = model;

    return function (target, key, descriptor) {
        descriptor.value = () => newModel;
    };
}

class Bike {
    constructor() { }
    @readonly
    speed() {
        return 8;
    }
    @modify('electric')
    model() { return 'normal'; }

    price() {
        return 1500;
    }
}

let bike = new Bike;
bike.speed = () => 5; // on tente de redéfinir la méthode impossible car writable à false

// la méthode retournera 8 car elle n'est accessible qu'en lecture 
console.log(bike.speed());
console.log(bike.model()); // modification du modèle


function Feature(config) {

    return function (target) {
        // Permet de définir une nouvelle propriété 
        Object.defineProperty(
            target.prototype, // Nom de la classe Duck 
            'swim', // nom de la fonction que l'on ajoute
            // le descripteur on définit ici la méthode elle-même
            { 
                value: () => config.action,
            }
        );
    }
}

@Feature({
    action: "Nage comme un canard"
})
class Duck {
    say() { return "Je suis un oiseau"; }
}

let duck = new Duck;
console.log(duck.swim());


console.log(duck.say());
