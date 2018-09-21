

function areaCirculo(){
    numero = prompt("Escribe el radio (positivo) de un circulo!");
    if(numero >= 0){
        var area;
        area = math.pi*numero;
        console.log("El area del circulo con radio " + numero + "es " + area);
    }else{
        alert("DIJE UN NUMERO POSITIVO");
    }
}