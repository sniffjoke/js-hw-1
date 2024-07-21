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

const user = {
    name: 'John',
    address: {
        city: 'New York',
        country: 'USA',
    },
};

const updatedUser = {...user, address: {...user.address, city: 'Toronto'}}

console.log(updatedUser);
console.log(user);

