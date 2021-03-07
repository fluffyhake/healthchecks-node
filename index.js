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




});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));