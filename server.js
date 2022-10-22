const http=require('http')

const server=http.createServer((req, res)=>{
    if (req.url==`/home`){
        res.setHeader('Content-Type', 'text/html');
        res.write(`<html><head><title>My First Page</title></head><body><h1>Welcome Home!</h1></body></html>`)
        res.end()
    }
    if (req.url==`/about`){
        res.setHeader('Content-Type', 'text/html');
        res.write(`<html><head><title>My First Page</title></head><body><h1>Welcome to About Us page!</h1></body></html>`)
        res.end()
    }
    if (req.url==`/`){
        res.setHeader('Content-Type', 'text/html');
        res.write(`<html><head><title>My First Page</title></head><body><h1>Welcome to my Node Js Project!</h1></body></html>`)
        res.end()
    }
})

server.listen(4000)