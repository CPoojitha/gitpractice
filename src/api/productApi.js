const ProductRepository=require('/..repository/productrepository')
const repository=new ProductRepository();
const ProductApi=(app)=>{
    app.get('/products',(req,res)=>{
        repository.findAllProducts().then(products=>res.json(products));
    
    })
    app.post('/products',(req,res)=>{
        const { productId,productName,price,description}=req.body
        repository.saveProduct({productId,productNmae,})
        .then(responce=>res.json(product))
    })
}
    module.exports=productApi

