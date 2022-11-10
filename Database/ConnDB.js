const mongoose=require('mongoose')
const dotenv=require('dotenv')

dotenv.config();

const DB=process.env.DB;

const ConnDB=()=>{
    mongoose.connect(DB,{useNewUrlParser:true,useUnifiedTopology:true}).then((data)=>{
        console.log(`mongodb connected with server:${data.connection.host}`);
    })
}

module.exports=ConnDB;