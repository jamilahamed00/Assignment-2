
1.     /**
 * Calculate the difference between two arguments.
 *
 * @param {number} a  
 * @param {number} b  
 * @return {number} 
 */
function calculateDifferent(a, b) {
    return a - b;
}
// Example usage:
const result1 = calculateDifferent(10, 5);
console.log(`The difference is: ${result1}`);  

const result2 = calculateDifferent(15.5, 7.3);
console.log(`The difference is: ${result2}`);  





2.      /**       
* Check if a number is odd.
*
* @param {number} num  
* @return {boolean}  
*/
function isOdd(num) {
   return num % 2 !== 0;
}
// Example usage:
console.log(isOdd(3));  
console.log(isOdd(4));   
console.log(isOdd(-5));  
console.log(isOdd(0));   





3.      /**
* Find the smallest number in an array.
*
* @param {number[]} arr  
* @return {number} 
*/
function findMin(arr) {
   if (arr.length === 0) {
       throw new Error("Array cannot be empty");
   }
   return Math.min(...arr);
}

// Example usage:
console.log(findMin([3, 1, 4, 1, 5, 9])); // Output: 1
console.log(findMin([-7, 0, 2, -3]));     // Output: -7
console.log(findMin([42]));               // Output: 42





4.        /**
* Filter even numbers from an array.
*
* @param {number[]} arr  
* @return {number[]}  
*/
function filterEvenNumbers(arr) {
   return arr.filter(num => num % 2 === 0);
}
// Example usage:
console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6])); // Output: [2, 4, 6]
console.log(filterEvenNumbers([7, 9, 11]));         // Output: []
console.log(filterEvenNumbers([0, -2, 8, 15]));     // Output: [0, -2, 8]





5.       /**
* Sort an array in descending order.
*
* @param {number[]} arr 
* @return {number[]}  
*/
function sortArrayDescending(arr) {
   return [...arr].sort((a, b) => b - a);
}
// Example usage:
console.log(sortArrayDescending([3, 1, 4, 1, 5, 9])); // Output: [9, 5, 4, 3, 1, 1]
console.log(sortArrayDescending([0, -2, 8, 15]));     // Output: [15, 8, 0, -2]
console.log(sortArrayDescending([42]));               // Output: [42]






6.     /**
* Lowercase the first letter of a string.
*
* @param {string} str  
* @return {string}  
*/
function lowercaseFirstLetter(str) {
   if (str.length === 0) {
       return str;  
   }
   return str.charAt(0).toLowerCase() + str.slice(1);
}
// Example usage:
console.log(lowercaseFirstLetter("Hello")); // Output: "hello"
console.log(lowercaseFirstLetter("World")); // Output: "world"
console.log(lowercaseFirstLetter("JAVA"));  // Output: "jAVA"
console.log(lowercaseFirstLetter(""));      // Output: ""





7.         /**
* Calculate the average of numbers in an array.
*
* @param {number[]} arr  
* @return {number} 
*/
function findAverage(arr) {
   if (arr.length === 0) {
       throw new Error("Array cannot be empty");
   }
   const sum = arr.reduce((acc, num) => acc + num, 0);
   return sum / arr.length;
}
// Example usage:
console.log(findAverage([1, 2, 3, 4, 5])); // Output: 3
console.log(findAverage([10, 20, 30]));    // Output: 20
console.log(findAverage([-5, 5, 15]));     // Output: 5





8.         /**
* Check if a year is a leap year.
*
* @param {number} year  
* @return {boolean}  
*/
function isLeapYear(year) {
   if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
       return true;
   }
   return false;
}
// Example usage:
console.log(isLeapYear(2024)); // Output: true
console.log(isLeapYear(1900)); // Output: false
console.log(isLeapYear(2000)); // Output: true
console.log(isLeapYear(2023)); // Output: false
