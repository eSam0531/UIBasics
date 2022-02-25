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
I am promising that if you get good marks you will be rewarded or 
if you fail you have to retake the test

Promise object properties are
Pending
Fullfilled
Rejected

support two properties: state and result

while a promis object the result is undefined
while a promise object is fullfilled the result is a value(then())
while a promise object is rejected, the result is an error object
    that can be catch function will be fired
*/
function createEmp(newEmp) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            emps.push(newEmp);
            const error=false;
            if (!error){
                resolve();
            } else {
                reject('Error: someting went wrong')
            }  
        }, 2000)
    })
    
}

getAllEmps();
createEmp({ename: 'Alex', email: 'alex@email.com'},).then(getAllEmps).catch(err=>console.log(err));
