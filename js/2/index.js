async function getData(){
    try{
        const dat = await fetch("https://codedamn.com");
         console.log(dat)
    }catch(error){
        console.log("Sum Error",error)
    }
}
getData()