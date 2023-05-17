const getData = () =>{
    return fetch("data.json")
}

getData().then(res=>{
    console.log("pass 1")
}).then(res2=>{
    console.log("pass 2")
}).then(res3=>{
    console.log('pass 3')
    throw new Error("this is just an error message")
}).then(res4=>{
    console.log("this should not be seen")
}).catch(err=>{
    console.log(err)
}).then(res5=>{
    console.log("pass 5")
})