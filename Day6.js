// While loop ---> Break and Continue


let a = 0

while (a <= 5) {
    if (a == 3) {
        break
    }
    console.log(a)
    a++
}

console.log('====Problem statement (Its going in infinite loop)====')

// let b = 0

// while(b <= 4){
//     if(b == 3){
//         continue
//     }
//     console.log(b)
//     b++
// }

console.log('----Solution 1----')


let c = 0

while (c <= 5) {
    c++
    if (c == 4) {
        continue
    }
    console.log(c) //1//2//3//5//6
}

console.log('----Solution 2----')

let d = 0

while (d < 6) {
   
    if (d == 4) {
        d++
        continue
    }
    console.log(d) //


}