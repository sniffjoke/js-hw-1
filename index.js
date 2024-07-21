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

const addElementToArray = (arr, x) => {
    return [...arr, x];
}

const originalArray = [1, 2, 3, 4, 5];
const newArray = addElementToArray(originalArray, 6)
console.log(originalArray)
console.log(newArray);
