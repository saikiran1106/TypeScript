class students{
    name: string;
    age: number;

    constructor (name: string , age: number){
        this.name= name;
        this.age= age;
    }

    hello() : void {
        console.log('hello my name is ' + this.name + ' & im ' + this.age + 'years old' )
    }

}

const stud1 = new students("sai",24);

stud1.hello();
