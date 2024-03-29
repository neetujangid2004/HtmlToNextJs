// Function

console.log("Neetu");
function addTwoNumbers(num1,num2){      // parameters
    console.log(num1 + num2);
}
addTwoNumbers(12,23);   // arguments
addTwoNumbers(3,"4");
addTwoNumbers(3,"a");
addTwoNumbers(3,null);

function addNumber(num1,num2){
    let res = num1 + num2;
    return res;
}
const res = addNumber(23,45);
console.log("Result : " + res);

function loginUser(userName = "Neetu"){
    // if(userName === undefined){
    //     console.log("Please enter your user name");
    //     return;
    // }
    if(!userName){
        console.log("Please enter your user name");
        return;
    }
    return `${userName} just logged in`;
}
console.log(loginUser("Yogesh"));
console.log(loginUser(""));
console.log(loginUser());       // undefined