class Jugador {
    public nombre: string;
    public apellidos: string;
    dorsal: string; // si no se define la propiedad por defecto es public
    public goles: number = 0;
    private creadoEl: object;  // también hay propiedades protected para herencia clases

    constructor(nombre: string, apellidos: string, dorsal: string) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.dorsal = dorsal;
        this.creadoEl = new Date();
    }

    marcarGol(): void {
        this.goles++;
    }
}

let jugador1 = new Jugador('Cristiano', 'Ronaldo', '07');

jugador1.marcarGol();

// console.log(jugador1.creadoEl); provoca error porque la clase es privada y por tanto no accesible

// Clases con constructor breve

class Player {

    constructor (public nombre: string, 
                 public apellidos: string,
                 public dorsal: string,
                 public goles?: number) {
        this.goles = goles ? goles : 0;
    }

    marcarGol(): void {
        this.goles++;
    }

}

let player1 = new Player('Sergio', 'Ramos', '04');
console.log(player1);

// Interfaces

interface DatosMaestros {
    razonSocial: string;
    cif: string;
}

class Cliente implements DatosMaestros {
    razonSocial: string;
    cif: string;
    formaPago: string = 'Al contado';
    personaContacto: string;

    constructor(razonSocial: string, cif: string, personaContacto: string) {
        this.razonSocial = razonSocial;
        this.cif = cif;
        this.personaContacto = personaContacto;
    }

}