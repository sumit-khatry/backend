const sendEmail=require('../Utils/emailController')


exports.contactMe=async(req,res,next)=>{
    const data=await req.body;
    const {subject,description,name,number,mail}=data;

    try{
        await sendEmail({
            email:["aashishmahato224@gmail.com","sumit.khatry@outlook.com"],
            description:description,
            subject:subject,
            name:name,
            // email:["aashishmahato224@gmail.com","sumit.khatry@outlook.com"],            
            // description:description,
            // subject:subject,
            // name:name,
            // number:number,
            // mail:mail,
        });
        console.log(req.body);
        res.status(200).json({
            sucess:true,
            message:`email is sent`
        })

    }
    catch(error){
        return next(error.message);
    }

}