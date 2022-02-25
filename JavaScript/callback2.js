const emps = [
    {ename: 'Esmee',email: 'esmee@email.com'},
    { ename: 'John',email: 'john@email.com'},
    {ename: 'cole',email: 'cole@email.com'}
]

function getAllEmps(){
    setTimeout(()=> {
        let result = '';
        emps.forEach((emp,index)=> {
            result += `<li> ${emp.ename}</li>`
        });
        document.body.innerHTML=result;
    }, 1000)
}
/*
callback is a function passed as an argument to 
another function. Callback are async functions, where
one function has to wait for another fucntion.
*/
function createEmp(newEmp, callback){
    setTimeout(() => {
        emps.push(newEmp);
        callback();
    }, 2000)
}

getAllEmps();
// pass newEmployee object and function to callback into createEmp function
createEmp({ename: 'Alex', email: 'alex@email.com'}, getAllEmps);
