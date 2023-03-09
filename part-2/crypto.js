function encodeMessage(message) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let encoded = '';
    for (let i = 0; i < message.length; i++) {
      const letter = message.charAt(i).toUpperCase();
      const index = alphabet.indexOf(letter);
      if (index >= 0) {
        encoded += (index + 1).toString().padStart(2, '0');
      } else {
        encoded += '27';
      }
    }
    const blocks = encoded.match(/.{1,3}/g);
    const encrypted = blocks.map(block => {
      const random = Math.floor(Math.random() * 10) + 1;
      return block + random.toString();
    }).join(' ');
    return encrypted;
  }
  
  function decodeMessage(encrypted) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const blocks = encrypted.split(' ');
    const encoded = blocks.map(block => block.slice(0, 2)).join('');
    let decoded = '';
    for (let i = 0; i < encoded.length; i += 2) {
      const number = parseInt(encoded.substr(i, 2));
      if (number === 27) {
        decoded += '!';
      } else {
        decoded += alphabet.charAt(number - 1);
      }
    }
    return decoded;
  }
  
  const message = 'I love cryptography!';
  const encrypted = encodeMessage(message);
  console.log(encrypted);
  const decrypted = decodeMessage(encrypted);
  console.log(decrypted);
  