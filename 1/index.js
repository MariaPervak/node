let crypto;
let readline;
try {
  crypto = require('node:crypto');
} catch (err){
  console.log('Crypto module is unavailable');
}

try {
  readline = require('readline-sync');
} catch (err){
  console.log('You should install readline-sync');
}

try {
  let rawParams = readline.question("Enter encoding algorithm and text separated by comma: ");
  const params = rawParams.split(',');
  const validParams = params.length === 2;
  const availableCiphers = crypto.getHashes();
  const isAlgorithmValid = availableCiphers.includes(params[0]);
  const secret = 'UwU';
  if (!validParams){
    throw new Error('The number of parameters is incorrect. Try again');
  }
  if (!isAlgorithmValid) {
    throw new Error('Invalid algorithm. Try again');
  }

  const hash = crypto.createHmac(params[0], secret)
    .update(params[1])
    .digest('hex');
  console.log(hash);
} catch (err) {
  console.log(err.message);
}

