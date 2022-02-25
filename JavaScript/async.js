const emps = [
    {ename: 'Esmee',email: 'esmee@email.com'},
    {ename: 'John',email: 'john@email.com'},
    {ename: 'Cole',email: 'cole@email.com'}
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
Asynch and await make promises easier to write

asynch makes a function return a Promise
await make a function wait for a Promise
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

async function test() {
    await createEmp({ename: 'Alex', email: 'alex@email.com'});
    getAllEmps();
}

test();

