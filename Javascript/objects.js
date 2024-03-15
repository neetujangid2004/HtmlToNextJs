// singleton
// literals     : not make a singleton
// constructor  : always make a singleton (one object)  (Object.create)

// object literals 

const mySym = Symbol("key1");   // symbol
const mySym1 = Symbol("key2");   // symbol

let jsUser = {
    name: "Neetu",
    "full name": "Neetu jangid",
    mySym: "myKey1",
    [mySym1]: "myKey2",
    age: 18,
    location: "jaipur",
    email: "neetujangid.com",
    isLoggedIn: false,
    lastLoginDays: ["Mon","Tues"]
};
console.log(jsUser.location);
console.log(jsUser["email"]);
console.log(jsUser["full name"]);
// console.log(jsUser."full name");       // error

console.log(jsUser.mySym);
console.log(typeof jsUser.mySym);         // string

console.log(jsUser[mySym1]);
console.log(typeof jsUser[mySym1]);       // string
console.log(typeof mySym1);               // object

jsUser.email = "Prakash.com";
Object.freeze(jsUser);                    // log the values means do not change the value of object
jsUser.email = "Prakashjangid.com";       // value is not assign (value is not propoget)
console.log(jsUser.email);                // prakash.com  
console.log(jsUser);  

jsUser.greeting = function(){
    console.log("Hello Js user");
}
// console.log(jsUser.greeting());        // error because object is freeze
console.log(jsUser.greeting);             // undefined

console.log("-----------------------------");
let jsUser1 = {
    name: "Prakash"
};
jsUser1.greeting1 = function(){
    console.log("Hello Neetu");
}
console.log(jsUser1.greeting1);           // return reference of the function and not excute
console.log(jsUser1.greeting1());

jsUser1.greeting2 = function(){
    console.log(`Hello js user, ${this.name}`);
}      
console.log(jsUser1.greeting2());