const router=require('express').Router();

const {LoginUser,RegisterUser,createPartner,getPartner}=require('../controller/UserController')
// const {isAuthenticationUser,authorizeRoles}=require("../Middleware/authen")
const {contactMe}=require("../controller/contact")
// router.route("/admin/addPartner").get(isAuthenticationUser,authorizeRoles('admin'), addPartner)

router.route("/login").post(LoginUser)
router.route("/register").post(RegisterUser)

router.route("/addPartner").post(createPartner)
router.route("/sendEmail").post(contactMe)
router.route("/partner").get(getPartner);



module.exports=router;


