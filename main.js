require('dotenv').config();
const fs = require('fs');
const { create } = require('./message');

const name = process.env.NAME;
const number = process.env.NUMBER;

const resultMessage = create(name, number);

fs.writeFileSync('result.txt', resultMessage);
console.log('Result has been written to result.txt');
