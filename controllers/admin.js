const db=require('../util/database')
const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  res.render('admin/edit-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    editing: false
  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  Product.create({
    title: title,
    imageUrl: imageUrl,
    price: price,
    description: description,
  }).then(result=>{
    res.redirect('/admin/products')
  }).catch(err=>console.log(err))
  
};

exports.getProducts = (req, res, next) => {
  Product.findAll().then(products=>{
    res.render('admin/products', {
      prods: products,
      pageTitle: 'Admin Products',
      path: '/admin/products'
    });
  }).catch(err=>console.log(err));
};

exports.getEditProduct = (req, res, next) => {
  const editMode=req.query.edit
  if(!editMode){
    return res.redirect('/')
  }
  const prodID=req.params.productID
  Product.findByPk(prodID).then(product =>{
    if(!product){
      return res.redirect('/')
    }    
    res.render('admin/edit-product', {
      product:product,
      pageTitle: 'Edit Product',
      path: '/admin/edit-product',
      editing: editMode
    });
  })
};

exports.postEditProduct=(req,res,next)=>{
  console.log('Tried to edit!')
  const prodID=req.body.productID;
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  Product.findByPk(prodID).then(product=>{
    product.id=prodID,
    product.title=title,
    product.imageUrl=imageUrl,
    product.price=price,
    product.description=description
    return product.save()
  }).then(response=>{
    res.redirect('/admin/products')
  }).catch(err=>console.log(err))
}

exports.postDeleteProduct=(req, res,next)=>{
  const prodID=req.params.productID
  Product.findByID(prodID).then(([product])=>{
    console.log("Tried to delete", product[0])
    Product.delete(product[0].id).then(()=>res.redirect('/admin/products')).catch(err=>console.log(err))
  }).catch(err=>console.log(err))    
}