const prompt = require('prompt');
const handleRequest = require('./src/handleRequest');

const promptAttributes = [{ name: 'platziURL', required: true }];
prompt.get(promptAttributes, function(error, result) {
  if (error) {
    console.error(error);
  }
  console.log('Obteniendo información, espera un momento por favor.....');
  handleRequest(result.platziURL);
});

prompt.start();
