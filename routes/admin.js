const express=require('express');
const router=express.Router();

router.get('/add-product', (req, res, next)=>{
    console.log("In the middleware!")
    res.send(`<form method='POST' action='/admin/add-product'><input placeholder='title' name='title' type='text'></input><input placeholder='size' name='size' type='text'></input><input type='submit'></input></form>`)
    next();
})

router.post('/add-product', (req,res,next)=>{
    console.log(req.body)
    res.redirect('/')
})

module.exports=router;