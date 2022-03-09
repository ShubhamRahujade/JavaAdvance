// @ts-nocheck
// Operators

/* 
    comparison
    logical
    conditional
    switch
    true and false value

*/

// Program 1

let a = 100
let b = 50
console.log(a > b) // Boolean
console.log('-----------')

// Comparison Operators

console.log(8 < 8)
console.log(8 <= 8)
console.log(7 > 6)
console.log(6 <= 7)
console.log(6 == 6)
console.log(6 == '6')
console.log(6 === '6')

// ==(value)
// ===(checks value and type as well)
console.log('---------')

console.log(6 == '6' || 6 != '6')
console.log(6 != 6 || true)

// NOT 

console.log(!true)
console.log(!false)

// conditional statement

// Number of tickets -----> 10% , 20% , 50% Discount

let NumberofTickets = 4

if (NumberofTickets > 0 && NumberofTickets <= 5) {
    console.log("You got 10% discount")
}
if (NumberofTickets > 5 && NumberofTickets <= 10) {
    console.log("You got 20% discount")
}
if (NumberofTickets > 10) {
    console.log("You got 50% discount")
}

console.log('----------------------------------')

// Else if

if (NumberofTickets > 0 && NumberofTickets <= 5){
    console.log("You got 10% discount")
    
}
else if (NumberofTickets > 5 && NumberofTickets <=10) {
    console.log("You got 20% discount")

}
else if(NumberofTickets > 10){
    console.log("You got 50% discount")
}

// Here in 'else if' if the first condition gets true it wont check or the next 
// But in 'else' whether its true or false it will check all the conditions 

