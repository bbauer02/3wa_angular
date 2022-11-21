
export class Book {
    private _name: string;

    set name(name: string) { this._name = name; }
    get name(): string { return this._name; };
}

