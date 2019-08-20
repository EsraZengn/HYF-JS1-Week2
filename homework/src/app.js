/* STRINGS */

console.log(`------ STRINGS -------`);
console.log(`\n`);

const myString = 'hello,this,is,a,difficult,to,read,sentence';
console.log(myString);
console.log(`The length of myString is: ${myString.length}`);

const myNewString = myString.replace(/,/g, ` `); // g(global) is used to replace all occurances of ',' with ' '
console.log(myNewString);
console.log(`\n`);

const str = 'dlroW olleH';
console.log(`Old string: ${str}`);

const reversedStr = str
  .split(``)
  .reverse()
  .toString()
  .replace(/,/g, ``);
console.log(`Reversed String: ${reversedStr}`);
console.log(`\n`);

/* ARRAYS */

console.log(`------ ARRAYS -------`);
console.log(`\n`);

const favoriteAnimals = ['blowfish', 'capricorn', 'giraffe'];
favoriteAnimals.push(`turtle`);
/* I thinks the new array will be favoriteAnimals = ["blowfish", "capricorn", "giraffe", "turtle"]
  since arrays which are complex data types are mutable thus their values can be changed even if they are const. */
console.log(favoriteAnimals);

favoriteAnimals.splice(1, 0, 'fox');
/* the new array will be favoriteAnimals = ["blowfish", "fox", "capricorn", "giraffe", "turtle"] as I inserted "fox"
  at index 1 */
console.log(favoriteAnimals);

favoriteAnimals.splice(3, 1);
console.log(favoriteAnimals);
console.log(`\n`);

/* OPERATORS */

console.log(`------ OPERATORS -------`);
console.log(`\n`);

/* 1 */

0 == '0'; // true
0 == []; // true
'0' == []; // false
/* The above snippet is false because seemingly different values equate to true when compared with ==  
  (loose or abstract equality) as JavaScript converts each to a string representation before comparison.
   "0" is a string with value 0 whereas empty array [] is "" when converted to string, thus "0" == "" is false. 
*/

/* 2 */

const x = [1, 2, 3];
const y = [1, 2, 3];
const z = y;

x == y; // false
x === y; // false
z == y; // true

/* The results are of the first two comparison are false because arrays are objects and for objects == 
  only checks to see if they are the same actual object reference, not if they are two separate object
  that contain the same contents. In other words for arrays == compares arrays' reference not their content.
  For the third comparison the result is true because variable z is referencing the same memory location as y. */

/* 3 */

const o1 = { foo: 'bar' };
const o2 = { foo: 'bar' };
const o3 = o2;

console.log(`o2.foo: ${o2.foo} and o3.foo = ${o3.foo}`);

o2.foo = 'bora';
console.log(`o2.foo: ${o2.foo} and o3.foo = ${o3.foo}`);
// o3.foo changes automatically when o2.foo changes because o3 is referencing the same memory location as o2.

o1.foo = 'ora';
console.log(`o1.foo: ${o1.foo} and o3.foo = ${o3.foo}`);
console.log(`\n`);

// o3 has no connection with o1 whatsoever so changing o1 has no effect on o3.

/* the order we assign (o3 = o2 or o2 = o3) matters because right-hand-side of the = is variable whereas  
  left-hand-side is value. 
  o3 = o2 -> o3 is referencing to memory location of o2
  o2 = o3 -> o2 is referencing to memory location of o3 */

/* QUESTIONS FROM HYF REPOS Week2 remaining questions */

console.log(`---Remaining questions from HYF-Javascript1/Week2---\n\n`);
console.log(`----- 8 ------`);

let myFruit = `cherry`;
console.log(`The value of my variable myFruit is: ${myFruit}`);

let myNumber = 7;
console.log(`The value of my variable myNumber is: ${myNumber}`);

let myBooks = [`It`, `The Road`, `Middlesex`];
console.log(`The value of my variable myBooks is: ${myBooks}`);

let myDaughter = {
  name: `Azra`,
  age: 3,
};
console.log(`The value of my variable myDaughter is: ${myDaughter.name}, ${myDaughter.age}`);
console.log(`\n`);

console.log(`I think the value of my variable myFruit is 'string'.`);
console.log(`I think the value of my variable myNumber is 'number'.`);
console.log(`I think the value of my variable myBooks is 'object'.`); // array is an object
console.log(`I think the value of my variable myDaughter is 'object'.`);
console.log(`\n`);

console.log(`The actual type of my variable myFruit is: ${typeof myFruit}`);
console.log(`The actual type of my variable myNumber is: ${typeof myNumber}`);
console.log(`The actual type of my variable myBooks is: ${typeof myBooks}`);
console.log(`The actual type of my variable myDaughter is: ${typeof myDaughter}`);
console.log(`\n`);

if (typeof myFruit == typeof myNumber) {
  console.log(`myFruit and myNumber are the SAME TYPE.`);
} else {
  console.log(`myFruit and myNumber are NOT the SAME TYPE.`);
}

if (typeof myBooks == typeof myDaughter) {
  console.log(`myBooks and myDaughter are the SAME TYPE. =^_^=`);
} else {
  console.log(`myBooks and myDaughter are NOT the SAME TYPE.`);
}

console.log(`\n`);

console.log(`----- 9 ------`);
console.log(`\n`);

/* If a equals 7, and the only other statement is a = a % 3, what would be the new value of a? */

let a = 7;
a = a % 3;

console.log(`The initial value of a is 7.`);
console.log(`After the reassignment a = a % 3,`);
console.log(`I think the final value of a will be 1.`);
console.log(`The actual final value of a is ${a}.`);
console.log(`\n`);

console.log(`What % (remainder operand) does is it gives the remainder of a division.`);
console.log(
  `With %, first operand is divided by second operand and remainder is returned as a result.`,
);
console.log(`In this case the remainder of 7/3 is 1.`);
console.log(`Thus the final value of a is 1 which is the remainder.`);
console.log(`\n`);

console.log(`----- 10 ------`);
console.log(`\n`);

const diffTypesArr = [`Different`, `types`, 1, [`can`, `have`], true];
console.log(`10.1-   My array with different types : ${diffTypesArr}`);
console.log(`\n`);

console.log(`10.2-   It is possible to compare infinity with infinity. `);
console.log(`infinity == infinity and infinity === infinity are both true since infinity is treated as numerical value. 
For example: `);

if (6 / 0 === 10 / 0) {
  console.log(`6/0 === 10/0 is a true statement.`);
} else {
  console.log(`6/0 === 10/0 is a false statement.`);
}
