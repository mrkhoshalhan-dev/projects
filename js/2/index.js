async function getData(){
    try{
        const dat = await fetch("https://google.com");
         console.log(dat)
    }catch(error){
        console.log("Sum Error",error)
    }
}
getData()