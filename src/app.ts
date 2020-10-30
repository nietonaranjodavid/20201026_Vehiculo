import { vehiculo } from './models/vehiculo'
import { menu, menu2 } from './views/menu'
import { leerTeclado, leeMatricula, leeNumero } from './views/lecturaTeclado'

const main = async() => {
    let vehiculos: Array<vehiculo> = new Array()
    let n: number 
    do {
        n = await menu()
        switch(n){
            case 1:
                console.log('Usted está creando un nuevo vehiculo')
                let matricula:string , consumo:number
                try {
                    matricula = await leeMatricula('Introduzca la matrícula del vehiculo (NNNNXXX)')
                    consumo = parseInt(await leeNumero('Introduzca el consumo del vehículo(Litros cada 100KM)'))
                    let Vehiculo=new vehiculo(matricula, consumo)
                    let existe = false
                    for (let c of vehiculos){
                        if (Vehiculo.matricula==c.matricula){
                            existe=true
                        }
                    }
                    if (existe){
                        console.log('Este vehiculo ya existe')
                    } else{
                        vehiculos.push(Vehiculo)
                    }
                } catch (error) {
                    console.log(error)
                }
                break
            case 2:
                if (vehiculos.length==0){
                    console.log('No existen vehiculos creados')
                } else {
                    console.log('Usted está imprimiendo los vehiculos')
                    for (let c of vehiculos){
                        console.log(`${c.imprimirvehiculo()}`)
                    }
                }
                break
            case 3:
                console.log('Usted va a borrar un vehiculo')
                if (vehiculos.length==0){
                    console.log('No existen vehiculos creados')
                } else {
                    console.log('Estos son los vehiculos que existen')
                    for (let c of vehiculos){
                        console.log(`${c.imprimirvehiculo()}`)
                    }
                    let m2:String
                    m2=await leerTeclado('Introduzca la matrícula del vehiculo que quiera borrar')
                    let e:boolean=false
                    let index=0
                    for (let c of vehiculos){
                        if (m2==c.matricula){
                            index=vehiculos.indexOf(c)
                            e=true
                        }
                    }
                    if (e){
                       vehiculos.splice(index,1)
                    } else {
                        console.log('No existe ese vehiculo')
                    }
                }
                break
            case 4:
                if (vehiculos.length==0){
                    console.log('No existen vehiculos creados')
                } else {
                    let m1:string
                    console.log('Elija usted la matrícula de un vehiculo')
                    for (let c of vehiculos){
                        console.log(`${c.imprimirvehiculo()}`)
                    }
                    m1=await leerTeclado('Introduzca la matrícula del vehiculo')
                    let index:number=-1
                    for(let c of vehiculos){
                        if(c.matricula==m1){
                            index=vehiculos.indexOf(c)
                         }
                    }
                    if(index!=-1){
                        let n2:number
                        let mivehiculo=vehiculos[index]
                        do {
                            n2 = await menu2()
                            switch(n2){
                                case 1:
                                    console.log('Viendo el vehiculo elegido')
                                    console.log(mivehiculo.imprimirvehiculo())
                                    break
                                case 2:
                                    if(mivehiculo.arrancado){
                                        try {
                                            mivehiculo.botonArrancado()
                                            console.log('Apagando vehiculo')
                                        } catch (error) {
                                            console.log(error)
                                        }
                                    }else{
                                        console.log('Encendiendo vehiculo')
                                        mivehiculo.botonArrancado()
                                    }
                                    break
                                case 3:
                                    let v:number
                                    try {    
                                        v=parseInt(await leeNumero("Introduzca la nueva velocidad del vehículo"))
                                        mivehiculo.velocidad=v 
                                    } catch (error) {
                                        console.log(error)
                                    }
                                    break
                                case 4:
                                    let t:number
                                    try {
                                        t=parseInt(await leeNumero("Introduzca el tiempo en horas que lleva el vehículo a la velocidad actual"))
                                        console.log(`El vehiculo ha consumido ${mivehiculo.consumido(t)} litros`)
                                    } catch (error) {
                                        console.log(error)
                                    }
                                    break
                                case 0:
                                    console.log('\n--VOLVIENDO A LA LISTA DE vehiculoS--')
                                    break
                                default:
                                    console.log("Opción incorrecta")
                                    break
                            }
                        } while (n2!=0);
                    } else{
                        console.log('Este vehiculo no existe')
                    }
                }
                break
            case 0:
                console.log('\n--ADIÓS--')
                break
            default:
                console.log("Opción incorrecta")
                break
        }
    } while (n!=0);
}

main()
