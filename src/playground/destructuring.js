// OBJECT DETRUCTURING

// const person = {
//     name:"Hakan",
//     age:20,
//     location:{
//         city:"Bursa",
//         temp:8
//     }
// }

// const {name:firstName="Anonymous", age, location } = person;
// const {city, temp:temperature} = person.location;

// console.log(`${firstName} is ${age}`)

// console.log(`It is ${temperature&&temperature} in ${city&&city}`)

// const book = {
//     title:"Ego is the enemy",
//     author:"Ryan Holiday",
//     publisher:{
//         //name:"Penguin"
//     }
// };

// const  {name:publisherName="Self-Published"} = book.publisher;
// console.log(publisherName);

// ARRAY DETRUCTURING

// const address = ["1299 S Juniper Street", "Philadelphia", "Pennsylvania", "19147"];

// const [ , , state="New York"] = address;
// console.log(`You are in  ${state}`)


const item = ["Coffee (iced)", "$3.00", "$3.50", "$3.75"];

const [itemName, , mediumPrice] = item;

console.log(`A medium ${itemName} costs ${mediumPrice}`);