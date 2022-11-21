abstract class Music {
    protected _instrument: string = 'nothing';
    abstract makeSound():string;

    get instrument():string{
        return this._instrument;
    }

    play(): string {
        return "play music";
    }
}

// classe étendue
class Guitar extends Music{
    protected _instrument = 'guitar'; // définition du nom, surcharge la valeur de la classe mère Music

    // implémentation du code utile de la méthode => contrat de la classe mère Music
    makeSound(){

        return "C D E F G A B";
    }
}

let guitar = new Guitar; 

console.log(guitar.instrument); // affichage du nom de l'instrument
console.log(guitar.makeSound()); // jouer de la musique affiche C D E F G A B


