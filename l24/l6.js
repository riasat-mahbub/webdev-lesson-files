const http = require('http');

const server = http.createServer((request, response) =>{

    const girl = {
        preety : true,
        tsun : true,
        dere: true
    }

    response.setHeader('Content-Type', 'application/json');
    response.end(JSON.stringify(girl));


    //console.log("headers", request.headers);
    console.log("url", request.url);
    console.log("method", request.method);
})

server.listen(3000);