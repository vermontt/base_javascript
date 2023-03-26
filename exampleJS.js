const personOne = {name: 'Bob', age: 25}

function increasePersonAge (person) {
    const updPerson = Object.assign ({}, person)
    updPerson.age += 1
    updPerson.name = 'KlonBob'
    return updPerson
}

const updPersonOne = increasePersonAge (personOne)

console.log(personOne)
console.log(updPersonOne)


const sumPositiveNumber = (a, b) => {
if (typeof a !== 'number' || typeof b !== 'number') {return 'Warning, no number'}

if (a <= 0 || b <= 0) {return'Not positive number'}

return a + b
}

console.log(sumPositiveNumber (5, true))
console.log(sumPositiveNumber (-12, 35))
console.log(sumPositiveNumber (12, 45))

const month = 2

switch (month) {
case 12:
    console.log('декабрь')
    break
case 1:
    console.log('январь')
    break
case 2:
    console.log('февраль')
    break
default:
    console.log('это не зимний месяц')
}

for (let F = 1; F < 8; F++) {console.log(F)}

let T = 0
while (T < 5) {
    console.log(T)
    T ++
}

let E = 0
do {console.log(E)
E ++} while (E < 4)

const myObj = {
    x: 10,
    y: true,
    z: 'abc'
}
for (const key in myObj) {
    console.log(key, myObj[key])
}

const myString = 'Hey'
for (const letter of myString) {
    console.log(letter)
}

class Comment {
    constructor(text) {
        this.text = text
        this.voteQty = 0
    }
    upvote () {
        this.voteQty += 1
    }
    static mergecomment (first, second) {
        return `${first} ${second}`
    }
}

const firstComment = new Comment ('Hey Iam Jack')

firstComment instanceof Comment //true
firstComment instanceof Object //true

firstComment.upvote()
firstComment.upvote()
console.log(firstComment.voteQty)

