let student = {
    name: 'tere mast mast do nain',
    age: 20,
    isEnrolled: true,
    true: 'smart',
    4:'no'
}

const user = {
    "first-name": "Cutie",
}
console.log(user["first-name"]);


let key = 'age';
const kehgyi = {
    age: 21
}
console.log(kehgyi[key]);

let cars = {
    name: 'Thar',
    model:{
        name1: 'thar roxx',
        name2: 'thar base'
    },
    price: 21+'L',
}
console.log(cars.model.name1);
console.log(cars?.models?.name1);

//destructuring:
let {name} = cars;
let {name1} = cars.model;
let {name2} = cars.model;

const users =  {
    "first-name": "Harsh",
    "Second-Name": "Trivedi"
};

let {'first-name' : firstname} = users;


// for-in
const course = {
    title: "JavaScript",
    duration: "4 weeks"
};

for (let keys in course){
    console.log(keys);
}

Object.entries(course).forEach((el)=>{
    console.log(el[0]+ ":" +el[1]);
});


console.log(cars);
let thar = JSON.parse(JSON.stringify(cars));
thar.name = 'jimmy'
console.log(thar);

let age = "chabi" ;
let objected = {
    naam: 'Harshal',
    kaam: 'Code Wode krta hai',
    [age]: 21
}
console.log(objected.chabi);