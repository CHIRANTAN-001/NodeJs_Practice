const http = require('http');
const fs = require('fs');

const port = process.env.port || 3000;

const server = http.createServer((request, res) => {
    // res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    
    if (request.url == "/") {
        res.statusCode = 200;
        res.end("<h1>Home Page</h1>");
        
    }
    else if (request.url == "/about") {
        res.statusCode = 200;
        res.end("<h1>About Page</h1>");
    }
    else if (request.url == "/spinner") {
        res.statusCode = 200;
        const site = fs.readFileSync('index.html');
        res.end(site.toString());
    }
})

server.listen(port, () => {
    console.log('server is listening on port', port);
});