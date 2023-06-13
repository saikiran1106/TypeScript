var students = /** @class */ (function () {
    function students(name, age) {
        this.name = name;
        this.age = age;
    }
    students.prototype.hello = function () {
        console.log('hello my name is ' + this.name + ' & im ' + this.age + 'years old');
    };
    return students;
}());
var stud1 = new students("sai", 24);
stud1.hello();
