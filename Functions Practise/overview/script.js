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


//Higher order functions------> ese functions jisme function return ho ya parameter mai function accept kare
function abcd(){
    return function (){
        console.log("Hui Hui")
    }
}
abcd()();

// Pure vs Impure Functions:
//Pure: Bahr ke variable ki value na badle!!
//Impure: Jo Bhar ke varibale ke hisab se value badl de!!

let j = 12;

function pure(){
    console.log("mai pure hu!");
}

function impure(){
    j++
    console.log(j);
}

//Clousres: Ek esa function jo rerturn kare ek aur function!

function closures(){
    return function (){
        console.log("i am clousre!");
    }
}

//lexical scoping: function ke andr ka variable khali ussi function ya uske andr ke function mai use ho skta hai! viceversa not possible!
function lexical(){
    console.log("Mai 3rd level pe  hu");
    let a = 10;

    abcd();
    function abcd(){
        console.log("Mai 3rd level pe  hu");
        console.log(a);
        let b = 12;

            efgh();
            function efgh(){
                console.log("Mai 3rd level pe  hu");
                console.log(a);
                console.log(b)
            }
    }
}
lexical();



//IFES : IMEDIATELY INVOKED FUNCTION EXPRESSIONS

(function harsh(){
    console.log("HARSH JI KAISE HO!");
}) ();                                               //------> yhi IFES hai: Bracket ke andr function


// Hoisting------------------> functions mai hoti hai
// Function expressions -------> NO HOISTING
// Function Statements ====>   HOISTING is possible!

keys();                                  //----------- Hoisting not possible
statements();                     //----------- Hoisting not possible



//expression
let keys = ()=>{
    console.log("Keyboard");
}                                      //----------- Hoisting not possible


//statements
function statements (){
    console.log("Hello");
}                                      //----------- Hoisting not possible




//use rest parameters for accepting any number of scores and return the total.
function getScore(...scores){
    let total = 0;
    scores.forEach((el)=>{
        total += el;
    });
    return total
}

console.log(getScore(10,20,30,15));


// Clousres 
function outer (){
    let count = 0;
    return function () {
        count++;
        console.log(count);
    };
}

let counter = outer();
counter();
counter();

//  what is IIFE? Name one real world use cases:

let shery = (function(){
    let score = 0;
    return {
        getScore: function (){
            console.log(score);
        },
        setScore: function (val){
            score = val;
        }
    };
})();
