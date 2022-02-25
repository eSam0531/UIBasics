console.log("welcome to typescript");

let name1: string = 'Esmee';
//let name2: string = 34; // number is not assignable to name2 //compile time error
let stLen: number = name1.length;
let stLength: number = (<string> name1).length;
let stLength2 = (name1 as string).length;

enum Conis {
    penny =1, dime=10, quarter=25
}

interface Employee {
    firstName:string; lastName:string;
}

let emp:Employee;

emp={firstName: 'Esmee', lastName: 'Sam'};

function newEmp(emp:Employee):void {
}

class Emp {
    fullName: string;
    constructor(public firstName,public lastName){
        this.fullName = firstName + lastName;
    }
}

let ee = new Emp('John', 'Smith');

//typescript supports Arrow function
let increment = (x) => x+1;

class Test{
    constructor(public a:number){}
    
    add = (b:number):number=>{
        return this.a+b;
    }
}

let eno: number=100;
let ename: string = 'David';
//tuple
let ee1 : [number,string];
ee1 = [eno,ename];

let product:[number,string][];
//tuple array
product=[[100,'laptop'],[101, 'Desktop'],[103,'keyboard']];

let sum = (x:number, y:number)=> x+y;
let result:number = sum(2,4);
console.log(result);

class Fruits{
    readonly fruitId: number;
    constructor(fruitID:number){
        this.fruitId=fruitID;
    }
}

let frt = new Fruits(111);
//results in compile time error because fruitId is readonly
//frt.fruitId=123;

//generics -> ensures type saftey
interface KVP<T,U>{ //KVP -> key value pair
    key:T;
    value:U;
}

let kvp1:KVP<number,string>={key:123, value:'abc'};
let kvp2:KVP<number,number>={key:123, value:456};

//REST Parameters

function call(name:string,...addresses:string[]){
    return name+' '+addresses;
}

console.log(call('Esmee','address1','address2','address2'));

