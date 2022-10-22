const express=require('express')

const app = express();

app.use((req, res, next)=>{
    console.log("In the middleware!")
    res.send(`<h1>Hello World</h1>`)
    next();
})

const routes=require('./routes')

const server=http.createServer(routes)

app.listen(4000)