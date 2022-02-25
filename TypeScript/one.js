console.log("welcome to typescript");
var name1 = 'Esmee';
//let name2: string = 34; // number is not assignable to name2 //compile time error
var stLen = name1.length;
var stLength = name1.length;
var stLength2 = name1.length;
var Conis;
(function (Conis) {
    Conis[Conis["penny"] = 1] = "penny";
    Conis[Conis["dime"] = 10] = "dime";
    Conis[Conis["quarter"] = 25] = "quarter";
})(Conis || (Conis = {}));
var emp;
emp = { firstName: 'Esmee', lastName: 'Sam' };
function newEmp(emp) {
}
var Emp = /** @class */ (function () {
    function Emp(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = firstName + lastName;
    }
    return Emp;
}());
var ee = new Emp('John', 'Smith');
//typescript supports Arrow function
var increment = function (x) { return x + 1; };
var Test = /** @class */ (function () {
    function Test(a) {
        var _this = this;
        this.a = a;
        this.add = function (b) {
            return _this.a + b;
        };
    }
    return Test;
}());
var eno = 100;
var ename = 'David';
//tuple
var ee1;
ee1 = [eno, ename];
var product;
//tuple array
product = [[100, 'laptop'], [101, 'Desktop'], [103, 'keyboard']];
var sum = function (x, y) { return x + y; };
var result = sum(2, 4);
console.log(result);
var Fruits = /** @class */ (function () {
    function Fruits(fruitID) {
        this.fruitId = fruitID;
    }
    return Fruits;
}());
var frt = new Fruits(111);
var kvp1 = { key: 123, value: 'abc' };
var kvp2 = { key: 123, value: 456 };
//REST Parameters
function call(name) {
    var addresses = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        addresses[_i - 1] = arguments[_i];
    }
    return name + ' ' + addresses;
}
console.log(call('Esmee', 'address1', 'address2', 'address2'));
