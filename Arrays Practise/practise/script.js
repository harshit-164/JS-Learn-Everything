//1. Create an array of student names and print each
let arr = ['Harshit', 'Irfan', 'Vaibhav'];
arr.forEach(val => console.log(val));

//2. Filter even numbers from an array
let mix = [1,2,3,4,5,6,7,8,9];
let even = mix.filter(function (el){
    return (el%2===0);
});
console.log(even);

//3. Map prices to include GST (18%)
let prices = [719, 243, 1209, 1699, 1203, 457];
let finalPrice = prices.map( (el)=> (el+(el*(18/100))) );
console.log(finalPrice);

//4. Reduce salaries to calculate total payroll
let salaries = [27000, 35000, 47000, 54000, 70000, 89000, 11170];
let payroll = salaries.reduce(function (acc, val){
        return acc+val;
},0)
console.log(`Total Payroll is: ${payroll}`);

//5. Find the first student with grade A
let students = ['C', 'D', 'F', 'B', 'A', 'A']
let gradeA = students.find((el)=> (el==='A'));
console.log(gradeA);

//6. Write a function to reverse an array
let aniamls = ['elephant', 'tiger', 'eagle', 'shark','mendak'];
console.log(aniamls.reverse());

//7. Sort array of ages in ascending order
let ages = [61,16,34,67,95,44,33,12,91,19,3,6]
let sortedAges = ages.sort((a,b)=> (a-b));
console.log(sortedAges);

//8. Destructure first two elements of an array
let world = ['japan', 'newyork', 'iceland', 'switzerland'];
let [a, b] = world;

//9. Use some() to check if any student failed
let marks = [97, 0, 9, 10, 33, 24, 12];
let result = marks.some((el)=> el>33);
console.log(result);

//10. Use spread to copy and add new item
let items = ['shoes', 'skirts', 'tops', 'girl-accessories'];
let mine = ['glasses', ...items];
console.log(mine);