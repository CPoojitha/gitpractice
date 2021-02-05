const mysql=require('promise-mysql');

const dbConfig={
    user:'admin',
    password:'admin',
    database:'devops',
    host:'locaalhost',
    connectionLimit:10
}
module.exports=async()=>{
    try{
      let pool;
      let connection;
      if(pool)connection=pool.getConnection();
      else{
          pool=await mysql.createPool(dbConfig);
          connection=pool.getConnection();
      }
      return connection;

    }catch(e){
        throw e;
    }
}
