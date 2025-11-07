//byId
let msg = document.getElementById("msg");
console.log(msg); //-------------> isse khali tag dikhega h1 ka1
console.dir(msg); //--------------> pura object dikhega!




//byClassName
let msg2 = document.getElementsByClassName("msg2");
console.dir(msg2);

//querySelector
let qMsg = document.querySelector("#msg"); //khali ek id jo pehle mile usse hi select krta hai!
console.dir(qMsg);
console.log(qMsg);      // document.querySelectorAll("msg")----> sare msg id wale selected ho jate hai!


//----DOM Manipulation
qMsg.innerHTML = "<h3>Meri Baggo Kesi Ho?</h3>"
console.dir(qMsg);
console.log(qMsg)

qMsg.tagName = 'batman';
let tag = qMsg.tagName;




//entire body info
// let body = document.body;
// let dBody = Object.entries(body);
// console.log(dBody)

console.dir(document.domain);
console.dir(document.body);


// withou deep cloning
let batman = {...document}

//with deep cloning
let batwoman = JSON.stringify(document);
let batCity = JSON.parse(batwoman);



