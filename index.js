// console.log("Hello From Node.js....!")


// const Person = require('./person')


// const person1 = new Person('Haakon', 19);

// person1.greeting();



const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer ((req,res) => {



})

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));