const express=require('express');
const router=express.Router();

router.get('/', (req, res, next)=>{
    console.log("In the middleware!")
    res.send(`<h1>Welcome</h1>`)
    next();
})

module.exports=router;