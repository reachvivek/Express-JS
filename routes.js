const fs = require('fs')

const requestHandler=(req, res)=>{
    if (req.url==`/home`){
        res.setHeader('Content-Type', 'text/html');
        res.write(`<html><head><title>Home Page</title></head><body><h1>Welcome Home!</h1></body></html>`)
        res.end()
    }
    if (req.url==`/about`){
        res.setHeader('Content-Type', 'text/html');
        res.write(`<html><head><title>About US Page</title></head><body><h1>Welcome to About Us page!</h1></body></html>`)
        res.end()
    }
    if (req.url==`/`){
        fs.readFile('message.txt', 'utf-8', (err, data)=>{
            const message=data
            console.log(err)
            res.setHeader('Content-Type', 'text/html');
            res.write(`<html><head><title>My First Page</title></head><body><p>${message}</p><form action='/message' method='POST'><input type="text" name='message'></input><input type='submit' value="Send"></input></form></body></html>`)
            res.end()
        })
    }
    if (req.url==`/message` && req.method==='POST'){
        const body = [];
        req.on('data', (chunk)=>{
            console.log(chunk)
            body.push(chunk)
        })
        return req.on('end', ()=>{
            const parsedBody=Buffer.concat(body).toString();
            console.log(parsedBody)
            const message=parsedBody.split('=')[1]
            console.log(message)
            fs.writeFile('message.txt', message, err=>{
                res.statusCode=302;
                res.setHeader('Location', '/')
                return res.end()
            })
        })
    }
}

module.exports=requestHandler;