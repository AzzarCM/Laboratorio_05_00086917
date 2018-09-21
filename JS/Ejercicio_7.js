function esBisiesto(año) {
    return new Date(año, 1, 29).getMonth() === 1
  }

  
//var hola = ((año % 4 == 0)  && (año % 100 != 0)) || (año % 400 == 0)

function esBisiestoV2(año){
    if(((año % 4 == 0)  && (año % 100 != 0)) || (año % 400 == 0)){
        return true;
    }else{
        return false;
    }
}