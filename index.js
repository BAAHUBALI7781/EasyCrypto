
const express=require('express');
const port=process.env.PORT || 8000;
const app=express();

const connectDB=require('./config/mongoose');
connectDB();

app.use(express.urlencoded());
app.use(express.json({
    type: ['application/json', 'text/plain']
  })) 

if(process.env.NODE_ENV === 'production'){
  app.use(express.static("client/build"));
}

app.use('/',require('./router/index'));
app.listen(port,function(err){
    console.log("Server listening");
})