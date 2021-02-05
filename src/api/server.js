const express=require('express');
const productApi=require('./api/productsApi')
const app=express();
app.use(express.json());
productsApi(app);
    app.listen(3001,()=>console.log('server started'))