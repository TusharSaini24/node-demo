const http = require('http')
const chalk = require('chalk');
// const keys = require('./keys')

// console.log(keys);

const server = http.createServer((req,res) => {
    console.log(chalk.yellow("Server Connected"));
    // console.log(req)
    if(req.url == '/') {
        res.write('<h1>Hello Welcome</h1>')
        res.end();
    }
    else if (req.url == '/about') {
        res.write('<h1>About Page</h1>')
        res.end();
    }

})

server.listen(8000)