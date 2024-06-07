import { createServer } from "node:http";

// constants
const appShell = `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>NGINX Demo</title><link rel="icon" href="data:,"></head><body><h1 style="color:#00f;text-align:center;margin-top:100px">Node.js App (with NGINX as reverse-proxy server)</h1><div style="position:fixed;top:50%;left:50%;transform:translate(-50%,-50%)"><img src="https://picsum.photos/400/400?random=1"></div></body></html>`;
const hostname = "127.0.0.1";
const port = 3000;

// server
const server = createServer((req, res) => {
  console.log(`GET Request => http://${hostname}:${port}` + req.url);
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(appShell);
});

server.listen(port, () => console.log(`LIVE:  http://${hostname}:${port}/`));
