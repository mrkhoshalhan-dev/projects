let counter=0;

document.querySelector("#increment").addEventListener("click",function(){
    counter++;
    document.getElementById("counter").innerText= counter;
    const li = document.createElement("li");
    
    li.innerText= counter;
    document.querySelector("ul").appendChild(li);
    if (counter%2==0){
        li.style.background= 'red';
    }else{
        li.style.background = "yellow";
    }
})
document.getElementById("decrement").addEventListener("click",()=>{
    if(counter>=0){
        counter--;
        document.querySelector("ul li:last-child").remove();
        document.getElementById("counter").innerText=counter;
    }
})
