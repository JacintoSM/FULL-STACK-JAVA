/*function cargaDatos(url) {
    return new Promise(function (resolve, reject) {
        fetch(url).then(function (response) {
            resolve(response.json());

        });
    });
}

const cargaDatos1 = (url) => {
    return new Promise((resolve, reject) => {
        fetch(url).then((response) => {
            resolve(response.json());
        });
    });
}

const continentes = [
    { nombre: "EUROPA", value: "europe" },
    { nombre: "OCEANÍA", value: "oceania" },
    { nombre: "ASIA", value: "asia" },
    { nombre: "AMÉRICA", value: "americas" },
    { nombre: "ÁFRICA", value: "africa" }
];
var continenteGuardado;
verDatosContinentes = () => {
    let select = document.querySelector("#continentes");
    continentes.forEach(continente => {
        let option = document.createElement("option");
        option.value = continente.value;
        continenteGuardado = option.nombre;
        option.innerHTML = continente.nombre;
        select.appendChild(option);
        console.log("probando")
    });
}
verDatosContinentes();
var nombrePais;
verDatosPaises = (continente) => {
    let select = document.querySelector("#paises");
    cargaDatos1("https://restcountries.com/v3.1/region/" + continente).then((paises) => {
        paises.forEach(pais => {
            let option = document.createElement("option");
            option.value = pais.value;
            option.innerHTML = pais.name.common;
            nombrePais = pais.name.common;
            select.appendChild(option);
        });
    });
}
*/
var pais;
cargaDatosGeograficos = () => {
    let latitud = document.querySelector("#latitud");
    let mapa = document.querySelector("#mapa");
    latitud.innerHTML = "LATITUD LOGITUD :   " + pais[0].latlng;
    mapa.innerHTML = "ENLACE MAPA :   " + pais[0].maps.openStreetMaps;
    let div = document.querySelector("#enlace");
    let a = document.createElement("a");
    a.href = pais[0].maps.openStreetMaps;
    a.target = "_blank";
    a.innerHTML = "pulsa aqui para ver el mapa del PAIS";
    div.appendChild(a);

}
cargaDatosTecnicos = () => {
    let dominio = document.querySelector("#dominio");
    let alfaCod2 = document.querySelector("#alfaCodigo2");
    let alfaCod3 = document.querySelector("#alfaCodigo3");
    let fronteras = document.querySelector("#fronteras");
    dominio.innerHTML = "DOMINIO TLD " + pais[0].tld;
    alfaCod2.innerHTML = "CODIGO ALFA 2" + pais[0].cca2;
    alfaCod3.innerHTML = "CODIGO ALFA 3" + pais[0].cca3;
    fronteras.innerHTML = "FRONTERAS " + pais[0].borders;
}
cargaDatosGenerales = () => {
    let moneda = document.querySelector("#moneda");
    let capital = document.querySelector("#capital");
    let monedas = Object.values(pais[0].currencies);
    monedas.forEach(prop => {
        let tabla = document.querySelector("#tabla");
        tabla.innerHTML = "";
        let trCabecera = document.createElement("tr");
        let thCabeceraNombre = document.createElement("th");
        let thCabeceraSimbolo = document.createElement("th");
        thCabeceraNombre.innerHTML = "NOMBRE MONEDA";
        thCabeceraSimbolo.innerHTML = "SIMBOLO";
        trCabecera.appendChild(thCabeceraNombre);
        trCabecera.appendChild(thCabeceraSimbolo);
        tabla.appendChild(trCabecera);
        let tr = document.createElement("tr");
        let td = document.createElement("td");
        td.innerHTML = prop.name;
        let td1 = document.createElement("td");
        td1.innerHTML = prop.symbol;
        tr.appendChild(td);
        tr.appendChild(td1);
        tabla.appendChild(tr);
    });
    capital.innerHTML = " CAPITAL :   " + pais[0].capital;
    console.log("aqui estamos");

}
cargaBandera = () => {
    //let bandera= document.createElement(img);
    //let escudo=document.createElement(img);
    let bandera = document.querySelector("#bandera");
    let escudo = document.querySelector("#escudo");
    bandera.classList.add("bandera");
    escudo.classList.add("escudo");
    bandera.src = pais[0].flags.png;
    escudo.src = pais[0].coatOfArms.png;


}
const continentes = [
    { value: "0", texto: "Selecciona continente..." },
    { value: "europe", texto: "Europa" },
    { value: "africa", texto: "Africa" },
    { value: "asia", texto: "Asia" },
    { value: "americas", texto: "America" },
    { value: "oceania", texto: "Oceania" },
];

verPais = async (valorPaIS) => {
    let url = `https://restcountries.com/v3.1/name/${valorPaIS}`;
    pais = await cargaDatos(url);
    document.querySelector("posicion-menu").innerHTML = pais[0].name.common;

}
cargaPaisesDeContinente = async (value) => {
    let url = `https://restcountries.com/v3.1/region/${value}`;
    let paises = await cargaDatos(url);
    let selectPaises = document.querySelector("#paises");
    selectPaises.innerHTML = "";
    let opttioInicio = document.createElement("option");
    opttioInicio.value = 0;
    opttioInicio.innerHTML = "Selecciona pais....";
    selectPaises.appendChild(opttioInicio);

    paises.forEach((pais) => {
        let option = document.createElement("option");
        option.value = pais.name.common;
        option.innerHTML = pais.name.common;
        selectPaises.appendChild(option);
    });
};

cargaDatos = (url) => {
    return new Promise((resolve, reject) => {
        fetch(url).then((response) => {
            //cambio de prueba
            // setTimeout(() => {
            resolve(response.json());
            //}, 5000);

        });
    });
};
cargaSelectContinentes = () => {
    let selectContinentes = document.querySelector("#continentes");
    continentes.forEach((continente) => {
        let option = document.createElement("option");
        option.value = continente.value;
        option.innerHTML = continente.texto;
        selectContinentes.appendChild(option);
    });
};
