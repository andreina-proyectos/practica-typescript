export default class Persona {
    constructor(nombre, apellidos, edad, dni, cumpleaños, colorFavorito, sexo, direcciones, mails, telefonos, notas) {
        this._nombre = nombre;
        this._apellidos = apellidos;
        this._edad = edad;
        this._dni = dni;
        this._cumpleaños = cumpleaños;
        this._colorFavorito = colorFavorito;
        this._sexo = sexo;
        this._direcciones = direcciones;
        this._mails = mails;
        this._telefonos = telefonos;
        this._notas = notas;
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(value) {
        this._nombre = value;
    }
    get apellidos() {
        return this._apellidos;
    }
    set apellidos(value) {
        this._apellidos = value;
    }
    get edad() {
        return this._edad;
    }
    set edad(value) {
        this._edad = value;
    }
    get dni() {
        return this._dni;
    }
    set dni(value) {
        this._dni = value;
    }
    get cumpleaños() {
        return this._cumpleaños;
    }
    set cumpleaños(value) {
        this._cumpleaños = value;
    }
    get colorFavorito() {
        return this._colorFavorito;
    }
    set colorFavorito(value) {
        this._colorFavorito = value;
    }
    get sexo() {
        return this._sexo;
    }
    set sexo(value) {
        this._sexo = value;
    }
    get direcciones() {
        return this._direcciones;
    }
    set direcciones(value) {
        this._direcciones = value;
    }
    get mails() {
        return this._mails;
    }
    set mails(value) {
        this._mails = value;
    }
    get telefonos() {
        return this._telefonos;
    }
    set telefonos(value) {
        this._telefonos = value;
    }
    get notas() {
        return this._notas;
    }
    set notas(value) {
        this._notas = value;
    }
    addTelefono(telf) {
        this._telefonos.push(telf);
    }
    addMail(mail) {
        this._mails.push(mail);
    }
    addAddress(address) {
        this._direcciones.push(address);
    }
}
