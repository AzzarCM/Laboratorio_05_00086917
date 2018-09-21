function fibonacci(numerito) {
    var fiboC = 0;
    var fiboU = 1;
    var fibo;

    console.log(fiboC + "");
    console.log(fiboU + "");

    for (var i = 3; i <= numerito; i++) {
        fibo = fiboC + fiboU;
        fiboC = fiboU;
        fiboU = fibo;
        console.log(fibo + "");
    }
}