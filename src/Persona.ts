import Direccion from "./Direccion";
import Mail from "./Mail";
import Telefono from "./Telefono";

export default class Persona {
    private _nombre: string;
    private _apellidos: string;
    private _edad: string;
    private _dni: string;
    private _cumpleaños: string;
    private _colorFavorito: string;
    private _sexo: string;
    private _direcciones: Direccion[];
    private _mails: Mail[];
    private _telefonos: Telefono[]
    private _notas: string[];


    constructor (nombre: string, apellidos: string, edad: string, dni: string, cumpleaños: string, colorFavorito: string, sexo: string, direcciones: Direccion[],mails: Mail[], telefonos: Telefono[], notas: string[]) {
    
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

    public get nombre():string {
        return this._nombre
    }

    public set nombre(value: string) {
        this._nombre = value
    }

    public get apellidos():string {
        return this._apellidos;
    }

    public set apellidos(value:string) {
        this._apellidos = value
    }

    public get edad():string {
        return this._edad
    }

    public set edad(value:string) {
        this._edad = value
    }

    public get dni():string {
        return this._dni
    }

    public set dni(value:string) {
        this._dni = value
    }

    public get cumpleaños():string {
        return this._cumpleaños
    }

    public set cumpleaños(value:string) {
        this._cumpleaños = value
    }

    public get colorFavorito():string {
        return this._colorFavorito
    }

    public set colorFavorito(value:string) {
        this._colorFavorito = value
    }

    public get sexo():string {
        return this._sexo
    }
    
    public set sexo(value:string) {
        this._sexo = value
    }

    public get direcciones(): Direccion[] {
        return this._direcciones
    }

    public set direcciones(value: Direccion[]) {
        this._direcciones = value
    }

    public get mails(): Mail[] {
        return this._mails
    }

    public set mails(value: Mail[]) {
        this._mails = value
    }

    public get telefonos(): Telefono[] {
        return this._telefonos
    }

    public set telefonos(value: Telefono[]) {
        this._telefonos = value
    }

    public get notas():string[] {
        return this._notas
    }

    public set notas(value:string[]) {
        this._notas = value
    }

    public addTelefono(telf: Telefono) {
        this._telefonos.push(telf)
    }

    public addMail(mail: Mail) {
        this._mails.push(mail)
    }

    public addAddress(address: Direccion) {
        this._direcciones.push(address)
    }
}