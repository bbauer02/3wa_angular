// Implémentation d'une queue
var Queue = /** @class */ (function () {
    function Queue() {
        this._elems = [];
    }
    Queue.prototype.push = function (elem) {
        this._elems.push(elem);
    };
    Queue.prototype.pop = function () {
        return this._elems.shift();
    };
    Object.defineProperty(Queue.prototype, "elem", {
        // getter 
        get: function () { return this._elems; },
        enumerable: true,
        configurable: true
    });
    return Queue;
}());
var queue = new Queue();
queue.push(1);
queue.push(2);
queue.push(3);
queue.push(4);
console.log(queue.pop()); // affiche 1
// Vous pouvez définir un type Array<number> pour T
var queueArray = new Queue();
queueArray.push([1, 2]);
queueArray.push([3, 4]);
queueArray.push([5, 6]);
queueArray.push([7, 8]);
// produit une erreur car le type n'est pas respecté
// queueArray.push("elem");
console.log(queueArray.pop()); // affiche [1,2]
