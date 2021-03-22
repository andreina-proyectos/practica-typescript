export default class Telefono {
    constructor(tipo, numero) {
        this._tipo = tipo;
        this._numero = numero;
    }
    get tipo() {
        return this._tipo;
    }
    set tipo(value) {
        this._tipo = value;
    }
    get numero() {
        return this._numero;
    }
    set numero(value) {
        this._numero = value;
    }
}
