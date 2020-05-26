// Tipos de datos primitivos
// String
var mensaje; // Sintaxis de tipado let identificador: tipo;
mensaje = 'Hola Mundo';
console.log(mensaje);
// Number
var resultado;
resultado = 6.7;
// Boolean
var mayorEdad;
mayorEdad = true;
var isPass = false; // El tipo se establece por inferencia
// iPass = 'si'; // emite error porque el tipo es fuerte y aunque haya sido inferido no se puede modificar
// Elementos de array
var frutas; // El tipo será array de elementos string
frutas = ['Pera', 'Manzana', 'Naranja'];
var resultados; // Otra forma de tipar los elementos de un array
resultados = [9.4, 10, 8, 6];
// Any (para eliminar la inferencia)
// let edad = '40'; 
// edad = 37;
var edad = '40'; // El tipo any permite cualquier tipo (volver a tipado dinámico)
edad = 37;
// Void para tipar que una función no devuelva nada
function saludo() {
    console.log('Hola Mundo!');
    // return 'Hola Mundo!';
}
// Tipado de objetos
var jugador1; // objeto de cualquier tipo
jugador1 = {
    nombre: 'Lionel',
    apellidos: 'Messi'
};
var jugador2; // objeto de una determinada forma
jugador2 = {
    nombre: 'Cristiano',
    apellidos: 'Ronaldo'
    // edad: 40 no podemos poner propiedades que no existen en el tipo
};
var referencia;
referencia = 435678;
referencia = '00004356789';
var toby;
toby = 'Pastor Alemán'; // Deberá tener uno de los valores-tipo permitidos
// Tipado de funciones (parámetros y salida)
function suma(a, b) {
    return a + b;
}
resultado = suma(4, 2);
// Parámetros opcionales en las funciones
function multiplicacion(a, b, mensaje) {
    var resultado = a * b;
    return mensaje ? mensaje + " " + resultado : "El resultado es " + resultado;
}
console.log(multiplicacion(2, 4));
