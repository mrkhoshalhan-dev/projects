// 1+1,6+6,36+36



function getGen(generations, eInEach){
    let product = 0;
    let c = 1;
    for(let i = 1; i<=generations;i++){
        for(let v=1;v<=c;v++){
            y=i; // starting point
            y+=y; //SO
            y+= c*eInEach; //OS
            
            product+=y;
        }
        
        c+=c*eInEach;
    }
    return product;
}

console.log("Num:",getGen(2,12))