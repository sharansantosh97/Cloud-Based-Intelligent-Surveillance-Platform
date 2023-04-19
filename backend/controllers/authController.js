const User = require('../models/user');

const login = async (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    const records =  await User.find();

    if(records?.length ==0){
       // no user
       res.json({"status":401,"message":"no user present"});
    }else{
       if(records[0].password == password){
           req.session.isLoggedIn = true;
            req.session.userId = records[0].id;
           res.json({"status":200,"message":"authorized","isAdmin":records[0].isAdmin, "userId":records[0].id
                   ,name:records[0].firstName+" "+records[0].lastName});
       }else{
           res.json({"status":401,"message":"wrong password"});
       }
   }
}

const logout = (req,res,next)=>{
    req.session.destroy(err => {
        console.log(err);
        res.json({"status":200});
    });
}

const register = async (req,res,next)=>{
    await User.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password:req.body.password,
        email:req.body.email,
        isAdmin:req.body.isAdmin,
        status:"Onboarding",
        campusName:req.body.campusName,
        phoneNumber:req.body.phoneNumber
    });
    res.json({'status':200});
}

module.exports = {
    login,
    logout,
    register
}