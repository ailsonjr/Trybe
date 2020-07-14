let salario = 2500;
let inss = 0;
let ir = 0;

if ( salario <= 1556.94 ) {
    inss = salario * 0.08;
} else if ( salario <= 2594.92 ) {
            inss = salario * 0.09 ;
        } else if ( salario <= 5189.82 ) {
            inss = salario * 0.11;
        } else {
            inss = 570.88;
        };

 if ( salario < 1903.98) {
     ir = 0;
    } else if ( salario <= 2826.65 ) {
            ir = ( salario * 0.075) - 142.80; 
        } else if ( salario <= 3751.05 ) {
                ir = ( salario * 0.15 ) - 354.80;
            } else if ( salario <= 4664.68 ) {
                ir = ( salario * 0.225 ) - 636.13;
            } else {
                ir = ( salario * 0.275 ) - 869.36;
            }

let salarioLiq = salario - inss - ir;
       
console.log (salarioLiq);