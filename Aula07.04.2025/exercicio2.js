function xadrez(num){ 
    let output = ""; 
    for(let i = 0; i < num; i++){ 
        output += "# "; 
    } 
    for(let i = 0; i < num; i++){ 
        if (i % 2 == 1) 
            console.log(output); 
        else 
            console.log(" " + output); 
    } 
}

xadrez(8);

#resolução
function buildChessBoard (charToPrint, size) {
    let result = "";

    for (let row = 0; row < size; row++) {
        for(let column = 0; colmun <= size; column++) {
            if((row + columns) % 2 == 0){
                result += " ";
            } else {
                result += charToPrint
            }
        }
        result +="/n";
    }
    return result;
}
