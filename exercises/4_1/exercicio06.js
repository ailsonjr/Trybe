let peca = "CAvalo";

    switch ( peca.toLowerCase() ) {
    case "peão":
        console.log ( "Peça se move uma casa sempre pra frente e come em diagonal" )
        break;
    case "cavalo":
        console.log ( "Peça se move em 'L', 2 casa numa direção e mais 1 para direita ou esquerda" )
        break;
    case "bispo":
        console.log ("Peça se move na diagonal quantas casas desejar")
        break;
    case "torre":
        console.log ("Peça se move na transversal quantas casas quiser")
        break;
    case "rainha":
        console.log ("Peça se move para qualquer lado quantas casas quiser")
        break;
    case "rei":
        console.log ("Peça se move para qualquer lado apemas uma casa")
        break;
    default:
        console.log ("Peça inválida")
        break;
}