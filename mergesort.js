function merge (array1, array2) {
  resultArray =[];

  leftIndex = 0;
  rightIndex = 0;

  while (leftIndex < array1.length && rightIndex < array2.length) {
    if (array1[leftIndex] < array2[rightIndex]) {
      if (typeof array1[leftIndex] !== "number") {
        throw new TypeError("no.");
      }
      resultArray.push(array1[leftIndex]);
      leftIndex += 1;
    }
    else {
      if (typeof array2[rightIndex] !== "number") {
        throw new TypeError("no.");
      }
      resultArray.push(array2[rightIndex]);
      rightIndex++;
    }
  }
  return resultArray.concat(array1.slice(leftIndex)).concat(array2.slice(rightIndex));
}



