//utility function
export function randomItemFromArray(arr, not) {
    const item = arr[Math.floor(Math.random() * arr.length)];
    if(item === not) {
      //recursion
      return randomItemFromArray(arr, not);
    }
    return item;
  }