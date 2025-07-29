const requestName = require('./name.js')
const requestHobbies = require('./hobbies.js')

const restitutions = () => ({
  fullName: requestName("Omar", "Seddati"),
  hobbies: requestHobbies("Computer", "Moto", "Gaming")
});

console.log(restitutions());