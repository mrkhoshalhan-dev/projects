// new array methods
const arr= [
    {
        name:"a",
        age:10
    },
    {
        name:"b",
        age:15
    },
    {
        name:"c",
        age:17
    },
    {
        name:"d",
        age:29
    }
]

// let newarr = arr.map(e=>e.age**2)
// console.log(newarr)

// let filterArr = arr.filter(e=> e.age>=18)
// console.log(filterArr)

// let findAge= arr.find(e=>e.age == 17)
// console.log(findAge)

arr.forEach(e => {
    console.log(e.name)
});