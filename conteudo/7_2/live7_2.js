const comicBook1 = {
  collection: "Tio Patinhas",
  
  title: "O Tesouro dos Dez Avatares",
  
  formattedTitle: function() {
    return `${this.collection} - ${this.title}`;
  }

}

// PROPRIEDADES OU CHAVES
// collection, title

// VALOR
// "Tio Patinhas", "O Tesouro dos Dez Avatares"

// ENTRADAS
// collection: "Tio Patinhas",
// title: "O Tesouro dos Dez Avatares"

console.log("comicBook1.collection = ", comicBook1["collection"]);
console.log("comicBook1.title = ", comicBook1["title"]);

comicBook1.author = "Don Rosa";
comicBook1["publishCompany"] = "Editora Abril";

let newPublishCompany = "Panini";
comicBook1.publishCompany = newPublishCompany;

let pageNumbersKey = "pageNumbers";
let pageNumber = 156;

comicBook1[pageNumbersKey] = pageNumber;

console.log(comicBook1.formattedTitle());

console.log(`As chaves do objeto são: ${Object.keys(comicBook1)}`);

console.log(`Possui a chave author: ${Object.keys(comicBook1).includes("author")}`);

console.log(`Possui a chave backgroundColor: ${Object.keys(comicBook1).includes("backgroundColor")}`);

console.log(`Os valores do meu objeto são: ${Object.values(comicBook1)}`);

console.log(`As entradas do meu objeto são: ${Object.entries(comicBook1)}`);

const comicBook2 = {
  collection: "A Turma da Monica",
  title: "Cebolinha em confusão novamente"
};

const authorObject = {
  author: "Mauricio de Souza"
};

console.log("comicBook2 antes:" + Object.entries(comicBook2));

Object.assign(comicBook2, authorObject);

console.log(`comicBook2 depois: ${Object.entries(comicBook2)}`);
