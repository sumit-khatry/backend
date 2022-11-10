const express=require('express')
const cloudinary=require('cloudinary')
const cors=require('cors');
const cookieParse=require('cookie-parser')
const bodyParse=require('body-parser')
const ConnDB=require('./Database/ConnDB')
const user=require('./route/userRoute')
const fileUpload=require('express-fileupload')


cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
const app=express();
  app.use(cors())
app.use(express.json())
app.use(cookieParse());
app.use(fileUpload());
app.use(bodyParse.urlencoded({extended:true}))
  app.use("/api",user)
  
  ConnDB();

const port=5000

app.listen(port,()=>{
    console.log("server is running on",port)
})
