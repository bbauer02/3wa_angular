// définition de la classe
class Product {
    private _name: string; // privé dans la classe actuelle
    private _ref: number = 1000; // protégé dans la classe actuelle et classe fille

    constructor(name: string) {
        this.name = name; // setter assigne une valeur à l'attribut _name
    }

    // setter
    set name(name: string) {
        this._name = name;
    }

    // getter afficher une valeur dans le code courant
    get name(): string {
        return this._name;
    }

    get ref(): number {
        return this._ref;
    }
    set ref(value: number) {
        this._ref = value;
    }
}

// instance de la classe
let bike = new Product('Super Bike');

console.log(bike.name); // affichera Super Bike

bike.ref = 1001;
bike.name = 'Wonderful Bike';

console.log(`Name: ${bike.name} ref: ${bike.ref}`);


