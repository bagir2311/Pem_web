function proses1(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("helo");
    },1000);
    })
}
function proses2(greetings){
    return new Promise((resolve,reject)=>);
    setTimeout(() => {
        resolve(`${greetings} word`);
}, 1000);
};
proses1
.then((g))