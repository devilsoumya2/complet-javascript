//Array

const myArr=[1,5,8,4,3]   
const myheros=["soumya","ranjan","jena"]
const myArray=new Array(2,7,5,8,9)              

console.log(myArr[0]);
console.log(myArray[1]);
console.log(myheros[2]);

//Array methods
const ArryMethod=[1,5,8,4,3] 
ArryMethod.push(9)  // it will add the element in last position

ArryMethod.pop() // it will remove the data at last position

ArryMethod.unshift(7) // it will add the element at first position

ArryMethod.shift()  // it will remove the element at first position

console.log(ArryMethod.includes(11)); //include method is used for check weather the element presnt in side the array or not if presnt then it give true otherwise false

console.log(ArryMethod.indexOf(5)); // indexof method is used the index number in the given number

const newArray=ArryMethod.join()  // this join method will add the old array into new array and it conver it into string type

console.log(ArryMethod);
console.log(newArray);
console.log(typeof newArray);

// // splice, slice
console.log("A ",ArryMethod);
const n1=ArryMethod.slice(1,3)
console.log(n1);
console.log("B ",ArryMethod);

const n2=ArryMethod.splice(1,3)
console.log(n2);
console.log("C ",ArryMethod);




