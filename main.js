function display(num){
    // to get value
    output.value +=num;   
}

// clear
function clearAll(){
    output.value=''
}

// equal to

function evaluateExp(){

    // eval is a predefined method for calculation such as additon ,sub,mult etc.....
    output.value=eval(output.value)
}

function  removeLast(){

    currentExp=output.value
    output.value=currentExp.slice(0,-1)
}