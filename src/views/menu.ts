import { leerTeclado } from '../views/lecturaTeclado'

export const menu = async () => {
    let n: number
    console.log('\n')
    console.log('1.- Crear vehiculo')
    console.log('2.- Ver vehiculo/s')
    console.log('3.- Borrar vehiculo')
    console.log('4.- Elegir vehiculo')
    console.log('0.- Salir')
    n = parseInt( await leerTeclado('--OPCIÓN--') )
    return n
}

export const menu2 = async () => {
    let n: number
    console.log('\n')
    console.log('1.- Ver vehiculo')
    console.log('2.- Arrancar/Apagar')
    console.log('3.- Cambiar Velocidad')
    console.log('4.- Calcular consumo')
    console.log('0.- SALIR')
    n = parseInt( await leerTeclado('--OPCIÓN--') )
    return n
}

