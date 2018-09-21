function toBinary(numero){
    var resultado = [], i;
    for(i= numero; i>0; i= parseInt(i/2)){
        resultado.push(i%2);
    }
    return resultado.reverse().join("");
}