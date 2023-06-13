interface Person {
    name : string,
    age : number
}

interface Accnt {

    amount : number ,
    location : string
}


function printPerson(person : Person , accnt : Accnt){
    console.log("his name is " +  person.name)
    console.log("his age is " + person.age)
    console.log("his location is " + accnt.location)
    console.log("his account balance is " + accnt.amount)

}

printPerson({name:'vijay' , age: 20} ,{amount : 10000 , location: 'hyderabad'})


interface Student {
  name: string;
  age: number;
  grade: number;
  courses: string[];
}



const student: Student = {
  name: "student",
  age: 18,
  grade: 23,
  courses: ["Math", "Science", "English"]
};



console.log(student);


export{}

