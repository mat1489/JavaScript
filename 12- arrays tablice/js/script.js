'use strict';

var imiona =['monika','krystian','lukasz'];

imiona[3]= 'tania';
imiona[4]= 'ela';


imiona.push('gerald');
imiona.pop();
imiona.pop();

console.log(imiona.unshift('robert'));
console.log(imiona);
console.log(imiona.shift());


console.log(imiona);
console.log('-------------- wypisanie z tablicy petla od 1 elemntu do n-tego');

for (var i=0; i<imiona.length; i++){
    console.log(imiona[i]);
}

console.log('-------------- wypisanie z tablicy petla od n-tego do pierwszego elementu tablicy');

for (var i=imiona.length-1; i>=0; i--){
    console.log(imiona[i]);
}

console.log('-------------- metoda wywolywana na obiekcie klasy array (petla forEach)');

imiona.forEach(function(element, i){
    console.log('Element nr.'+ i + ' = ' + element);
});

console.log('-------------- metoda, funkcja laczy zawartosc tablicy i oddziela je wybranym separatorem');
console.log(imiona.join(" - "));

console.log('-------------- sortowanie');

imiona.sort();
console.log(imiona);

imiona.reverse();
console.log(imiona);
console.log('-------------- konkatenacja');

var imionaMeskie=['robert','mariusz','andrzej'];

var zbiorImion= imiona.concat(imionaMeskie);

console.log(zbiorImion);

console.log('-------------- zwrocenie numeru indeksu gdzie jest imie mariusz');

console.log(zbiorImion.indexOf('mariusz'));


console.log('-------------- sprawdza czy obiekt jest tablica');
console.log(Array.isArray(zbiorImion));


console.log(zbiorImion.slice(2,5));

zbiorImion.splice(2,2,"julek","krzys");

console.log(zbiorImion);

console.log(zbiorImion.toString());

