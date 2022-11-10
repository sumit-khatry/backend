const mailer=require('nodemailer')



const sendEmail=async(options)=>{
 const transporter=mailer.createTransport({
    host:process.env.SMTP_HOST,
    PORT:process.env.SMTP_PORT,
    service:process.env.SMTP_SERVICE,
auth:{
    type:"login",
    user:process.env.SMTP_USER,
    pass:process.env.SMTP,
},

 });
 
//  const mailOptions={
//     from:process.env.SMTP_USER,
//     to:options.email,
//     subject:options.subject,
//     text:`name:${options.name} 
//     conatct Number:${options.number}. email address is :${options.mail}
    
//     message is: ${options.description}`,
    

//  }
const mailOptions={
    from:process.env.SMTP_USER,
    to:options.email,
    subject:options.subject,
    text:`from ${options.name} and email is ${options.description}`,
    

 }
 await transporter.sendMail(mailOptions);

}


module.exports=sendEmail;