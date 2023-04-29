let counter=0;

document.querySelector("#increment").addEventListener("click",function(){
    counter++;
    document.getElementById("counter").innerText= counter;
    document.querySelector("ul").appendChild(document.createElement('li'));
})
document.getElementById("decrement").addEventListener("click",function(){
    counter--;
    document.querySelector("ul").appendChild(document.createElement('li'));
    document.getElementById("counter").innerText=counter;
})
