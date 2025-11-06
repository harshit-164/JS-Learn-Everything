// write BMI calculator:

function bmi (weight, height){
    return weight / (height**2)
}
console.log(bmi(70,1.7).toFixed(2));

// discount calculator:

// function discountCal(price, discount){
//     return price - price*(discount/100)
// };
// let deal = discountCal;
// console.log(deal(1000, 20));



// function discountCal (discount){
//     return function priceCal (price){
//             return price - price*(discount/100)
//     }
// }

// let ten = discountCal(10)
// let twenty = discountCal(20)

// console.log(ten(1000))
// console.log(twenty(1000))



function discountCal (discount){
    return function priceCal (price){
            return function dealCAl (deal){
                    return [price - price*(discount/100), deal+2]
            }
    }
}

// discountCal(10)(10000)(300);-----------yeah bhi shi hai!!!

// let ten = discountCal(10);
// let price = ten(10000);
// let deal = price;
// console.log(deal(100))

// let ten = discountCal(10);
// let price = ten(10000);
// console.log(price(300));

let ten = discountCal;
let price = ten(10);
let ogPrice = price;
let deal = ogPrice(10000);
let realDeal = deal;
let val = realDeal(100);
console.log(val);               ///====> Gaand Faad!