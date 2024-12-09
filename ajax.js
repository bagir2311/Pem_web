// membuat opjek menampung  XMLHTTPEQUEST
var xhr = new XMLHttpRequest();
//membuat GET untuk mengambil data
xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
// membuat untuk merubah data
xhr.onreadystatechange = () => {
    if (xhr.readyState == 4 && xhr.status == 200) {
        var responData = JSON.parse(xhr.responseText);
        //menampilkan data ke elemen html
        let container = document.getElementById("container");
        responData.forEach((item) => {
            const div = document.createElement("div");
            div.innerHTML = `<h3>${item.title}</h3>
            <p>${item.body}</p>`;
            container.appendChild(div);
        });
        console.log(responData);
    }
};
xhr.send();