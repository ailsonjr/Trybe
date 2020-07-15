let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menor = 9999;

for ( i = 0; i < numbers.length; i += 1) {
   if ( menor > numbers[i] )
        menor = numbers[i];
}   

    console.log ( "O menor valor contido na array é " + menor )