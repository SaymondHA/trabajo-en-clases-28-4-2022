//1. Hacer un if con una variable let 

//2. Hacer una funcion que me diga 'Hola Profe, vea que chiva funcion'

//3. Hacer una funcion que me sume 3 numeros (tienen que usar argumentos)

//4. Hacer una funcion que reciba una variable llamada var me_invitaron, y esa funcion responde 'eehhh me invitaron' o 'que mal no me invitaron'

//5. Hacer una funcion que multiplique 3 numeros (tienen que usar argumentos)

1.
var cuantas_naranjas_hay,
    hay_4_naranjas;

function fruteria() {
    let hay_4_naranjas = cuantas_naranjas_hay
}


2.
var holaprofe;

function hola_profe() {
    console.log('Hola Profe, vea que chiva funcion');
}

3.
var sumar_numeros;

function sumar_numeros (numero1,numero2,numero3){
    console.log(numero1-numero2-numero3);
}

4.

var me_invitaron,
invitaron_a_la_fiesta;

function podemos_ir_a_La_fiesta (si_invitan_si) {
    if (invitaron_a_la_fiesta){
        console.log( 'eehhh me invitaron');
    }
    else {
        console.log('que mal no me invitaron')
    }
}
5.

var multiplicacion_de_3_numeros

function multiplicacion_de_3_numeros(tomates,elotes,papas) {
    console.log(papas*elotes*tomates )
}
    



multiplicacion_de_3_numeros(2,3,12);
podemos_ir_a_La_fiesta();
sumar_numeros(15,7,4);
hola_profe();
fruteria();
