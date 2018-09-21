
function ordenarAsc(a, b){
    return a-b;
}

function ordernar(elementos){
    elementos = new Array(2,3,1,5,2);
    console.log("Elementos sin ordenar" + elementos);
    elementos.sort(ordenarAsc);
    console.log("Elementos ordenados " + elementos);
}