console.log('aqui estoy')



 var papayas = 7;
 var limones = 4;
 var sandias = 20;

 function resta_de_frutas (fruta_1,fruta_2,fruta_3){
     var resta_de_frutas = Math.abs(fruta_3 - fruta_1 ); //suma matematica
     console.log ('cantidad de frutas es: ' + (resta_de_frutas)); //concatenacion (suma de letras y numeros para escribir algo)
 }

 resta_de_frutas(sandias,limones,papayas)



//*trabajo en clase --> 
//*1. prguntar si me invitaron a la fiesta
//*2.si hay queque

var hay_queque =false;
invitaron_fiesta =false;

if (invitaron_fiesta == true) {
    if (hay_queque == true) {
        console.log('si hay queque')
    }else{
        (console.log('no hay queque'))
    }

}else{
    (console.log('no invitaron a la fiesta'))
}
//*Trabajo en clase--> hacer resta de frutas


//------------------------------------------------------------------------------
//3.5 Hay partido de la sele 
//hay entradas?
//es de pie?
// var hay_entradas = false;
// var es_de_pie = true;


// if (hay_entradas == true){

//     if (es_de_pie==false){
//         console.log('que salvada ver a navas sentado!!')
//     }else{
//         console.log('bueno por lo menos agarramos campo')
//     }
// }else{
//     console.log('que madre, toco verlo por el 7')
// }
/* ------------------------------------------------------------------------------------------
1. var  y let, el let solo existe dentro del context (es decir un if, una funcion)
var numero = 6;
if (numero>5) {
    let existe = 4;
}
console.log (existe);
*/
//-------------------------------------------------------------------------------------------
//2. operaciones basicas