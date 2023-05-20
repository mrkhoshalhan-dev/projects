const oneSecond = () =>{
    return new Promise((res,rej)=>{
        setTimeout(() => {
            res()
        }, 1000);
    })
}

async function call1s(){
    const result = await oneSecond();
    console.log("statement 1", result)
    
    await oneSecond();
    console.log("statement 2")
    
    await oneSecond();
    console.log("statement 3")

    await oneSecond();
    console.log("statement 4")
}

call1s()