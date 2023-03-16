function flattenArray(arr, oneStep) {
    if (oneStep) {
      return arr.reduce((acc, val) => acc.concat(val), []);
    }
    else {
      let flattened = [];
      arr.forEach(item => {
        if (Array.isArray(item)) {
          flattened = flattened.concat(flattenArray(item, false));
        } else {
          flattened.push(item);
        }
      });
      return flattened;
    }
  }
  
  // Example usage
  const multiDimensionalArray = [1, 2, [3, 4, [5, 6]]];
  console.log(flattenArray(multiDimensionalArray, true)); // Output: [1, 2, 3, 4, [5, 6]]
  console.log(flattenArray(multiDimensionalArray, false)); // Output: [1, 2, 3, 4, 5, 6]
  
  const twoDimensionalArray = [[1, 2], [3, 4], [5, 6]];
  console.log(flattenArray(twoDimensionalArray, true)); // Output: [1, 2, 3, 4, 5, 6]
  console.log(flattenArray(twoDimensionalArray, false)); // Output: [1, 2, 3, 4, 5, 6]
  