let counter=0;

document.querySelector("#increment").addEventListener("click",function(){
    counter++;
    document.getElementById("counter").innerText= counter;
    document.querySelector("ul").appendChild(document.createElement('li'));
})
document.getElementById("decrement").addEventListener("click",function(){
    if(counter>0){
        counter--;
        document.querySelector("ul li:last-child").remove();
        document.getElementById("counter").innerText=counter;
    }
})
