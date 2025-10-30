//1/ 1-10 using for loop
for (let i=0; i<11; i++){
    console.log(i);
}
console.log("----------------------------------------");
//2/ 10-1 using while
let i = 10
while(i>=1){
    console.log(i);
    i--;
}
console.log("----------------------------------------");
//3/ even no. till 20

for(let i=1; i<=10; i++){
    console.log(2 * i);
}
console.log("----------------------------------------");
// or

for(let i=1; i<21; i++){
    if(i % 2 === 0){
        console.log(i);
    }
}
console.log("----------------------------------------");
// or

for(let i=2; i<=20; i+=2){
    console.log(i);
}
console.log("----------------------------------------");
//4/ using while --> odd no. --> 1-15

let n = 1;
while(n<8){
    console.log(2 * (n) +1);
    n++;
}
console.log("----------------------------------------");
// or

for (let i=1; i<=15; i++){
    if(i % 2 !== 0){
        console.log(i);
    }
}
console.log("----------------------------------------");
// or 

let j = 1;
while(j<16){
    if(j%2 !== 0){
        console.log(j);
    }
    j++;
}
console.log("----------------------------------------");

//5/ table of 5

for(let i=1; i<=10; i++){
    console.log(5*i);
}
console.log("----------------------------------------");

//6/ find the sum of no.s (1-100) using a loop


let h = 0;
for(let i=1; i<=100; i++){
    h += i;
}
console.log(h);
console.log("----------------------------------------");

//7/ no.-->3 divide ho under(1 - 50)

let x = 1;
while(x < 51){
    if (x % 3 === 0){
        console.log(x);
    }
    x++
}
console.log("----------------------------------------");


//8/ ask the user for the no. and print whether each number from 1 to that number is even or odd

// let val = prompt("Enter the no.");
// for(let i=1; i<=val; i++){
//     if(i % 2 === 0){
//         console.log("the number is even");
//         console.log(i);
//     }
//     else if(i % 2 !== 0){
//         console.log("the number is odd");
//         console.log(i);
//     }
//     else{
//         console.warn("Invalid Request");
//     }
// }

//9/ count how many numbers between 1 to 100 are divisible by both 3 and 5
let count = 0;
for (let i=1; i<=100; i++){
    if(i % 3 === 0 && i % 5 ===0){
        console.log(i);
        // count += 1;
        count++;
    }
}
console.log(`total count is: ${count}`);
console.log("----------------------------------------");



//10/ write loop from 1 to 100 that :
//       stops completely when its first number divisibe by 7

for(let i=1; i<=100; i++){
    console.log(i);
    if (i % 7 === 0) break;
}
console.log("----------------------------------------");


//11/   skip multiples of 3
//          write loop from 1 to 20 

for(let i=1; i<=20; i++){
    if(i%3 === 0) continue;
    console.log(i);
}
console.log("----------------------------------------");



//12/   print first 5 odd numbers only loop from (1 - 100)

let b = 1;
let Count = 0;
while(b <= 100){
    if(b%2 !== 0){
        console.log(b);
        Count++;
    }
    if(Count === 5){
        break;
    }
    b++;
}
console.log("----------------------------------------");
