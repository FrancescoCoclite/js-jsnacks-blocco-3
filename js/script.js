// *****ESERCIZIO N1*****

// Si scriva una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).  La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri

var arrayPieno = ['a','b','c','d','e','f','g'];
var lunghezza = arrayPieno.length;

var numero1 = parseInt(prompt('inserisci un numero massimo ' + lunghezza));
var numero2 = parseInt(prompt('inserisci di nuovo un numero maggiore di ' + numero1 +' e massimo ' + lunghezza));

var arrayVuoto = [];


for(var i = 0; i< lunghezza; i++){
    if(numero1 < numero2){
        arrayVuoto.push(lunghezza[i])    
    }

}
console.log(arrayVuoto);

