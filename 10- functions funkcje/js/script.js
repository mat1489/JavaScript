'use strict';
//var liczba1 = 8;
//var liczba2 = 10;
//var wynik;
//
//function dodajLiczby(skladowa1, skladowa2){    //funkcja nazwa funkcji (parametr1, parametr 2)
//    var wynikDodawania;                        
//    wynikDodawania= skladowa1+ skladowa2;       
//    return wynikDodawania;                     // funkcja zwraca wynikdodawania
//}
//
//wynik=dodajLiczby(liczba1,liczba2);            // przypisanie do zmiennej wynik, zwrocony wynik dodawania z                                                         funkcji dodaj liczby    
//
//wynik2=dodajLiczby(100,liczba2);
//wynik3=dodajLiczby(23, 18);
//wynik4=dodajLiczby(100,86);
//
//console.log(wynik);
//console.log(wynik2);
//console.log(wynik3);
//console.log(wynik4);



function mnozenieLiczb(liczba1, liczba2, liczba3){              //definicja pierwszej funkcji
    var wynik=liczba1*liczba2*liczba3;
    
    return wynik;
}


function mniejszaWieksza (parametr){                           //definicja drugiej funkcji
    if(parametr>0){
        console.log("jest wieksza od zera");
    }else{
        document.write("jest mniejsza od zera<br/>");
    }
}
    

var wynikPierwszejFunkcji=mnozenieLiczb(2,2,2);                 //wywolanie funkcji pierwszej i przypisanie                                                                                         jej do zmiennej "wynikPierwszejFunkcji"
console.log("wynik: "+ wynikPierwszejFunkcji);



var wynikDrugiejFunkcji=mniejszaWieksza(wynikPierwszejFunkcji);                    //wywolanie funkcji drugiej i przypisanie do                                                                                         zmiennej "wynikDrugiejFunkcji"
 wynikDrugiejFunkcji=mniejszaWieksza(-2);       
 wynikDrugiejFunkcji=mniejszaWieksza(5);       
 wynikDrugiejFunkcji=mniejszaWieksza(-3);       
 wynikDrugiejFunkcji=mniejszaWieksza(7);       

    
//    stworz dwie funkcje. pierwsza mnozy 3 liczby i zwraca wynik tego mnozenia.
//    
//    funkcja2 pobiera jeden parametr. funkcja 2 nie zwraca nic. 