var Thing = /** @class */ (function () {
    function Thing() {
    }
    Thing.prototype.swim = function () {
        return "Nage comme un canard";
    };
    return Thing;
}());
var duck = new Thing;
console.log(duck.swim());
