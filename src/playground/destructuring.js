// Object Destructuring

// const person = {
// name : 'Tanima',
// age:36,
// location: {
//     city:'New York',
//     temp:32
//     }
// }

// const {name='Mike',  age} = person;
// const {city, temp:temperature } = person.location;

// console.log(`${name} is ${age}`)
// console.log(`Its ${temperature} in ${city}`)

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name:'Penguin'
//     }

// }

// const {title, author} = book;

// const {name:publisherName = 'Self-Published'} = book.publisher;

// console.log(`${title} ${author} ${publisherName}`);


// Array destructuring 


const address = ['177 Bleeker Street' , 'New York' , 'New York', '10120']

// const [street, city, state, zip] = address

const [, city, state='NY' ] = address

console.log(`You are in ${city}, ${state}`)

const items = ['Coffee (hot)', '$2.00', '$2.50', '$2.75']

// const [item, small , medium, large] = items
const [item,  , medium] = items

console.log(`A medium ${item} costs ${medium}`)
