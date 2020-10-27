export class Vehiculo {
    private _matricula : string
    private _consumo : number 
    private _arrancado : boolean
    private _velocidad : number

    public constructor (matricula:string, consumo:number){
        this._matricula = matricula
        this._consumo = consumo
        this._arrancado = false 
        this._velocidad = 0
    }

    public get matricula(){
        return this._matricula
    }

    public get consumo(){
        return this._consumo
    }

    public get arrancado(){
        return this._arrancado
    }

    public botonArrancado(){
        if(this._arrancado==false){
            this._arrancado=true
        }else{
            this._arrancado=false
            this._velocidad=0
        }
    }

    public get velocidad(){
        return this._velocidad
    }

    public set velocidad(n:number){
        if(this._arrancado==false){
            throw 'ERROR, la velocidad se le aplica a los vehiculos ya arrancado'
        } else {
            this._velocidad=n
        }
    }

    public consumido(t:number){
        return (this._velocidad/t)*(this._consumo/100)
    }

    public imprimirvehiculo(){
        return `Vehiculo con matricula: ${this.matricula}
Velocidad: ${this._velocidad} km/h
Consumo: ${this._consumo} Litros cada 100 km`
    }

}