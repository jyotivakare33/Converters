function converter(number,fromBase,toBase) {
  if (fromBase == 10)
      return (parseInt(number)).toString(toBase)
  else if (toBase == 10)
      return parseInt(number, fromBase);
  else {
      var numberInDecimal = parseInt(number, fromBase);
      return (parseInt(numberInDecimal)).toString(toBase);
  }
}

const readLineSync = require('readline-sync');

const selectedUtilityOption = parseInt(readLineSync.question('Welcome to URL Encoder/Decoder. Which utility function would you like to use?\n1.binaryHexConverter \n2.binaryDecimalConverter\n3.binaryOctalConverter\n4.hexBinaryConverter\n5.hexOctalConverter\n6.hexDecimalConverter\n7.decimalBinaryConverter\n8.decimalHexConverter\n9.decimalOctalHexConverter\n10.octalHexConverter\n11.octalBinaryConverter\n12.octalDecimalConverter\n'));

console.log(`You selected ${selectedUtilityOption}`);
const num = readLineSync.question('Please enter the number to be converted\n');


switch(selectedUtilityOption) {
  case 1:
    const binaryHexConverter = converter(num,2,16);
    console.log(binaryHexConverter);
    break;
  case 2:
    const binaryDecimalConverter = converter(num,2,10);
    console.log(binaryDecimalConverter);
    break;
  case 3:
    const binaryOctalConverter = converter(num,2,8);
    console.log(binaryOctalConverter);
    break;
  case 4:
    const hexBinaryConverter = converter(num,16,2);
    console.log(hexBinaryConverter);
    break;
  case 5:
    const hexOctalConverter = converter(num,16,8);
    console.log(hexOctalConverter);
    break;
  case 6:
    const hexDecimalConverter = converter(num,16,10);
    console.log(hexDecimalConverter);
    break;
  case 7:
    const decimalBinaryConverter = converter(num,10,2);
    console.log(decimalBinaryConverter);
    break;
  case 8:
    const decimalHexConverter = converter(num,10,16);
    console.log(decimalHexConverter);
    break;
  case 9:
    const decimalOctalHexConverter = converter(num,10,8);
    console.log(decimalOctalHexConverter);
    break;  
  case 10:
    const octalHexConverter = converter(num,8,16);
    console.log(octalHexConverter);
    break; 
  case 11:
    const octalBinaryConverter = converter(num,8,2);
    console.log(octalBinaryConverter);
    break;  
  case 12:
    const octalDecimalConverter = converter(num,8,10);
    console.log(octalDecimalConverter);
    break;
  default:
    console.log('Invalid URL\n');
    break;
}