const mongoose = require("mongoose");
// const validator = require("validator");
const PartnerSchema= mongoose.Schema({
    //curly backet is used for taking the object
    name:{
        type:String,
        required:true,
       
        required:[true,"Please Enter Partners Name"]
       
    },
    // description:{
    //     type:String,
        
    //     required:[true,"Please Enter product Description"]

    // },
    // price:{
    //     type:Number,
        
    //     required:[true,"Please Enter product Price"],
    //     maxLength:[8,"Prie cannot exceed 8 characters"]
    // },
    // ratings:{
    //     type:Number,
    //     default:0
    // },
    images:
        {
            //while uploading the pictures then it required the public id and url
            public_id:{
                type:String,
                required:true
            },
            url:{
                type:String,
                required:true
            }
        }

    ,
    category:{
        type:String,
     require:true

    },
   
    createdAt:{
        type:Date,
        default:Date.now
    }



    
})

//exporting the model and passing the schema
// const Product = new  mongoose.model("Product",productSchema);
// module.exports= Product;
module.exports= mongoose.model("Partner",PartnerSchema);