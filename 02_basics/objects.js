// singleton
//Object.Create

// object literals
const mySum = Symbol("Key1")

const JUser = { }// ye empty object hai 
// object me keys & values ka chakkr hota hai 

const JsUser = {
    name: "Satyam Shrivastava",
    age: 20,
    location: "Delhi",
    email: "satyam@google.com",
    isLoggedin: false,
    LastLoginDays: ["Monday", "Tuesday"]
};

console.log(JsUser.email); // accessing the object
console.log(JsUser["email"])

/////// singleton
// Object.create

// object literals

// const mySym = Symbol("key1")


// const JsUser = {
//     name: "Hitesh",
//     "full name": "Hitesh Choudhary",
//     [mySym]: "mykey1",
//     age: 18,
//     location: "Jaipur",
//     email: "hitesh@google.com",
//     isLoggedIn: false,
//     lastLoginDays: ["Monday", "Saturday"]
// }

// // console.log(JsUser.email)
// // console.log(JsUser["email"])
// // console.log(JsUser["full name"])
// // console.log(JsUser[mySym])

// JsUser.email = "hitesh@chatgpt.com"
// // Object.freeze(JsUser)
// JsUser.email = "hitesh@microsoft.com"
// // console.log(JsUser);

// JsUser.greeting = function(){
//     console.log("Hello JS user");
// }
// JsUser.greetingTwo = function(){
//     console.log(`Hello JS user, ${this.name}`);
// }

// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());