// Tipos de datos primitivos

// String

let mensaje: string; // Sintaxis de tipado let identificador: tipo;

mensaje = 'Hola Mundo';
console.log(mensaje);

// Number

let resultado: number;
resultado = 6.7;

// Boolean

let mayorEdad: boolean;
mayorEdad = true;

let isPass = false; // El tipo se establece por inferencia

// iPass = 'si'; // emite error porque el tipo es fuerte y aunque haya sido inferido no se puede modificar

// Elementos de array

let frutas: string[]; // El tipo será array de elementos string

frutas = ['Pera', 'Manzana', 'Naranja'];

let resultados: Array<number> // Otra forma de tipar los elementos de un array

resultados = [9.4, 10, 8, 6];

// Any (para eliminar la inferencia)

// let edad = '40'; 
// edad = 37;

let edad: any = '40'; // El tipo any permite cualquier tipo (volver a tipado dinámico)
edad = 37;

// Void para tipar que una función no devuelva nada

function saludo (): void {
    console.log('Hola Mundo!'); 
    // return 'Hola Mundo!';
}

// Tipado de objetos

let jugador1: object; // objeto de cualquier tipo

jugador1 = {
    nombre: 'Lionel',
    apellidos: 'Messi'
}

let jugador2: {nombre: string, apellidos: string}; // objeto de una determinada forma

jugador2 = {
    nombre: 'Cristiano',
    apellidos: 'Ronaldo'
    // edad: 40 no podemos poner propiedades que no existen en el tipo
}


// Tipos de unión

type id = string | number; // El tipo id puede ser string o number

let referencia: id;

referencia = 435678;
referencia = '00004356789';
// referencia = true; error

// Tipos de unión complejos (declarar valores-tipo)

type perro = 'Pastor Alemán' | 'Pastor Belga' |  'Mastín';

let toby: perro;

toby = 'Pastor Alemán'; // Deberá tener uno de los valores-tipo permitidos

// Tipado de funciones (parámetros y salida)

function suma (a: number, b: number): number {
    return a + b;
}

resultado = suma(4, 2);

// Parámetros opcionales en las funciones

function multiplicacion (a: number, b: number, mensaje?: string): string {
    let resultado = a * b;
    return  mensaje ? `${mensaje} ${resultado}` : `El resultado es ${resultado}`;
}

console.log(multiplicacion(2, 4));

// Tipos genéricos (el tipo se define en la invocación de la función)

function getResultado<T> (a: T): T {
    // ...
    return a;  
}

let b = getResultado<string>('Hola Mundo!'); 
let c = getResultado<number>(56);

