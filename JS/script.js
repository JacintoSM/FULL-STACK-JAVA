/*
var a, b, c;
const pi = 3.1416;
function suma(a, b) {
    console.log(a + b);
    alert(a + b);
    let c = 3;
    let d = "3";
    alert(c == d);
    alert(c === d);
    n1 = 5;
    n2 = n1++;
    n3 = ++n1;
    alert(n2 + "-" + n3);

    return a + b;
}
function resta(a, b) {
    console.log(a - b);
    alert(a - b);
    return a - b;
}
/*for (i = 0; i < 100; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}*/

/*c = 25;
while (c != 3) {
    console.log("el valor es --> " + c);
    c++;
*/
var numero;
function esPrimo(numero) {
    for (let i = 2; i <= Math.sqrt(numero); i++)
        if (numero % i === 0) return false;
    return true;
}
function numerosPrimos(cantidad) {
    var lista = document.querySelector("#lista");
    lista.innerHTML = "";
    let cambioColor = true;
    for (let x = 0; x <= cantidad; x++) {
        if (esPrimo(x)) {
            let li = document.createElement("li");
            let h1 = document.createElement("h1");
            h1.appendChild(li);
            li.innerHTML = x;
            if (cambioColor) {
                li.style.color = "blue";
                cambioColor = false;
            }
            else {
                li.style.color = "red";
                cambioColor = true;
            }
            //li.classList.add("blue");
            lista.appendChild(li);
        }
    }
}
/*
function cerrar(){
    windows.close();
}
/*function sumar() {
    let numero2 = document.querySelector("#n2").value;
    let resultado = parseInt(numero1) + parseInt(numero2);
    // document.getElementById("resultado").innerHTML = resultado;
    document.querySelector("#resultado").innerHTML = resultado;
}
*/