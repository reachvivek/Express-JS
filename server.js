const express=require('express')
const bodyParser=require('body-parser')
const app = express();

app.use(bodyParser.urlencoded({extended: false}))

app.use('/add-product', (req, res, next)=>{
    console.log("In the middleware!")
    res.send(`<form method='POST' action='/product'><input placeholder='title' name='title' type='text'></input><input placeholder='size' name='size' type='text'></input><input type='submit'></input></form>`)
    next();
})

app.post('/product', (req,res,next)=>{
    console.log(req.body)
    res.redirect('/')
})



app.use('/', (req, res, next)=>{
    console.log("In the middleware!")
    res.send(`<h1>Hello World</h1>`)
    next();
})

const routes=require('./routes')

app.listen(4000)