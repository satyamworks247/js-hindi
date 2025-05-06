// arrays in js
// arrys in js are resizable, we can have any data types 

const myArr = [0,1,2,3,4,5, "true","hitesh"]
const myHeros = [ " shaktiman","naagraj"]

// how to access arrays 
console.log(myArr[0]);
// arrays in js creates a shallow copy of an object ( same refrence point as when we change the things , it is changed in original arrays also)
const myArr2 = new Array(1, 2, 3, 4);

console.log(myArr[0]);
// Array Methods
myArr.push(6)
myArr.push(7)
myArr.pop()
console.log(myArr);

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

const newArr = myArr.join()
console.log(myArr);
console.log(newArr);

// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);

// splice() – Destructive, modifies the array
// Used to add, remove, or replace elements in-place.

// Returns an array of removed elements.



/// arrays 2
const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);



console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name: "hitesh"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));