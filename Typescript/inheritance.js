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
var users = /** @class */ (function () {
    function users() {
    }
    users.prototype.addUser = function (user) {
        return "".concat(user, " is added as an user");
    };
    users.prototype.changeuser = function (user) {
        return "".concat(user, " name is changed");
    };
    users.prototype.delete = function (user) {
        return " ".concat(user, " name is deleted");
    };
    return users;
}());
var del = /** @class */ (function (_super) {
    __extends(del, _super);
    function del() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return del;
}(users));
var u1 = new del(); // creates & holds a new object
console.log(u1.addUser('sai'));
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.makeSound = function () {
        console.log("Animal makes a sound.");
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name, breed) {
        var _this = _super.call(this, name) || this;
        _this.breed = breed;
        return _this;
    }
    Dog.prototype.makeSound = function () {
        console.log("Dog barks.");
    };
    Dog.prototype.fetch = function () {
        console.log("Dog fetches a ball.");
    };
    return Dog;
}(Animal));
// Creating instances of the classes
var animal = new Animal("Generic Animal");
var dog = new Dog("Buddy", "Labrador");
// Accessing properties and invoking methods
console.log(animal.name); // Output: Generic Animal
animal.makeSound(); // Output: Animal makes a sound.
console.log(dog.name); // Output: Buddy
console.log(dog.breed); // Output: Labrador
dog.makeSound(); // Output: Dog barks.
dog.fetch(); // Output: Dog fetches a ball.
