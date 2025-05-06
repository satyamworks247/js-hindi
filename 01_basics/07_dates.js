// dates

let myDate = new Date() // we have created an object here 
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());

// we can start with assigning date also 

let myCreatedDate = new Date(2025,05,05);
console.log(myCreatedDate.toDateString());

// timestamps
let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
// imp mathod ->>
newDate.toLocaleString('default',{
    weekday: "long"
})