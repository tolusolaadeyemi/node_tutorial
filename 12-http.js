const http = require('http');

//req: incoming request (method etc)
//res: short for response, what we are sending back
const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('Welcome to our home page')
    }
    else if(req.url === '/about'){
        res.end('Here is our short history')
    }else{
    res.end("Oops!We can't seem to find the page you are looking for")
    }
})

server.listen(5000)