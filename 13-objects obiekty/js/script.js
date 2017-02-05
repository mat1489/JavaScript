"use strict";

 /* instancja klasy obiekt*/
/*
var kaja = {                                          
    imie: "Kaja",
    wzrost: 152,
    przedstawOsobe: function(){console.log(this.imie)}
    
}

var krystian = {
    imie: "Krystian",
    wzrost: 180,
    przedstawOsobe: function(){console.log(this.imie)}
    
}


kaja.przedstawOsobe();
krystian.przedstawOsobe();

console.log(kaja.wzrost);



function Osoba(imie, nazwisko){     //nazwa funkcji zawsze z duzej litery
    this.imie=imie;
    this.nazwisko=nazwisko;
    this.wzrost;
    this.oczy;
    this.wyswietlInfo=function(){
        console.log("Imie: "+ this.imie + "\n"
                   +"Nazwisko: "+this.nazwisko +"\n"
                    +"Wzrost: "+this.wzrost +"\n"
                    +"Oczy: "+this.oczy);
    }
}
*/



/*tworzenie nowej instancji */

/*
var krystian =new Osoba('krystian', 'dziopa');

krystian.wzrost=180;
krystian.oczy="niebieskie";

krystian.wyswietlInfo();

*/





//klasa samochod marka pojemnosc i moc. metode przedstawiajaca ten samochod


function Samochod(marka){     //nazwa funkcji zawsze z duzej litery
    this.marka=marka;
   
    this.pojemnosc;
    this.moc;
    this.wyswietlInfo=function(){
        console.log("Marka: "+ this.marka + "\n"
                   +"Pojemność: "+this.pojemnosc +"\n"
                    +"Moc: "+this.moc
                    );
    }
}




var peugeot =new Samochod('Peugeot');

peugeot.pojemnosc=1600;
peugeot.moc="110KM";

peugeot.wyswietlInfo();


var audi =new Samochod('Audi');

audi.pojemnosc=1900;
audi.moc="150KM";

audi.wyswietlInfo();

var bmw =new Samochod('Bmw');

bmw.pojemnosc=2500;
bmw.moc="200KM";

bmw.wyswietlInfo();


var opel =new Samochod('Opel');

opel.pojemnosc=1600;
opel.moc="80KM";

opel.wyswietlInfo();

