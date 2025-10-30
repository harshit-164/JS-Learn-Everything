// function declaration 
let sayHi = function(){
    console.log("Hi!!!");
}
sayHi();

// function statement
function sayHello(){
    console.log("Hello!!");
    
}
sayHello();

// fat arrow function
let water = ()=>{                        //--------------->Parameters
    console.log("Paaaaani!!!");
    
}
water(); //--------------------> Arguments

// how does parametsers and arguments work
let person = prompt("Naam Btao:")
let greet = (el)=>{
    console.log(`${el} Bhai kesa hai!`);
}
greet(person);

//REST parameters in Functions

function speed(a,b,c, ...zam){
    console.log(a,b,c, zam);
}
speed(10, 20, 40, 80, 160, 320, 640);


// return ----> jha se aaye ho whi jaao!

function add (a, b){
    return a+b;
}

let sum = add(10,11);
console.log(sum); 

// first class functions -----------------important !!!
function one (val){
    return val();
}

let msg = one(function (){
    return "Hello";
});

console.log(msg);