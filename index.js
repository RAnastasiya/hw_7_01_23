// написати функцию яка приймае коректне число яка є виком користувача і повертае результат перевіркі на повноліття 

// const age = 17;
// isAdult();

// if(checkNumber(number)) {
//     console.log(isEven(number));
// } else {
//     console.log("Error, value must be number");
// }

// /**
//  * 
//  * @param {number} age 
//  * @param {number} FULL_AGE default value = 18
//  * @returns {boolean}
//  */
// function isAdult(age, FULL_AGE = 18){
//     return age >= FULL_AGE;
// }

// /**
//  * 
//  * @param {any} value 
//  * @returns {boolean}
//  */
// function checkNumber(value){
//     const checkValue = value === '' || value === null || Number.isNaN(Number(value))
//     return !checkValue;
// }

// /**
//  * 
//  * @returns {string | null}
//  */
// function  getAnswer() {
//     const answer = prompt('How are you?', 5);
//     return answer ? answer : null
// }

// const number1 = 45.5;
// const number2 = 9.1;

// /**
//  * 
//  * @param {number} number1 
//  * @param {number} number2 
//  * @returns {boolean}
//  */
// function isMultiplicity(number1, number2) {
//     return number1 % number2 === 0
// }

// if (Number.isInteger(number1) && Number.isInteger(number2)) {
//     console.log(isMultiplicity(number1, number2));
// } else {
//     console.log('Error, number must be integer')
// }

// /**
//  * 
//  * @param {number} side1 
//  * @param {number} side2 
//  * @param {number} side3 
//  * @returns {boolean} 
//  */
// function isTriangleExist(side1=1, side2=1, side3=1){
//     return (
//         side1 + side2 > side3 && 
//         side2 + side3 > side1 && 
//         side1 + side3 > side2 && 
//         side1 > 0 && 
//         side2 > 0 && 
//         side3 > 0
//         );
// }
// console.log(isTriangleExist());

// /**
//  * 
//  * @param {number} number1 
//  * @param {number} number2 
//  * @returns {number}
//  */
// function compareTwoNumbers(number1, number2){
//     if (number1 === number2) {
//         return 0
//     }
//     if (number1 > number2) {
//         return 1
//     }
//     return -1
// }

// console.log(compareTwoNumbers(3,3));

// /**
//  * 
//  * @param {number} a 
//  * @param {number} b 
//  * @param {number} c 
//  * @returns {number[] | null}
//  */
// function calculateSquareEquation(a=1, b=-26, c=120) {
//     const D = b*b - 4*a*c;
//     if(D < 0){
//         return null
//     }
//     if(D === 0){
//         return [-(b)/(2*a)];
//     }
//     const x1 = (-b + Math.sqrt(D))/(2*a);
//     const x2 = (-b - Math.sqrt(D))/(2*a);
//     return [x1,x2];
// }

// console.log(calculateSquareEquation());