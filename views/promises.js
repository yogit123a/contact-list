isLogged=true
var xyz=new Promise((resolve,reject) =>{
    setTimeout(()=>{
        if(isLogged){
            resolve()

        }
        else{
            reject()}
        },1000);
    })
    xyz.then(()=>{console.log('then');})
    .catch(()=>{console.log('then');})
    .finally(()=>{console.log('then');})
