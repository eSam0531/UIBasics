/*
Programming paradigms:
 defined as approach to solve problem using some programming language
 also can say it is a method to solve a problem using tools and techniques
    that are available to us following some approach.

 1. Imparative -> works by changing the program state through assignment statements
        Performs step by step tasks, main focus is to achieve the goal
        Just commands for the computer program to perform.
    * Procedural -> emphasizes on procedure in terms of under lying machine model. 
        no difference between procedural and imperative.
    * Object Oriented -> written as a collection of classes and object which are meant for
        communication. More emphasis on data rather than procedure.
    * Parallel processing -> processing of program instructions by dividing them among
        multiple processors. Objective is to run program in less time by dividing the tasks.
 2. Declarative -> expresses logic of computation without talking about its control flow. 
        Focus is on what needs to be done rather than how it should be done.
    * Logic -> abstract model of computation. We have the knowledge base which we know before
        and along with the question and knowledge base which is given to machine, it produces
        result.
    * Functional -> roots in mathematics and is language independed. Key principal is the 
        execution of mathematical functions. Central model for abstraction is the function
        which are meant for some specific computation and not the data structure. Data are
        loosly coupled to functions. Functions hide their implementation. 
    * Database/Data driven -> statements are defined by data rather than hard-coding a series
        of steps. 
*/

// impeartive way of programming
let list = [1, 2, 3];

for (let i = 0; i < list.length; i++) {
    list[i] = list[i] + 1;
}
console.log(list);

//declarative programming
// map -> map each time of array to a function and creates a new array based on 
// the return values of the function calls
list.map(function (item) { 
    return item 
});
console.log(list);
list.map((item) => item + 1);
console.log(list);

//reduce is a function that takes single/accumulated value and the next
// item in the array and returns the new value.
const sum = (accumulatedsum , arrayiterative) => accumulatedsum+arrayiterative;
let output = list.reduce(sum);
console.log(output);

//concatenation funciton
let con = [1,2,3].concat([4,5,6]);
console.log(con);

//object assign
const obj={num:2};
const newObj=Object.assign({},obj);
newObj.num=4;
console.log(obj.num);
console.log(newObj.num);

// predefined function call()
let obj1 = {num2:5};
let addToThis = function(x,y){
    return this.num2 + x + y;
}
console.log(addToThis.call(obj1,1,2));

//predefined function apply()
// used only for arrays
let list2 = [4,5,6];
console.log(addToThis.apply(obj1,list2));

