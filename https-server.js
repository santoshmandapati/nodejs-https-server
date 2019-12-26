let fs = require('fs');
let https = require('https');

let options = {
    key: fs.readFileSync('./sandy-key.pem'),
    cert: fs.readFileSync('./sandy-cert.pem')
};

https.createServer(options, (req, res) => {
    res.writeHead(200);
    res.end('hello world');
}).listen(8080);
