const http = require('http');
const fs = require('fs');
const path = require('path');

http.createServer( (req, res) => {

    if (req.url === '/') {
            fs. readFile(
                path.join(__dirname, '.','index.html' ), 
                (err, content) => {
                    if (err) throw err;
                    res.writeHead(200, {'content-type': 'text/html'});
                    res.end(content);
                }
            );
        } else if (req.url === '/about'){
            fs. readFile(
                path.join(__dirname, '.','about.html' ), 
                (err, content) => {
                    if (err) throw err;
                    res.writeHead(200, {'content-type': 'text/html'});
                    res.end(content);
                }
            );
        } else if (req.url === '/contact-me') {
            fs. readFile(
                path.join(__dirname, '.','contact-me.html' ), 
                (err, content) => {
                    if (err) throw err;
                    res.writeHead(200, {'content-type': 'text/html'});
                    res.end(content);
                }
            );
        } else {
            fs. readFile(
                path.join(__dirname, '.','404.html' ), 
                (err, content) => {
                    if (err) throw err;
                    res.writeHead(200, {'content-type': 'text/html'});
                    res.end(content);
                }
            );
        }
    

}).listen(8080);

/*
fs.readFile('index.html', (err, data) => {
        
        res.writeHead(200, {'content-type': 'text/html'});
        res.write(data);
        return res.end();
    });
*/