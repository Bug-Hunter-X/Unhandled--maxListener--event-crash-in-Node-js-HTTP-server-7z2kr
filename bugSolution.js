const http = require('http');
const bodyParser = require('body-parser');

const server = http.createServer((req, res) => {
  let body = '';
  req.on('data', chunk => {
    body += chunk.toString();
  });

  req.on('end', () => {
    // Process the complete request body here
    console.log('Request body:', JSON.parse(body));
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World');
  });
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});