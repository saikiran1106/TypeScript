function printPerson(person, accnt) {
    console.log("his name is " + person.name);
    console.log("his age is " + person.age);
    console.log("his location is " + accnt.location);
    console.log("his account balance is " + accnt.amount);
}
printPerson({ name: 'vijay', age: 20 }, { amount: 10000, location: 'hyderabad' });
