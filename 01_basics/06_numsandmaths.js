const score = 400
console.log(score);
const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length)
console.log(balance.toFixed(1));// generally used to estimmating things while building e commerce platforms

const otherNumber = 123.8966;
console.log(otherNumber.toPrecision(3));

const hundreds = 100000// in js we can read the number of zeroes , it can be of any length 
console.log(hundreds.toLocaleString('en-IN'));

// ++++++++++++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++++=========

// console.log(Math);
// console.log(Math.abs(-88));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.2))
// console.log(Math.min(4.2,6,9));
// console.log(Math.max(4.2,6,8));

console.log(Math.random());// gives value bw 0 , 1
console.log(Math.random()*10+1);
console.log(Maths.floor(Math.random()*10)+1);


const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1))+min)