const requestName = require('./js/name.js')
const requestHobbies = require('./js/hobbies.js')

const restitutions = () => {
  const fullName = requestName("Omar", "Seddati")
  const hobbies = requestHobbies("Computer", "Moto")
  return {
    fullName,
    hobbies
  };
};