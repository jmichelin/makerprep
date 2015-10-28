var animals = [
        {name:  'duncan',       species: 'dog'},
        {name:  'xiao bao',     species: 'dog'},
        {name: 'Bijoux',        species: 'cat'},
        {name: 'Norman',        species: 'cat'},
        {name: 'Norman',        species: 'fish'}
];
var testAnimal = function(currentAnimal, requestedSpecies){
    console.log(currentAnimal + " " +requestedSpecies);
    return currentAnimal.species === requestedSpecies
}
//var fish = animals.filter(testAnimal(animal, fish));

function isDog(animal) {
    return animal.species === species
}
var species = prompt('what animals do you want to see? (cat, dog, or fish)');
var dogs = animals.filter(isDog);
console.log(JSON.stringify(dogs, null, 2));
