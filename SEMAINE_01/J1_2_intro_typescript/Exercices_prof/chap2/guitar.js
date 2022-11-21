var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Music = /** @class */ (function () {
    function Music() {
        this._instrument = 'nothing';
    }
    Object.defineProperty(Music.prototype, "instrument", {
        get: function () {
            return this._instrument;
        },
        enumerable: true,
        configurable: true
    });
    Music.prototype.play = function () {
        return "play music";
    };
    return Music;
}());
// classe étendue
var Guitar = /** @class */ (function (_super) {
    __extends(Guitar, _super);
    function Guitar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._instrument = 'guitar'; // définition du nom surcharge la valeur de la classe mère Music
        return _this;
    }
    // implémentation du code utile de la méthode => contrat de la classe mère Music
    Guitar.prototype.makeSound = function () {
        return "C D E F G A B";
    };
    return Guitar;
}(Music));
var guitar = new Guitar;
console.log(guitar.instrument); // affichage du nom de l'instrument
console.log(guitar.makeSound()); // jouer de la musique affiche C D E F G A B
