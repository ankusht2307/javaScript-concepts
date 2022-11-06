const stringReverseFunction = (string) => {
  if (!string || typeof string !== 'string')
    return 'Please provide a valid string';
  let tempString = '';
  let stringArray = string.split('');
  for (let i = stringArray.length - 1 ; i >= 0; i--) {
    tempString += stringArray[i];
  }
  return tempString;
};

console.log(stringReverseFunction());
