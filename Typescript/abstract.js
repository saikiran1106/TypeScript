var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var engine = /** @class */ (function () {
    function engine() {
    }
    return engine;
}());
var car = /** @class */ (function (_super) {
    __extends(car, _super);
    function car() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    car.prototype.startengine = function () {
        console.log(' car has started with smoke & sound');
    };
    return car;
}(engine));
var bike = /** @class */ (function (_super) {
    __extends(bike, _super);
    function bike() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    bike.prototype.startengine = function () {
        console.log('bike has started with high speed');
    };
    return bike;
}(engine));
var c1 = new car();
var b1 = new bike();
c1.startengine();
b1.startengine();
var animal = /** @class */ (function () {
    function animal() {
    }
    return animal;
}());
var cat = /** @class */ (function (_super) {
    __extends(cat, _super);
    function cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    cat.prototype.makesound = function () {
        console.log('meow');
    };
    return cat;
}(animal));
var dog = /** @class */ (function (_super) {
    __extends(dog, _super);
    function dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    dog.prototype.makesound = function () {
        console.log('bark');
    };
    return dog;
}(animal));
var d1 = new cat();
var d2 = new dog();
d1.makesound();
d2.makesound();
