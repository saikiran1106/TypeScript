var exam = /** @class */ (function () {
    function exam(subject, marks, name) {
        this.subject = subject;
        this.marks = marks;
        this.name = name;
    }
    exam.prototype.print = function () {
        console.log(' my name is ' + this.name + ' im studying 10th class & My marks in ' + this.subject + ' ' + this.marks);
    };
    return exam;
}());
var stud2 = new exam('physics', 75, 'stalin');
stud2.print();
var stud = new exam('maths', 75, 'stalin');
stud.print();
