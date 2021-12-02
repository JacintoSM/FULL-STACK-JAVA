
// NO EXAMEN las funciones son hijas de Object, `por tanto podeos hacer:
var Animal = function(){
    this.nombre = "Perro"
    this.sonido = "Guau!";
    this.emitirSonido = function(){
    console.log(this.sonido);
    }
    }
    var miPerro = new Animal();
    miPerro.emitirSonido();

    var Animal = function(nombre, sonido){
        this._nombre = nombre;
        this._sonido = sonido;
        this.emitirSonido = function(){
        console.log("El " + this._nombre + " hace " + this._sonido);
        }
        }
        var miPerro = new Animal("Perro", "Guau!");
        var miGato = new Animal("Gato", "Miau!");
        miPerro.emitirSonido();
        miGato.emitirSonido();
//nuevo
class Animal{
    constructor(nombre, sonido){
    this._nombre = nombre;
    this._sonido = sonido;
    }
    emitirSonido(){
    console.log("El " + this._nombre + " hace " + this._sonido);
    }
    }
    var miPerro = new Animal("Perro", "Guau!");
    var miGato = new Animal("Gato", "Miau!");
    miPerro.emitirSonido();
    miGato.emitirSonido();
    //
    class Vehiculo {
        constructor(tipo, nombre, ruedas) {
        this.tipo = tipo;
        this.nombre = nombre;
        this.ruedas = ruedas
        }
        getRuedas() {
        return this.ruedas
        }
        arrancar() {
        console.log("Arrancando el " + this.nombre);
        }
        aparcar() {
        console.log("Aparcando el " + this.nombre);
        }
        }
        
        class Coche extends Vehiculo {
            constructor(nombre) {
            super('coche', nombre, 4)
            }
            }
var beetle = new Coche('Volkswagen Beetle')
beetle.getRuedas() // 4
beetle.arrancar() //
//4.1 Usando arrow functions
//Las arrow functions aparecen para evitar que sigamos escribiendo código 

