// Promise

let pro = new Promise(function (resolved, rejected) {
    let a = 100
    let b = 10

    if (a == b) {
        resolved("i am resolved")
    }
    else {
        rejected("i am rejected")
    }

})

pro.then((a) => {
    console.log(a)
}).catch((b) => {
    console.log(b)
})


var w = 10
console.log(w)

var w = 30
console.log(w)

w = 40
console.log(w)

// for (var i = 0; i<3 ; i++){
//     setTimeout(() => {
//         alert (i)
//     }, 1000 + i);
// }




class person {
    constructor(fn, ag, skl) {
        this.fullname = fn
        this.age = ag
        this.skills = skl
    }
}
let amol = new person("shubham", 23, ["python"])

console.log(amol)




class person2 {
    setfullName(fn) {
        this.fullName = fn
    }
    setRollno(rn) {
        this.rollNo = rn
    }
    setSkills(skl){
        this.skills = skl
    }
}

let amol2 = new person2()

amol2.setfullName("Amit")
amol2.setSkills(['Java'])

amol2.setRollno(36)
amol2.setRollno(22)


console.log(amol2)


// Can you see the changes?


// Here is more of it Check it out