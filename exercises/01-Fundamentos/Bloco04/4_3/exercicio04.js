let n = 9;
let linha = "";
let pos = n;
let l = n;

if ( (n % 2) != 0) {
    for ( let i = 0; i <= n; i += 1){
        if ( i % 2 != 0){
            for ( let j = 0; j < l; j +=1){ 
                 if ( j < (l / 2)){
               linha = linha + " ";
                } else {
                    linha = linha + "*";
                }
            }
        console.log (linha);
        linha = "";
        pos = pos -1;
        l = pos;
        }
    } 
} else {
    console.log ("Número precisa ser ímpar")
}