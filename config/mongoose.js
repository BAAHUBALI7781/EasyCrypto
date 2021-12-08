const dotenv=require('dotenv');
dotenv.config()
const mongoose=require('mongoose');

function connectDb(){
    mongoose.connect(process.env.DB);
    const connection=mongoose.connection;
    connection.once('open',(err)=>{
        if(err){
            console.log("Not connected to database!");
            return;
        }
        console.log('Database connected!');
    })
}
module.exports=connectDb;