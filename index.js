const prompt = require("prompt");
const handleRequest = require("./src/handleRequest");

const promptAttributes = [
  {
    name: "platziURL",
    required: true,
    description: "URL del curso",
    type: "string",
    pattern: /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/,
    message: "La URL es incorrecta.",
  },
];
prompt.get(promptAttributes, (error, result) => {
  if (error) {
    console.error(error);
  }
  console.log("Obteniendo información, espera un momento por favor.....");
  handleRequest(result.platziURL);
});

prompt.start();
