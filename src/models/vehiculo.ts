export class vehiculo {
    
    private _matricula : string
    private _consumo : number 
    private _arrancado : boolean
    private _velocidad : number

    constructor (matricula:string, consumo:number){
        this._matricula = matricula
        this._consumo = consumo
        this._arrancado = false 
        this._velocidad = 0
    }

    matricula(){
        return this._matricula
    }

    consumo(){
        return this._consumo
    }

    arrancado(){
        return this._arrancado
    }

    botonArrancado(){
        if(this._arrancado==false){
            this._arrancado=true
        }else{
            if (this._velocidad!=0){
                throw 'No puede apagar el vehiculo si está en movimiento'
            } else {
                this._arrancado=false
            }
        }
    }

    get velocidad(){
        return this._velocidad
    }

    set velocidad(n:number){
        if(this._arrancado==false){
            throw 'Para cambiar de velocidad debe de estar arrancado el vehiculo'
        } else {
            this._velocidad=n
        }
    }

    consumido(t:number){ 
        
            return (this._velocidad/t)*(this._consumo/100)
        
    }

    imprimirvehiculo(){
        return `El vehiculo ${this.matricula} tiene una velocidad de ${this._velocidad} km/h y consume ${this._consumo} L cada 100 km`
    }

}