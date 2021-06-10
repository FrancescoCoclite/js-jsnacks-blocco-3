// *****ESERCIZIO N1*****

// Si scriva una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).  La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri

var arrayPieno = ['a','b','c','d','e','f','g'];
var lunghezza = arrayPieno.length;

var numero1 = parseInt(prompt('inserisci un numero massimo ' + lunghezza));
var numero2 = parseInt(prompt('inserisci di nuovo un numero maggiore di ' + numero1 +' e massimo ' + lunghezza));



var risultato = range(numero1,numero2,arrayPieno)
console.log(risultato);

function range(num1,num2,array) {
    var arrayV = []
    if (num1 > num2){
        var num3 = num1
        num1 = num2
        num2 = num3
    }

    for(var i = num1; i< num2; i++){

        arrayV.push(array[i]);
         
    
    }
    return arrayV;

}

// *****ESERCIZIO N2*****

// Dare la possibilità di inserire due parole. Verificare tramite una funzione che le due parole abbiano la stessa lunghezza. Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due.


// var nome1 = prompt('inserisci una parola');
// var nome2 = prompt('inserisci altra parola');

// var risultato = compara(nome1,nome2)
// console.log(risultato);

// function compara(x,y) {

//     if(x.length == y.length){
//        return (x, y + ' le parole hanno la stessa lunghezza');
//     }else if (x.length > y.length){
//         return (x + ' parola 1 è più lunga');
//     }else
//         return (y + ' parola 2 è più lunga');
// }

// *****ESERCIZIO N3*****

// Scrivi una funzione che fonda due array (con lo stesso numero di elementi) prendendo alternativamente gli elementi da uno e dall’altro
// es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].

// var arrayLet = ['a','b','c',];    

// var arrayNum = [1,2,3];        

// var arraySomma = [];            


// var risultato = sommaArray (arrayLet,arrayNum,arraySomma)
// console.log(arraySomma);


// function sommaArray (x,y,k){

//     if(x.length != y.length){
//         alert('Errore i due Array non hanno la stessa lunghezza');
    // return false;
//     }
//     for (var i = 0; i< x.length; i++){

//         k.push( x[i] ,y[i]);
            
        
//     }
//     return k
// }

// *****ESERCIZIO N4*****

// Scrivi una funzione capitalize che prenda una stringa e la trasformi con l'iniziale maiuscola e tutto il resto in minuscolo


// var parola = prompt('Inserisci una parola').toLowerCase();

// var risultato = maiuscolo(parola);
// console.log(risultato);


// function maiuscolo(x)
// {   
//     return x[0].toUpperCase() + x.slice(1);
// }