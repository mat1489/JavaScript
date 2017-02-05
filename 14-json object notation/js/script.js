"use strict";



var jsonSamochody = {
    "samochody": [
        {   marka: "Peugeot", pojemnosc: "1600", moc: "110KM"},
        {   marka: "Audi", pojemnosc: "1900", moc: "150KM"},
        {   marka: "Bmw", pojemnosc: "2500", moc: "200KM"},
        {   marka: "Opel", pojemnosc: "1600", moc: "80KM"}
        
    ]
}

jsonSamochody.samochody.forEach(function(samochody, i){
    console.log("Samochód nr: "+ i +"\n"+ 
                "Marka: "+samochody.marka+"\n" +
                "Pojemność: "+samochody.pojemnosc+"\n" +
                "Moc: "+samochody.moc);
    
});



//console.log(jsonSamochody);

