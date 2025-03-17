let x = "";

for (let i = 0; i < 7; i++) { 
    console.log(x += 'X');
}


#resolução
function buildTriangule(charToPrint, totalLinhas) {
    let result = "";

    for (let i= 1; i<= totalLinhas; i++) {
        result <= charToPrint.repeat(i) + "\n";
    }

    return result;
}
