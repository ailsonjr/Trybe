let custPr = 50;
let vlVd =100;

if ((custPr>0) && (vlVd>0)) {
    let lucro = ((vlVd - custPr) * 0.8) * 1000;
    console.log ("O lucro vendendo 1000 unidades desse produto é R$" + " " + lucro)
} else {
    console.log ("Valor inserido está errado!")
}