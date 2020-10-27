import { Vehiculo } from './models/vehiculo'
import { menu, menu2 } from './views/menu'
import { leerTeclado } from './views/lecturaTeclado'

const main = async() => {
    let vehiculos: Array<Vehiculo> = new Array()
    let n: number 
    do {
        n = await menu()
        switch(n){
            case 1:
                console.log('Usted está creando un nuevo vehiculo')
                let matricula:string , consumo:number
                matricula=await leerTeclado('Introduzca la matrícula del vehiculo (XXXXNNN)')
                consumo = parseInt( await leerTeclado('Introduzca el consumo del vehículo(Litros cada 100KM)'))
                let vehiculo=new Vehiculo(matricula, consumo)
                let existe = false
                vehiculos.forEach(Vehiculo => {
                    if (vehiculo.matricula==Vehiculo.matricula){
                        existe=true
                    }
                });
                if (existe){
                    console.log('Este vehiculo ya existe')
                } else{
                    vehiculos.push(vehiculo)
                }
                break
            case 2:
                if (vehiculos.length==0){
                    console.log('No existen vehiculos creados')
                } else {
                    console.log('Usted está imprimiendo los vehiculos')
                    vehiculos.forEach(vehiculo => {
                        console.log(`${vehiculo.imprimirvehiculo()}`)
                        console.log(`- - - - - - - - - - - - - - - - - - -`)
                    });
                }
                break
            case 3:
                console.log('Usted va a borrar un vehiculo')
                if (vehiculos.length==0){
                    console.log('No existen vehiculos creados')
                } else {
                    console.log('Estos son los vehiculos que existen')
                    vehiculos.forEach(vehiculo => {
                        console.log(`${vehiculo.imprimirvehiculo()}`)
                    });
                    let m2:String
                    m2=await leerTeclado('Introduzca la matrícula del vehiculo que quiera borrar')
                    let e:boolean=false
                    let index=0
                    vehiculos.forEach(vehiculo => {
                        if (m2==vehiculo.matricula){
                            index=vehiculos.indexOf(vehiculo)
                            e=true
                        }
                    })
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
                    vehiculos.forEach(vehiculo => {
                        console.log(`${vehiculo.imprimirvehiculo()}`)
                    });
                    m1=await leerTeclado('Introduzca la matrícula del vehiculo')
                    let index:number=-1
                    vehiculos.forEach(vehiculo => {
                        if(vehiculo.matricula==m1){
                           index=vehiculos.indexOf(vehiculo)
                        }else{
                            console.log('Este vehiculo no existe')
                        }
                    });
                    if(index!=-1){
                        let n2:number
                        do {
                            n2 = await menu2()
                            switch(n2){
                                case 1:
                                    console.log('Viendo el vehiculo elegido')
                                    console.log(vehiculos[index].imprimirvehiculo())
                                    break
                                case 2:
                                    if(vehiculos[index].arrancado){
                                        console.log('Apagando vehiculo')
                                        vehiculos[index].botonArrancado()
                                    }else{
                                        console.log('Encendiendo vehiculo')
                                        vehiculos[index].botonArrancado()
                                    }
                                    break
                                case 3:
                                    let v:number
                                    v=parseInt(await leerTeclado("Introduzca la nueva velocidad del vehículo"))
                                    try {
                                      vehiculos[index].velocidad=v 
                                    } catch (error) {
                                        console.log(error)
                                    }
                                    break
                                case 4:
                                    let t:number
                                    t=parseInt(await leerTeclado("Introduzca el tiempo en horas que lleva el vehículo a la velocidad actual"))
                                    console.log(`${vehiculos[index].consumido(t)}`)
                                    break
                                case 0:
                                    console.log('\n--VOLVIENDO A LA LISTA DE vehiculos--')
                                    break
                                default:
                                    console.log("Opción incorrecta")
                                    break
                            }
                        } while (n2!=0);
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