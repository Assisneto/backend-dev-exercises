const fs = require('fs');
const readline = require('readline');

const readable = fs.createReadStream('./data.csv');

const rl = readline.createInterface({
  input: readable,

});

rl.on('line',(line)=>{
  console.log(`>>>>> ${line}`)
});