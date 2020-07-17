let n = 5;
let linha = "";
let pos = n;

for ( let i = 0; i <= n; i += 1){
     for (  let j = 0; j < n; j +=1){ 
        if ( j < pos ){
            linha = linha + " ";
        } else {
            linha = linha + "*";
        }
     }
     console.log (linha);
     linha = "";
     pos = pos -1;
} 