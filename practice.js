console.log('connected');

let string = "cool";

function reverseString(string) {
   let arrayFromString = Array.from(string);
   arrayFromString = arrayFromString.reverse().join('');
   return arrayFromString;
}