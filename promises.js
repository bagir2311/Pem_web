function fetchData(){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            const data = "";
            if (data){
            resolve(data);
            }else {}
            reject("error: unuble to fetch data");
        }, 1000);
    });
}
// memanggil promise
fetchData()
    .then((data)=> {
        console.log(data);
    })
    .catch((error) => {
        console.error(`Error; unebel to fetch data;${error}`);
    });