var Jugador = /** @class */ (function () {
    function Jugador(nombre, apellidos, dorsal) {
        this.goles = 0;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.dorsal = dorsal;
        this.creadoEl = new Date();
    }
    Jugador.prototype.marcarGol = function () {
        this.goles++;
    };
    return Jugador;
}());
var jugador1 = new Jugador('Cristiano', 'Ronaldo', '07');
jugador1.marcarGol();
// console.log(jugador1.creadoEl); provoca error porque la clase es privada y por tanto no accesible
// Clases con constructor breve
var Player = /** @class */ (function () {
    function Player(nombre, apellidos, dorsal, goles) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.dorsal = dorsal;
        this.goles = goles;
        this.goles = goles ? goles : 0;
    }
    Player.prototype.marcarGol = function () {
        this.goles++;
    };
    return Player;
}());
var player1 = new Player('Sergio', 'Ramos', '04');
console.log(player1);
var Cliente = /** @class */ (function () {
    function Cliente(razonSocial, cif, personaContacto) {
        this.formaPago = 'Al contado';
        this.razonSocial = razonSocial;
        this.cif = cif;
        this.personaContacto = personaContacto;
    }
    return Cliente;
}());
