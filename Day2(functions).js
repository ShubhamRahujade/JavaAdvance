// Functions

let a = 100
let b = 20

console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)
console.log(a % b)
console.log('---------------------')


// Types of functions in JS

// Function Declaration

// Program One

function calculator(x, y) {
    console.log(x + y)
    console.log(x - y)
    console.log(x * y)
    console.log(x / y)
}
calculator(30, 10)
console.log('---------')
calculator(40, 5)
console.log('----------')

// Functions Expression or first class expression

// Program Two

let calculator2 = function (x, y) {
    console.log(x + y)
    console.log(x - y)
    console.log(x * y)
    console.log(x / y)
}
calculator2(2, 2)
console.log('-----------')

// Arrow function

// program Three

let calculator3 = (x, y) => {
    console.log(x + y)
    console.log(x - y)
    console.log(x * y)
    console.log(x / y)
}
calculator2(8, 2)
console.log('--------------')
calculator3(100, 50)
console.log('--------------')

// Function without parameter and without return type

function add() {
    console.log(9 + 8)
}
add()
add()
console.log('--------------')

// Function with parameter and without return type

function mul(x, y) {
    console.log(x * y)
}
mul(9, 9)
mul(8, 7)
console.log('---------------')

// Function with parameter and with return type

let div = (x, y) => (x / y)

let aa = div(50, 10)
console.log(aa)
console.log(aa + aa)
console.log(aa * 4)
console.log('----------------')

/* Advantage Of Arrow Function ----> We can write a Arrow functions in such a way that, if we have single statement in function
then we can remove blocks and remove return keyword also
*/

let yes = function(){
    return 4
}
let aaa = yes()
console.log(aaa)


let multiplication = (a,b)=> (a*b)
let ccc = multiplication(10,20)
console.log(ccc)