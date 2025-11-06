//Destructure name and age from a student object 
const student = {
    Name: 'Harshit',
    age: 21,
}
let {Name, age} = student;
console.log(Name);
console.log(age);

//Loop through keys and values of an object 
for(let keys in student){
    console.log(keys);
}

// Convert object to array using Object.entries() 
Object.entries(student).forEach((e)=>{
    console.log(e[0]+ ':' +e[1]);
});

