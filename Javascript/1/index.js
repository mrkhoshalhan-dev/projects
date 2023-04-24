let number = 10;
function operation(NUMBER,OPERATION,VARIABLE){
    if(OPERATION=="+"){
        return VARIABLE+NUMBER
    }
    else if(OPERATION=="-"){
        return VARIABLE-NUMBER
    }
    else if(OPERATION=="*"){
        return VARIABLE*NUMBER
    }
    else if(OPERATION == "/"){
        return VARIABLE/NUMBER
    }
    else{
        return VARIABLE+NUMBER
    }
}

newNum= operation(20,"*",number);
console.log(newNum)