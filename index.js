// const a = {}
// const b = {}
// const c = a
// const d = c
// console.log(a===b)
// console.log(a===c)
// console.log(c===d)

const a = {}
const b = a
b['test']='test value'
console.log('b: ', b)
console.log('a: ', a)
