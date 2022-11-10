const jwt = require("jsonwebtoken");
const User = require("../models/userModel.js");


//exporting
exports.isAuthenticationUser= ( async( req,res,next)=>{
    const {token} = req.cookies;
    
    if(!token){
        return next(res.json({message:"Please login to access this resources"}));
    }
    const decodedData = jwt.verify(token,process.env.JWT_SECRET);
    req.user = await User.findById(decodedData.id);
    next();

});
//importing function for admin role
exports.authorizeRoles =(...roles)=>{   //admin get access here
    return (req, res,next)=>{
        //checking whether the admin is user or not
        if(!roles.includes(req.user.role)){
            return next (
                res.json({
                    message:"You cannot acess"
        }) 
            );
        }
        next();
    };
}