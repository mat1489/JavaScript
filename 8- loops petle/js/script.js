'use strict';
console.log('------------petla for');
/*  petla for   */

for(var i=0; i<10; i++){
    console.log(i);
}
/*  postinkrementacja vs preinkrementacja     */
console.log('------------postinkrementacja vs preinkrementacja');
for (var i=1; i<10;)
    {
        console.log(++i);
    }
console.log('------------');
for (var i=1; i<10;)
    {
        console.log(i++);
    }
console.log('------------petla while');

/*  petla while     */

var it=0;
while(it < 10){
    console.log(it);
    it++;
}
console.log('------------ petla do while zawsze sie wykona conajmniej raz');
/*  petla do while      zawsze sie wykona conajmniej raz */


var iter =20;
do{
    console.log(iter);
    iter++;
}while (iter < 10 )
    
 console.log('------------petla while przerywanie petli break');

    /*  petla while przerywanie petli    */

var a=0;
while(a < 10){
    console.log(++a);
    
    if(a==5){
       break;
    }
    
}
console.log('------------przeskakiwania do kolejnej iteracji continue');


for(var b=0; b<10; ++b){
    if (b==5){
        continue;
    }else{
        console.log(b);
    }
}