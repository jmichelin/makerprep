var character = {
  name : "",
  level : "",
  hitpoints : 60
}

for (var property in character) {
  console.log(character[property]);
  if (character.hasOwnProperty(property)) {
    // body...
   //document.querySelector('#resultsWindow').textContent = character[property];
  }
}

var politicions = {
  secretaryOfState : 'hillary clinton',
  potus: 'barack obama',
  flotus: 'michelle obama',
  vicePrez: 'joed biden',
  govOfCalifornia: 'jerry brown'
}

var reverse_politician_lookup = {};
for (var property in politicions) {
  if (politicions.hasOwnProperty(property)) {

    reverse_politician_lookup[politicions[property]] = property;
    document.querySelector('#resultsWindow').innerHTML += property + ":" + politicions[property] + "<br>";
  }
}
console.log(reverse_politician_lookup);
