
const{User}=require('../model/user')
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

//Generate the JWT token function
  
let adminController=(req,res)=>{

    console.log(req.body)
    saltRounds=15;
  let hash=  bcrypt.hashSync(req.body.password_hash, saltRounds, function(err, hash) {
        // Store hash in your password DB.
    });
    req.body.password_hash=hash;

    User.findOne({ email:req.body.email }, function (err, user) {
    if(user===null){ const user= new User (req.body);
        user.save().then((d)=>{
            console.log(user)
            
            var token = jwt.sign(req.body,'JWT_SECRET');    
            res.status(200).json({
    
                msg:'user Register',
                token:token
            })
        }).catch((e)=>{
            res.status(202).json({
    
                msg:"error"
            })
        })

    }else{
        res.status(403).json({
            msg:"user already Register"
        })
    }       

    });
   
    
 }

 exports.adminController=adminController