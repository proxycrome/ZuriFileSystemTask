const http = require('http');
const fs = require('fs');
const fetch = require('node-fetch');

const url = "http://jsonplaceholder.typicode.com/posts";

async function getPost(url){
    try{
    const result = await fetch(url);
    const jsonResponse = await result.json();
    data = JSON.stringify(jsonResponse, null, 2);
    }catch(err){
        console.log(err);
    }
}

getPost(url);


const server = http.createServer((request, response) => {
    fs.writeFile('./result/posts.json', data , function(){
        console.log("File written successfully");
    });
    response.writeHead(200);
    response.end("File Created Successfully");
})

server.listen(4000, () => {
    console.log("Server is Running!");
})