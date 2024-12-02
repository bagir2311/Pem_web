function fetchData1(callback){
    setTimeout(()=>{
        console.log("Fetch Data1...");
        callback("Data1");
    },5000);
}
function fetchData2(data1, callback2){
    setTimeout(()=>{
        console.log(`fetch data2...${data1}`);
        callback2("Data2");
    },5000);
}
function fetchData3(data2, callback3){
    setTimeout(()=>{
        console.log(`fetch data3...${data2}`);
        callback3("Data3");
    },5000);
}
//memanggil callbacki hell
fetchData1((data)=>{
    fetchData2(data, (data1)=>{
        fetchData3(data1,(data2)=>{
            console.log(`final data: ${data2}`);
     });    
   });
});