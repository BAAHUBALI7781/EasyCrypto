const express=require('express');
const router=express.Router();
const CryptoSchema=require('../models/cryptohistory');
const fetch = require('cross-fetch');

router.post('/compareData',async function(req,res){
    const newCrypto = await CryptoSchema.create(req.body);
    console.log(newCrypto);
    return res.redirect('/');
})

router.get('/getHistory',async function(req,res){
    const data=await CryptoSchema.find({}).sort({createdAt:-1});
    return res.status(200).json({
        data:{
            history:data
        },
        message:'All history fetch'

    });
});

router.get('/fetchCoins',async function(req,res){
    let data=await fetch(`https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=${process.env.API_KEY}`);
    data=await data.json();
    return res.status(200).json({
        data:{
            coins:data
        },
        message:'All coins fetch'

    });
})
module.exports=router;