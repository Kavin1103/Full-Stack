const https = require('http');

https.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Darshana is don\n');
}).listen(8000);

console.log('Server running at http://localhost:8000/');
