function fetchdata(callback){
    setTimeout(function(){
        const data = 'fetched data!';
        callback(data);
    },5000);
}
fetchdata (function(data){
    console.log(data);
});
// membuat proses 2
console.log("ini peroses2");
