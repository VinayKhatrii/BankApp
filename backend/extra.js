const crypto = require('crypto');
const CC = require('currency-converter-lt')

function generatePassword(length = 12) {
  
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const specialChars = '!@#$%^&*()-_=+[]{}|;:,.<>?';
  
    let charSet = `${uppercaseChars}${lowercaseChars}`;
    charSet += numberChars;
    charSet += specialChars;
  
    let password = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = crypto.randomInt(charSet.length);
      password += charSet[randomIndex];
    }
    return password;
}

async function currencyConverter(from, to, amount){
  let currencyConverter = new CC({from:from, to:to, amount:amount})
  let newAmount = await currencyConverter.convert()
  return newAmount;
}

module.exports ={
    generatePassword,
    currencyConverter
}