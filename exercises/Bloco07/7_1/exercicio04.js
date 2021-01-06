const longestWord = (string) => {
    let arrayString = string.split(' ');
    let longest = 0;
    let longestString;
    for (let i = 0; i < arrayString.length; i +=1) {
        if (arrayString[i].length > longest) {
            longest = arrayString[i].length;
            longestString = arrayString[i];
        }
    }
    console.log (longestString);
}

longestWord("Antônio foi no banheiro e não sabemos o que aconteceu") // retorna 'aconteceu'