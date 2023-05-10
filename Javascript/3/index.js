let counter=0;

document.querySelector("#increment").addEventListener("click",function(){
    counter++;
    document.getElementById("counter").innerText= counter;
    const li = document.createElement("li");
    li.innerText= counter;
    document.querySelector("ul").appendChild(li);
})
document.getElementById("decrement").addEventListener("click",function(){
    if(counter>0){
        counter--;
        document.querySelector("ul li:last-child").remove();
        document.getElementById("counter").innerText=counter;
    }
})
