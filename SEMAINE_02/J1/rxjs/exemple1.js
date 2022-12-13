const { Observable} = require('rxjs');
const { map, filter } = require('rxjs/operators');

// Création de l'observable
// on passe un objet observer
const numbers = Observable.create((observer) => {
    let count = 1;
    const interval = setInterval(() => {
        observer.next(count);
        count++;
    }, 1000);

    // cette méthode sera lancée si on se désinscrit
    return () => clearInterval(interval);
});

// mapping data
const pipeNumbers = numbers.pipe(
    map(number => number + 10),
    filter(number => number % 2 === 0)
)

// s'inscrire
const subscribeOne = pipeNumbers.subscribe(
    num => console.log(`data : ${num}`)
);

// se désinscrire au bout de 10 secondes
setTimeout(() => {
    subscribeOne.unsubscribe();
}, 10000);