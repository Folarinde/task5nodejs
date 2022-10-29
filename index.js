const fs = require('fs');
const path = require('path');
const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    let filePath = path.join(__dirname, 'home.html');
    fs.readFile(filePath, 'utf8', (err, data) => {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    });
  }
  if (req.url === '/about.html') {
    let filePath = path.join(__dirname, 'about.html');
    fs.readFile(filePath, 'utf8', (err, data) => {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    });
  }
  if (req.url === '/contact.html') {
    let filePath = path.join(__dirname, 'contact.html');
    fs.readFile(filePath, 'utf8', (err, data) => {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    });
  }
});

const port = 4000;

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
