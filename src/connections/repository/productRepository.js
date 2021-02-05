const dbConnection=require('..\nodexpressdemo\nodefsdmeo\mysqlnodejsdemo\src\connections\dbConnection.js')
const queries=require('..\nodexpressdemo\nodefsdmeo\mysqlnodejsdemo\src\connections\queries\dbqueries.js')

module.exports=class ProducctRepository{
    /*async saveProduct(product){
        let con=await dbConnecction();
        try{
            await con.query('START TRANSACTION');
            let saveProduct=await con.query(queries.INSERT_PRODUCT,
                [product,productId,product.productName,product.price,product.description])
                await con.query('COMMIT')
                product.productId=savedProduct.productId
                return product;
            }catch(ex){
                await con.query('ROLLBACK')
                throw ex;
        
            }finally{
                await con.release();
                await con.destroy();
            
            }

        }*/

        async updateProduct(product){
            let con=await dbConnecction();
            try{
                await con.query('START TRANSACTION');
                let updateProduct=await con.query(queries.update_PRODUCT,
                    [product,productId,product.productName,product.price,product.description])
                    await con.query('COMMIT')
                    product.productId=updateProduct.productId
                    return product;
                }catch(ex){
                    await con.query('ROLLBACK')
                    throw ex;
            
                }finally{
                    await con.release();
                    await con.destroy();
                
                }
    
            }
    }
