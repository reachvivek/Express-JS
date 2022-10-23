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
  const product = new Product(null, title, imageUrl, description, price);
  product.save();
  res.redirect('/');
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('admin/products', {
      prods: products,
      pageTitle: 'Admin Products',
      path: '/admin/products'
    });
  });
};

exports.getEditProduct = (req, res, next) => {
  const editMode=req.query.edit
  if(!editMode){
    return res.redirect('/')
  }
  const prodID=req.params.productID
  Product.findByID(prodID, product =>{
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
  const product = new Product(prodID, title, imageUrl, description, price);
  console.log(product)
  product.save();
  res.redirect('/admin/products')
}

exports.postDeleteProduct=(req, res,next)=>{
  const prodID=req.params.productID
  Product.findByID(prodID, product =>{
    if(!product){
      return res.redirect('/')
    }    
    console.log("Tried to delete", product)
    const productDel=new Product(product.id, product.title, product.imageUrl, product.description,product.price)
    productDel.delete()
    res.redirect('/admin/products')
  })
}