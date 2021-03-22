export default class Direccion {
    constructor(calle, numero, piso, letra, codigoPostal, poblacion, provincia) {
        this._calle = calle;
        this._numero = numero;
        this._piso = piso;
        this._letra = letra;
        this._codigoPostal = codigoPostal;
        this._poblacion = poblacion;
        this._provincia = provincia;
    }
    get calle() {
        return this._calle;
    }
    set calle(value) {
        this._calle = value;
    }
    get numero() {
        return this._numero;
    }
    set numero(value) {
        this._numero = value;
    }
    get piso() {
        return this._piso;
    }
    set piso(value) {
        this._piso = value;
    }
    get letra() {
        return this._letra;
    }
    set letra(value) {
        this._letra = value;
    }
    get codigoPostal() {
        return this._codigoPostal;
    }
    set codigoPostal(value) {
        this._codigoPostal = value;
    }
    get poblacion() {
        return this._poblacion;
    }
    set poblacion(value) {
        this._poblacion = value;
    }
    get provincia() {
        return this._provincia;
    }
    set provincia(value) {
        this._provincia = value;
    }
}
