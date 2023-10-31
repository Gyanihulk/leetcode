function decimalToBinary(decimalNumber) {
    if (typeof decimalNumber !== 'number' || decimalNumber < 0) {
      return 'Invalid input';
    }
  
    if (decimalNumber === 0) {
      return '0';
    }
  
    let binaryResult = '';
    while (decimalNumber > 0) {
      binaryResult = (decimalNumber % 2) + binaryResult;
      decimalNumber = Math.floor(decimalNumber / 2);
    }
  
    return binaryResult;
  }
  
  // Example usage:
  const decimalNumber = 10;
  const binaryRepresentation = decimalToBinary(decimalNumber);
  console.log(binaryRepresentation); // Output: "1010"
  