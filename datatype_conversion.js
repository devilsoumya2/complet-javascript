 //conversion of another data type to Number data type


// let score=55  // it convert into  number  type

// let score="45abc" // it give NaN as a output  because "45abc" is not a valid number

// let score="soumya" //it is not convert into number type .it will give output as NaN

// let score=true  // it convert boolean data type to Number .in javascript True= 1 and false=0

// let score=null  //it convert into Number .in javascript null value also consider as a Zero so the output is 0 and its data type is object

let score=undefined //it is not convert into Number.it will give output as NaN
// console.log(typeof score);
console.log(typeof (score));

let valueInNumber=Number(score)
console.log(typeof(valueInNumber));
console.log(valueInNumber); 

//conversion of anthor datatype to boolean data type 

let isLoggedIn=undefined //it is  convert into boolean datatype  .it will give output as false
 
// let isLoggedIn=null  //it is convert into boolean datatype .it will give output as false

// let isLoggedIn=34  //it is convert into boolean datatype .it will give output as True

// let isLoggedIn="soumya"   //it is convert into boolean datatype .it will give output as True

// let isLoggedIn="45abc" //it is convert into boolean datatype .it will give output as True
console.log(typeof (isLoggedIn));

let BooleanConvert=Boolean(isLoggedIn)
console.log(typeof(BooleanConvert));
console.log(BooleanConvert); 



//conversion of another datatype to string data type

// let rate="45abc" //it is convert into string  datatype .it will give output as 45abc

// let rate=45 //it is convert into string  datatype .it will give output as 45

// let rate=true  //it is convert into string  datatype .it will give output as true

// let rate=null  //it is convert into string  datatype .it will give output as null

let rate=undefined  //it is convert into string  datatype .it will give output as undefined
console.log(typeof (rate));

let StringConvert=String(rate)
console.log(typeof(StringConvert));
console.log(StringConvert); 

