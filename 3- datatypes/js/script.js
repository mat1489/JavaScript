'use strict';

/*typ liczbowy*/
var wyplata = 5000;
var premia = 2500;
var calkowitaWyplata;

calkowitaWyplata = wyplata + premia;
console.log(calkowitaWyplata);

/*typ String*/

var wyplataStr = "5000";
var premiaStr = "2500";
var calkowitaWyplataStr;

calkowitaWyplataStr = wyplataStr + premiaStr;
console.log(calkowitaWyplataStr);

/*typ Boolean*/

var czyJestSmog;
czyJestSmog = false;

if (czyJestSmog) {
    console.log("Jest smog");
    
} else { 
        console.log("nie ma smoga");
    }
    

/*

typy specjane

*/

var niezdefiniowanaZmienna;
var nullowaZmienna = null;

console.log(niezdefiniowanaZmienna);
console.log(nullowaZmienna);



var imieStudenta = "michal";
console.log(imieStudenta.toUpperCase());