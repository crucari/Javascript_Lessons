const numberClusters = [[1, 2], [3, 4], [5, 6]];

const target = numberClusters[2][1];

// You cannot simply assign const target = 6.
// Use bracket notation to first access the array that 6 is stored in, 
// then use bracket notation again to grab the element 6. Remember arrays are zero-indexed, 
// the first element has an index of 0