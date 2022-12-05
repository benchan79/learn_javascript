// Import the encryptors functions here.
const {caesarCipher, symbolCipher, reverseCipher}  = require("./encryptors.js");

const encodeMessage = (str) => {
  // Use the encryptor functions here.
  // encOne = caesarCipher(str, amount = 6);
  // encTwo = symbolCipher(encOne);
  // encThree = reverseCipher(encTwo);
  // return encThree;
  return reverseCipher(symbolCipher(caesarCipher(str, 6)));
};

const decodeMessage = (str) => {
  // Use the encryptor functions here.
  // decOne = reverseCipher(str);
  // decTwo = symbolCipher(decOne);
  // decThree = caesarCipher(decTwo, amount = -6);
  // return decThree;
  return caesarCipher(symbolCipher(reverseCipher(str)), -6);
};

// User input / output.

const handleInput = (userInput) => {
  const str = userInput.toString().trim();
  let output;
  if (process.argv[2] === "encode") {
    output = encodeMessage(str);
  }
  if (process.argv[2] === "decode") {
    output = decodeMessage(str);
  }

  process.stdout.write(output + "\n");
  process.exit();
};

// Run the program.
process.stdout.write("Enter the message you would like to encrypt...\n> ");
process.stdin.on("data", handleInput);
