function addThree(num, num2) {
    return num + num2;
}
function user(name, age, mail) {
    console.log(name);
    console.log(age);
    console.log(mail);
}
var details = function (name, member) {
    console.log('his name is' + name + 'he is a' + member + 'commitee member');
    return '';
};
var heros = ['batman', 'ironman', 'spiderman'];
heros.map(function (hero) {
    return 'hero is ${hero}';
});
console.log(addThree(50, 30));
user('hari', 50, 'har@gmail.com');
details('hari', true);


