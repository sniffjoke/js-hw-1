// const a = {}
// const b = {}
// const c = a
// const d = c
// console.log(a===b)
// console.log(a===c)
// console.log(c===d)

// const a = {}
// const b = a
// b['test']='test value'
// console.log('b: ', b)
// console.log('a: ', a)

// const user = {
//     name: 'John',
//     address: {
//         city: 'New York',
//         country: 'USA',
//     },
// };
//
// const updatedUser = {...user, address: {...user.address, city: 'Toronto'}}
//
// console.log(updatedUser);
// console.log(user);

// const addElementToArray = (arr, x) => {
//     return [...arr, x];
// }
//
// const originalArray = [1, 2, 3, 4, 5];
// const newArray = addElementToArray(originalArray, 6)
// console.log(originalArray)
// console.log(newArray);

// const user = {
//     name: 'John',
//     age: 25,
//     city: 'New York'
// }
//
// const {age, city, name} = user
// console.log(name, age, city)

// const fruits = ['apple', 'banana', 'orange'];
//
// const [, secondFruit, thirdFruit] = fruits;
// console.log(secondFruit, thirdFruit);

// const person = {name: 'Alice', age: 30}
//
// function printPersonDetails({name, age}) {
//     console.log(`Name: ${name}, Age: ${age}`)
// }
//
// printPersonDetails(person)

// const car = {brand: 'Toyota', model: 'Camry'}
// const {brand, model, year=1989} = car
// console.log(brand)
// console.log(year)
// console.log(model)

const students = [
    {name: 'Alex', grade: 'A'},
    {name: 'Emma', grade: 'B'},
    {name: 'Chris', grade: 'C'},
]

const [{name: student1}, , {name: student3}] = students
console.log(student1, student3)
