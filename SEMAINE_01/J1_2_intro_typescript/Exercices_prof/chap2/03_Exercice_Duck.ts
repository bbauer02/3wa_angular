// définition de l'interface <=> contrat
interface Duck{
    name : string ;
    swim(): string; 
}

class Thing implements Duck{
    name: string;    
    
    swim(): string {
       return "Nage comme un canard";
    }
}

let duck = new Thing;
console.log(duck.swim());