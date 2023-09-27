// create web server
const http = require('http');
const port = 3000;

// create a server
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/plain');
    res.end('Hello World!\n');
});

// start the server
server.listen(port, () => console.log(`Server running on port ${port}`));