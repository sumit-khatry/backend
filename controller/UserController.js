const User=require("../models/UserModel.js")
const jwt=require('jsonwebtoken')
const bcrypt=require('bcrypt');
const sendToken = require("../Utils/sendToken.js");
const crypto=require('crypto');
const { json } = require("body-parser");
const Partner = require("../models/Partner.js");
const cloudinary = require("cloudinary");




// exports.LoginUser=(async(req,res,next)=>{
//     const {email,password}=req.body;
//     if (!email || !password){
//         return res.status(408).send("Enter valid email or password")
//     }
// })

exports.LoginUser=async (req,res,next)=>{
    const {email,password}=await req.body;
    if (!email || !password){
        return res.status(400).send("Enter both email and password")
    }
    
    const user = await User.findOne({ email })

    if (!user) return res.status(401).send("Invalid email address")
    console.log(user.password);
   const pass=bcrypt.compareSync(password,user.password)
   console.log(pass)

   
    if(!pass) return res.status(401).send("Email or password is invalid")
      sendToken(user,200,res)
}


exports.RegisterUser=(async(req,res,next)=>{
    const {name,email,password}=await req.body;

const salt=bcrypt.genSaltSync(10)
const hashPassword=bcrypt.hashSync(password,salt)
const checkUser=await User.findOne({email:email})
console.log(checkUser)
if (checkUser) return res.status(401).json({
    status:"401",
    message:"user is already registered"
})
const  user=await User.create({
    name,email,password:hashPassword
});

sendToken(user,201,res)

})

exports.getUser=async (req,res,next)=>{
    const data=User.find().then(message=>{
        res.send(message)

    })
    // res.json({data})
}




// exports.registerUser = catchAsyncError(async(req,res,next)=>{ 
  
//     const myCloud = await cloudinary.v2.uploader.upload(req.body.avatar,{
//       folder: "avatars",
//       width:150,
//       crop:"scale",
//     })
  
  
//       const{name,email,password} =req.body;
//       console.log(req.body)
//       // const user = await User.create(req.body    
//       // );
//       const user = await User.create({
         
//           name,email,password, 
//           avatar:{
//              public_id:myCloud.public_id,
//              url:myCloud.secure_url,
//           },
//       });
     
//       //for generating the token.
//       sendToken(user,201,res);
//   });


// 



// exports.addPartner=async(req,res,next)=>{
//     const Partner=await Partner.create(req.body)

// }

exports.getPartner=async(req,res,next)=>{
    try{
    const partner=await Partner.find()
    res.json({
        sucess:true,
        partner
    })
    }
    catch(err){
        res.json(err);
    }
    // const partner=Partner.find().then(partner=>{
    //     res.json({
    //         sucess:true,
    //         partner
    //     }).catch((err=>console.log(err)))
    // })
}


exports.createPartner=async (req,res,next)=>{
    const upload=await cloudinary.v2.uploader.upload(req.body.image,{
        folder:"image",
    
    })


    const {name,category} =req.body;
    console.log(req.body);
    const user= await Partner.create({
        name,category,images:{
            public_id:upload.public_id,
            url:upload.secure_url,
            
        
        

}
    })
    console.log(user);
}

