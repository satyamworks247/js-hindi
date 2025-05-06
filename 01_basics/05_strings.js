const name = "hitesh";
const repoCount = 50;
// console.log(name + repoCount + " Value") This method is not used generally  
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hitesh-hc')// here we are creating aconstructor
console.log(gameName [0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase);
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

  const newString = gameName.substring(0,4)
  console.log(newString);

  const anotherString = gameName.slice(-8,4)// in slicing we can use negative numbers also
  console.log(anotherString);

  const newStringOne = "hitesh  "
  console.log(newStringOne);
  console.log(newStringOne.trim);

  const url = " https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20','-'))

console.log(url.replace('sundar'))// It Replaces the strings 

console.log(gameName.split('-'));// split function helps to split 

// There are many functions like strings in javascriscpt refer to mdn document 

//Method	Description
// length	Returns the length of the string
// charAt(index)	Returns the character at the given index
// toUpperCase()	Converts the string to uppercase
// toLowerCase()	Converts the string to lowercase
// includes(substring)	Checks if the substring exists
// indexOf(substring)	Returns the index of the first match
// slice(start, end)	Extracts part of the string
// substring(start, end)	Similar to slice but doesn't accept negative indexes
// replace(old, new)	Replaces part of the string
// trim()	Removes whitespace from both ends
// split(separator)	Splits the string into an array