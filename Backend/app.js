const express = require('express')
const bodyParser=require('body-parser')
const sequelize=require('./util/database');
const app=express();

const userRoutes=require('./routes/user')

app.use(bodyParser.json());

app.use(userRoutes)

sequelize.sync().then(response=>{
    console.log(response)
    app.listen(3000, ()=>{
        console.log("Server started at Port 3000")
    })
}).catch(err=>console.log(err))

