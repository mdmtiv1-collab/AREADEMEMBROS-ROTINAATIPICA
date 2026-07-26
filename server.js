const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const PUBLIC_DIR = __dirname;

const mimeTypes = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg'
};

http.createServer((req, res) => {
  let reqUrl = req.url.split('?')[0];

  // Route mapping
  if (reqUrl === '/' || reqUrl === '/vendas' || reqUrl === '/pagina-de-vendas') {
    reqUrl = '/pagina-de-vendas.html';
  } else if (reqUrl === '/app' || reqUrl === '/membros' || reqUrl === '/area-de-membros') {
    reqUrl = '/index.html';
  }

  let filePath = path.join(PUBLIC_DIR, reqUrl);
  const extname = path.extname(filePath);
  const contentType = mimeTypes[extname] || 'application/octet-stream';

  fs.readFile(filePath, (error, content) => {
    if (error) {
      if (error.code === 'ENOENT') {
        res.writeHead(404);
        res.end('404 Not Found');
      } else {
        res.writeHead(500);
        res.end('500 Internal Error');
      }
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });
}).listen(PORT, () => {
  console.log(`Rotina Atípica Server running at http://localhost:${PORT}`);
  console.log(`Página de Vendas: http://localhost:${PORT}/vendas`);
  console.log(`Área de Membros: http://localhost:${PORT}/app`);
});
