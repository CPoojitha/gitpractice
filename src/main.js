const dbConnection=require('..\nodexpressdemo\nodefsdmeo\mysqlnodejsdemo\src\connections\dbConnection.js');

console.log(dbConnection().then(con=>console))


//const ProductRepository=reqire('../repository/productRepository')
//const productRepository=new ProductRepository();
//const main=async() =>{
  //  let saveProduct=await productRepository.saveProduct({
    //    producctId:1,
      //  productName:'Iphone12',
        //price:84562.5,
        //description:'Iphone12mini'
    //})
    //console.log('Save product --->',saveProduct);
    const ProductRepository=reqire('..\nodexpressdemo\nodefsdmeo\mysqlnodejsdemo\src\connections\repository\productRepository.js')
    const productRepository=new ProductRepository();
      const main=async() =>{
      let updateProduct=await productRepository.updateproduct({
            producctId:2,
            productName:'Iphone10',
            price:34500.0,
            description:'Iphone'
        })
        console.log('update product --->',updateProduct);
    
     //const product=await productRepository.findAllproducts()
     //console.log('products List',products)
    }






main();
