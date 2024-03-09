// Memory is 2 type stack(Primitive) and Heap(Non-Primitive)

// primitive (stack) are numbers ,boolean,string,null,symbol BigInt,undefiend,symbol    //it give a copy of the orginal value.it does not change the orginal value

//Non-Primitive (heap) are array,objects, function  // it change the orginal value

let myName="soumyaranjan"

let myOthername= myName
myOthername="jena"
console.log(myName);
console.log(myOthername);

let userOne={
    email:"soumya@gmail.com",
    upi:"user@bl"
}
let userTwo=userOne;
userTwo.email="ranjan@gmail.com"
console.log(userOne);
console.log(userTwo);
