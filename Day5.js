// @ts-nocheck
// Loops 
// For & While Loops

// for loop --> for loop is used when we want to loop for a specific number of times

// while loop --> while loop is used when we want to loop for specific thing to happen

// 1) Simple loop

for (let i = 1; i <= 4; i++) {
    console.log(i)
}

console.log('------Reversed------')

// 2) Reverse loop

for (let i = 4; i >= 1; i--) {
    console.log(i)
}

// 3) Table of 2

console.log('---------2 Table-------------')

for (let i = 2; i <= 20; i += 2) {
    console.log(i)
}

// 4) Odd Even
console.log('-------Odd/Even------')

for (let i = 0; i <= 50; i++) {
    if (i % 2 == 0) {
        console.log('Number is Even', i)
    }
    else {
        console.log('Number is Odd', i)
    }
}

console.log('------Another Method to write for loop------')

let i = 0

for (; i <= 5;) {
    console.log(i)
    i++
}



// While Loops
console.log("====While loop====")

// 1) Simple while loop 

let a = 1

while (a <= 4) {
    console.log(a)
    a++
}

// 2) Reverse loop

console.log('==Reverse loop==')

let b = 4

while (b >= 1) {
    console.log(b)
    b--
}

// 3) Table of 2

console.log('===Table Of 2===')

let c = 2

while (c <= 20) {
    console.log(c)
    c += 2
}

// 4) Odd and Even Numbers Upto 50

console.log('===Odd/Even Using While===')

let d = 0

while (d <= 50) {
    if (d % 2 == 0) {
        console.log('Even', d)
    }
    else {
        console.log('Odd', d)
    }
    d++
}

// Break

// Continue

console.log("===Break===")

for (let i = 0; i <= 5; i++) {
    if(i==4){
        break;
        
    }
    console.log(i)
} 

console.log("===Continue===")

for (let i = 0; i<= 5; i++){
    if(i == 3){
        continue;
    }
    console.log(i)
}