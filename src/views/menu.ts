import { leerTeclado } from '../views/lecturaTeclado'

export const menu = async () => {
    let n: number
    console.log('\n')
    console.log('1.- CREAR vehiculo')
    console.log('2.- VER vehiculos')
    console.log('3.- BORRAR vehiculo')
    console.log('4.- ELEGIR vehiculo')
    console.log('0.- SALIR')
    n = parseInt( await leerTeclado('--OPCIÓN--') )
    return n
}

export const menu2 = async () => {
    let n: number
    console.log('\n')
    console.log('1.- VER vehiculo')
    console.log('2.- ENCENDER/APAGAR vehiculo')
    console.log('3.- CAMBIAR VELOCIDAD vehiculo')
    console.log('4.- CALCULAR CONSUMO vehiculo')
    console.log('0.- SALIR')
    n = parseInt( await leerTeclado('--OPCIÓN--') )
    return n
}
