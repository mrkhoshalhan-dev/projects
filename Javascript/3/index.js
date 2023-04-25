const ul = document.querySelector("ul li");
console.log(ul);

for(i in ul.length){
    ul[i]="Some change "+i;
}