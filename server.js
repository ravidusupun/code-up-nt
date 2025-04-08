const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    if (req.url === '/') {
        res.end('Hello World!\n');
    } else if (req.url === '/about') {
        res.end('Project Name: AquaLeanyer Description:server of project in Node.js');
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found\n');
    }
}).listen(3000);

console.log('Server running on port 3000');
// netstat -ano | findstr :3000
// node server.js
2+2
