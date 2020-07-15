let numbers = [4, 7, 3, 18, 70, 8, 100, 2, 34, 28];
let impar = 0;

for ( i = 0; i < numbers.length; i += 1) {
   if ( numbers[i] %2 !=0 )
        impar += 1;
}   
if ( impar >0 ) {
    console.log ("Há " + impar + " números ímpares na array!");
}   else {
        console.log ( "Nenhum valor impar encontrado." )
}