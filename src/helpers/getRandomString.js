// getRandomString.js
import Chance from 'chance';

// Create an instance of Chance
const chance = new Chance();

// Return a random sentence
const getRandomString = () => chance.sentence();

export default getRandomString;
