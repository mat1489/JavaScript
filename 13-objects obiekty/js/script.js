"use strict";


var kaja = {                                           /* instancja klasy obiekt*/
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



/*tworzenie nowej instancji */

var krystian =new Osoba('krystian', 'dziopa');

krystian.wzrost=180;
krystian.oczy="niebieskie";

krystian.wyswietlInfo();