/*let numeros = [9,2,6,8,4,1,5,3,7];
for (let i = 0; i < numeros.length; i++)
    console.log(numeros[i]);


numeros.forEach(numero => console.log(`forEach arrow ${numero}`));*/

burbuja = () => {
    var lista = [389, 703, 247, 563, 224, 714, 464, 953, 708, 201, 887, 550, 515, 206, 131];
    var n, i, k, aux;
    n = lista.length;
    console.log(lista); // Mostramos, por consola, la lista desordenada
    // Algoritmo de burbuja
    for (k = 1; k < n; k++) {
        for (i = 0; i < (n - k); i++) {
            if (lista[i] > lista[i + 1]) {
                aux = lista[i];
                lista[i] = lista[i + 1];
                lista[i + 1] = aux;
            }
        }
    }

    console.log(lista); // Mostramos, por consola, la lista ya ordenada
}

