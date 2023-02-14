import {Camiseta} from './camiseta'

class Main {
    constructor() {
        console.log('Hola mundo!!')

        type alfanumerico = string | number

        var aux: alfanumerico = 'nico'

        let cualquiera: any = 0

        console.log(aux, cualquiera)

        // Funciones

        function getNumero(numero: number = 0): string{
            return 'El numero es: '+ numero
        }

        console.log(getNumero())
        
        var camiseta = new Camiseta()
        camiseta.setColor("Rojo")

        console.log(camiseta)

    }
}

var main = new Main()