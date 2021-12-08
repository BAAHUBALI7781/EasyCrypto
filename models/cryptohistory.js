const mongoose=require('mongoose');

const crytptoSchema=new mongoose.Schema({
    coins:{
        type:Array,
        required:true
    },
    data:{
        type:Object,
        required:true
    }
},{
    timestamps:true
});

const CryptoSchema=mongoose.model('CryptoSchema',crytptoSchema);

module.exports=CryptoSchema;