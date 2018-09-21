
function ordenarAsc(a, b) {
    return a - b;
}

function ordernar(elementos = new Array()) {
    console.log("Elementos sin ordenar" + elementos);
    elementos.sort(ordenarAsc);
    console.log("Elementos ordenados " + elementos);
}

/*
    En si, estaba usando sort, pero no de un solo golpe a mi     
    parecer por el a-b 
*/
function burbuja(arreglo) {
    for (i = 0; i < (arreglo.length - 1); i++)
        for (j = 0; j < (arreglo.length - i); j++) {
            if (arreglo[j] > arreglo[j + 1]) {
                aux = arreglo[j];
                arreglo[j] = arreglo[j + 1];
                arreglo[j + 1] = aux;
            }
        }
    return arreglo
}
