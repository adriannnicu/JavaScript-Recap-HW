// Object
var person1 = {
    firstname: 'Nicu',
    lastname: 'Adrian',
};

var person2 = {
    firstname: 'Ciurea',
    lastname: 'Valentin',
};

var person3 = {
    firstname: 'Popa',
    lastname: 'Mirel',
};

// Array
var persons = [
    person1,
    person2,
    person3,
]

console.log(persons);

var secondPerson = persons[1];
secondPerson.age = "25";

console.log(secondPerson);