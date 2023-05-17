const fn = ()=> {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            document.querySelector("html").style.background= 'red';
        resolve("the promise was resoled")
        },2000)
        
    })
}

fn().then(res=>{
    console.log(res)
})