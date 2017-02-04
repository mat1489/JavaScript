'use strict';


var wzrostMateusz =190;
var wzrostKaji= 190;

/*warunek if*/

if (wzrostKaji<wzrostMateusz){
    console.log("Kaja jest nizsza");
}

/*warunek if else*/
if (wzrostKaji > wzrostMateusz){
    console.log("Kaja jest wyższa");
}else {
    console.log("Kaja jest nizsza");
}


/*warunek if else if*/

if (wzrostKaji > wzrostMateusz){
    
    console.log("Kaja jest wyższa");
    
}else if(wzrostKaji==wzrostMateusz)
{
    console.log("Kaja tak wysoka jak mateusz");
}else
{
    console.log("Kaja jest nizsza");
}



/*

warunek switch

*/
var kolor= 'zolty';

switch(kolor){
    case 'czerwony':
        console.log('Kolor czerwony')
        break; 
    case 'zielony':
        console.log('Kolor zielony')
        break;
    case 'niebieski':
        console.log('Kolor niebieski')
        break;
    default:
        console.log('Inny kolor')
}