import { Word } from "./data";

// Etat du jeu
export enum Status {
    Winner,
    Loser,
    Progress
}

export class Game {

    private _attempts: number; // nombre de coups
    private readonly _maxAttempts: number = 7; // définir le nombre de coups max en lecture seule
    private _word: string; // mot à devnier en clair
    private _hiddenWord: string; // caché le mot
    private _status: Status; // état du jeu Progress, Winner ou Loser
    private _message: string; // message à destination du joueur

    constructor(private _words: Array<Word>) {
        this.init(_words); 
    }

    /**
     * init : intialiser le jeu 
     * 
     * @param words 
     */
    init(words: Array<Word>): void {
        let randomIndex: number = Math.floor(Math.random() * words.length);
        this._word = words[randomIndex].word;
        this._status = Status.Progress;
        this._attempts = 1;
        this._hiddenWord = words[randomIndex].hide;

        this._message = `Voici un jeu de pendu vous devez deviner le mot caché en ${this._maxAttempts} coups au plus, vous pouvez
        uniquement proposer un mot, certaines lettres du mot à trouver sont affichées. Bonne chance ! mot : ${this.show()}`;
    }

    // getter et setter
    get status(): Status { return this._status; }
    set status(status: Status) { this._status = status; }
    get message(): string { return this._message; }
    // gestion de l'utilisateur : setter et getter
    get attemtps(): number { return this._attempts; }

    /**
    * isWord : test boolean si le mot est celui que l'on cherche ou non
    * 
    * @param word 
    */
    isWord(word: string) {
        return word.toLowerCase() === this._word;
    }

    /**
     * show : affiche le mot caché à deviner
     */
    show(): string {
        return this._hiddenWord;
    }

    /**
     * run: logique du jeu
     * 
     * @param choice 
     */
    run(choice: string): void {

        if (this.isWord(choice)) {
            this._status = Status.Winner as Status;
        } else {
            this._message = `Bien essayé, mais votre mot : ${choice} n'est pas le message caché...
                Recommencez, ${this.show()}
                `;
        }


        this._message += ` nombre de coup(s) restant : ${this._maxAttempts - this._attempts}`;
        this._attempts++;

        if (this._attempts > this._maxAttempts
            && this.status !== Status.Winner)
            this.status = Status.Loser;
    }

    /**
     * final: affiche l'état du jeu à la fin
     */
    final() {
        if (this._status === Status.Winner)
            return `Bravo vous avez trouvé le mot ${this._word} en ${this._attempts - 1}`;

        return `Désolé malgré les ${this._attempts - 1} coup(s) vous n'avez pas trouvé le mot magique !
            On vous le donne quand même c'était : ${this._word}`;
    }

}