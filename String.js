const name="pina"
const repoCount=10
// console.log(name + repoCount); //it is not used
console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`); // it is stringinterpolation

const myName=String("soumya-ranjan")
// console.log(myName[0]);
// console.log(myName[1]);
// console.log(myName[2]);
// console.log(myName.__proto__);
console.log(myName.length);
console.log(myName.toUpperCase());
console.log(myName.charAt(4));
console.log(myName.indexOf('r'));

const newString=myName.substring(3,8)
console.log(newString);

const anotherString=myName.slice(5,9)
console.log(anotherString);

const newStringOne="     satyabrata    "
console.log(newStringOne);
console.log(newStringOne.trim())

const url="https://soumya.com/ranjan%20jena"
console.log(url.replace('%20','-'));
console.log(url.includes('soumya'));

console.log(myName.split('-'));