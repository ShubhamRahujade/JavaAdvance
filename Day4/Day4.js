
// truthy ---> any number , character , string , spl character , " " , [] , {}

// falsy  ---> 0 , undefined , null , "" , 


if(0){
    console.log("Right")
}
else{
    console.log("Not Right")
}

if(3){
    console.log("Right")
}
else{
    console.log("Not Right")
}

if(undefined){
    console.log("Right")
}
else{
    console.log("Not Right")
}

if(null){
    console.log("Right")
}
else{
    console.log("Not Right")
}

if('A'){
    console.log("Right")
}
else{
    console.log("Not Right")
}

if("Shubham"){
    console.log("Right")
}
else{
    console.log("Not Right")
}

if("@"){
    console.log("Right")
}
else{
    console.log("Not Right")
}

if(""){
    console.log("Right")
}
else{
    console.log("Not Right")
}

if(" "){
    console.log("Right")
}
else{
    console.log("Not Right")
}

if([1,2,3]){
    console.log("Right")
}
else{
    console.log("Not Right")
}

if([]){
    console.log("Right")
}
else{
    console.log("Not Right")
}

if({}){
    console.log("Right")
}
else{
    console.log("Not Right")
}


// 0 - Try Again
// 1 - Score more
// 2 - You are passed!

let numA = 2

if(numA == 0){
    console.log("try again")
}
else if(numA > 0 && numA < 2){
    console.log('Score more')
}
else{
    console.log("You are passed!")
}


// Prompt and conditions

// let verifyAge = prompt('Enter your age')
// let Age = Number(verifyAge)

// if(Age >= 18){
//     console.log("You are eligible to drive")
// }
// else{
//     console.log("Sorry! You are not eligible to drive")
// }


if(""){
    console.log("Y")
}
else{
    console.log("N")
}

// 0 - try again
// 1 - score more
// 2 - you are passed!

// let a = 0
// if(a == 0){
//     console.log("try again")
// }
// if(a == 1){
//     console.log("score more")
// }
// else if(a ==2){
//     console.log("you are passed")
// }


let driving = prompt("Whats your age")
let age = Number(driving)

if(age >= 18){
    console.log("you can drive")

}
else{
    console.log("you cannot drive")
}
