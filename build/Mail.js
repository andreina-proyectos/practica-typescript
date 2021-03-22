export default class Mail {
    constructor(tipo, direccion) {
        this._tipo = tipo;
        this._direccion = direccion;
    }
    get tipo() {
        return this._tipo;
    }
    set tipo(value) {
        this._tipo = value;
    }
    get direccion() {
        return this._direccion;
    }
    set direccion(value) {
        this._direccion = value;
    }
}
