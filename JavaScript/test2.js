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