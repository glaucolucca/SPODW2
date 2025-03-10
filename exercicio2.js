function xadrez(num){ 
    let output = ""; 
    for(let i = 0; i < num; i++){ 
        output += "# "; 
    } 
    for (let i = 0; i < num; i++){ 
        if (i % 2 == 1) 
            console.log(output); 
        else 
            console.log(" " + output); 
    } 
}

xadrez(8);