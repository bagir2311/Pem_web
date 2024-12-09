fetch("https://jsonplaceholder.typicode.com/posts").then((response) => {
    if (!response.ok) {
        throw new Error("Network response not ok");
    }
    return response.json();
}).then((data) => {
    console.log(data);
}).catch((error) => {
    console.error("error:", error);
});