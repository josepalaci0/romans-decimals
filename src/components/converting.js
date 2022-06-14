export const Converting = (payload) => {
    /**
     *  1.  mirar si el payload es operacional para poder programar el ejercicio
     *  2.  al hacer input = + payload , hacemos una verificacion del tipo de dato 
     *  3.  si el payload es un entero el input es un entero pero si no lo es el input es NaN
     */
    const input = + payload
    /**
     *  4.  si el input llegara a dar NaN , significa que si es un string pero sino es un entero
     */

    if (typeof input != 'number' || !Number.isInteger(input)) {

        /**
         *  5. si input es NaN , quiere decir que podemos convertir de romanos a enteros.
         *  6. cramos una funcion convertirCaracterAEntero que  nos de los numeros enteros.
         */
        if (isNaN(input)) {
            console.log('inicio')
            function convertirCaracterAEntero(caracter) {
                try {
                    switch (caracter) {
                        case 'I': return 1;
                        case 'V': return 5;
                        case 'X': return 10;
                        case 'L': return 50;
                        case 'C': return 100;
                        case 'D': return 500;
                        case 'M': return 1000;
                        default: return null;
                    }
                } catch (error) {
                    console.log(error)
                }
            }
            /**
             *  7.  cramos tres variables numero, anterior, actual, el numero guarda la pocision 0 de caracter
             */
            try {
                let numero = convertirCaracterAEntero(payload.charAt(0));
                let anterior;
                let actual;
                /**
             *  8.  cramos un ciclo for para realizar el proceso de conversion  a entero
             */

                for (let i = 1; i < payload.length; ++i) {
                    actual = convertirCaracterAEntero(payload.charAt(i));
                    anterior = convertirCaracterAEntero(payload.charAt(i - 1));

                    if (actual <= anterior) {
                        numero += actual;
                    } else {
                        numero = numero - anterior * 2 + actual;
                    }
                }

                return numero;
            } catch (error) {
                console.log(error)
            }
        }
    } if (typeof input === 'number' || Number.isInteger(input)) {
        /**
         *  9.   si  es entero lo tenemos que convertir a romanos
         *  10.  crear los caracteres en que se reconocen como numeros romanos
         */
        const ROMANOS = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM',
            '', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC',
            '', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];

        /**
         *  11.  convertimos a String y partimos desde '' 
         *  12.  creamos una variable que unicia vacia  
         */

        try {
            let digitos = String(input).split('');
            let romano = '';
            let i = 3;
            /**
             *  13.  cramos un ciclo while para realizar el proceso de conversion de enteros a romanos
             */

            while (i--) {
                romano = (ROMANOS[+digitos.pop() + (i * 10)] || '') + romano
            }
            return Array(+digitos.join('') + 1).join('M') + romano;

        } catch (error) {
            console.log(error)
        }
    }
}










