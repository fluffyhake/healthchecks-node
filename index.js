// console.log("Hello From Node.js....!")


// const Person = require('./person')


// const person1 = new Person('Haakon', 19);

// person1.greeting();



const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer ((req,res) => {

    // Commented out due to being ineficcent
    // console.log(req.url)
    // if(req.url ==='/'){
    //     fs.readFile(
    //     path.join(__dirname, 'public', 'main.html'), 
    //     (err, content) => {
    //         if(err) throw err;

    //         res.writeHead(200, { 'Content-Type': 'text/html'});
    //         res.end(content);

    //     })
    // }
    // if(req.url ==='/api/hostlist'){
    //     const hosts = [
    //         {name: "plex", ip: "192.168.55.?"}
    //     ];
    //     res.writeHead(200, {'Content-Type': 'application/json'});
    //     res.end(JSON.stringify(hosts))
    // }



    // Build file path
    let filePath = path.join(__dirname, 'public', req.url === '/' ? 'main.html' : req.url);
    // Extension of the file
    let extname = path.extname(filePath);

    // Initial conetent type
    let contentType = 'text/html';


    // Check the extension and set content type

    switch(extname) {
        case ".js":
            contentType = "text/javascript";
            break;
          case ".css":
            contentType = "text/css";
            break;
          case ".json":
            contentType = "application/json";
            break;
          case ".png":
            contentType = "image/png";
            break;
          case ".jpg":
            contentType = "image/jpg";
            break;
        }

    // Check if contentType is text/html but no .html file extension
    if (contentType == "text/html" && extname == "") filePath += ".html";

    // log the filePath
    console.log(filePath);


    //Read file
    fs.readFile(filePath, (err, content) => {
        if(err) {
            console.log(err)
            if (err.code == 'ENOENT'){
                //Page not found
                fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content) => {
                    res.writeHead(404, {'Content-Type': 'text/html'});
                    res.end(content, 'utf8');
                });
            }else {
                // Some server error
                res.writeHead(500);
                res.end(`Server Error: ${err.code}`);
            }
        }else {
            // Sucsess
            res.writeHead(200, {'Content-Type': contentType});
            res.end(content,'utf8');
        };


    });

    
    console.log(filePath)

});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));