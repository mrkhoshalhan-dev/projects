function fn(a,b){
    if(a>b){
        return a
    }
}

const res = fn(100,10)

res.then((result)=>{
    console.log(result)
})