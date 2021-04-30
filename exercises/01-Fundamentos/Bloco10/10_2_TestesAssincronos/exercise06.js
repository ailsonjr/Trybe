const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByName = (name) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const animal = Animals.find((animal) => animal.name === name);
      if (animal !== undefined) {
        return resolve(animal);
      }

      return reject('Nenhum animal com esse nome!');
    }, 100);
  })
);

const getAnimal = (name) => (
  findAnimalByName(name).then(animal => animal)
);


module.exports = getAnimal;

