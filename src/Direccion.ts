  export default class Direccion {
     private _calle: string;
     private _numero: number;
     private _piso: number | null;
     private _letra: string | null;
     private _codigoPostal: number;
     private _poblacion: string;
     private _provincia: string

    constructor(calle: string, numero: number, piso: number | null, 
      letra: string | null, codigoPostal: number, poblacion: string, provincia: string) {
        this._calle = calle;
        this._numero = numero;
        this._piso = piso;
        this._letra =letra;
        this._codigoPostal = codigoPostal;
        this._poblacion = poblacion;
        this._provincia = provincia
    }

    public get calle (): string {
      return this._calle
    }

    public set calle (value: string) {
      this._calle = value
    }

    public get numero (): number {
      return this._numero
    }

    public set numero (value: number) {
      this._numero = value
    }

    public get piso (): number | null {
      return this._piso
    }

    public set piso (value: number | null) {
      this._piso = value
    }

    public get letra (): string | null {
      return this._letra
    }

    public set letra (value: string | null) {
      this._letra = value
    }

    public get codigoPostal (): number {
      return this._codigoPostal
    }

    public set codigoPostal (value: number) {
      this._codigoPostal = value
    }

    public get poblacion (): string {
      return this._poblacion
    }

    public set poblacion (value: string) {
      this._poblacion = value
    }

    public get provincia (): string {
      return this._provincia
    }

    public set provincia (value: string) {
      this._provincia = value
    }
}