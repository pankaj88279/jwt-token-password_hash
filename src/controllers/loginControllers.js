
const express=require('express')

const{User}=require('../model/user')

const bcrypt=require('bcrypt') 

const jwt=require('jsonwebtoken')

let loginController=(req,res)=>{
    console.log(req.body)
    
    const{email,password_hash}=req.body
    
   // Adventure.findOne({ country: 'Croatia' }, function (err, adventure) {});
    User.findOne({email:email},function(err,user){
      console.log(user)
    
        if(user !== null){
    console.log(user.password_hash)
            //bcrypt.compareSync(myPlaintextPassword, hash);
      if(bcrypt.compareSync(password_hash,user.password_hash)){

      //  var token = jwt.sign(req.body,'JWT_SECRET'); 
        res.status(400).json({
          msg:"login success",
          data:user,
         token:jwt.sign({user:user.email,role:user.role},process.env.JWT_SECRET, {
                expiresIn: "1d",
            })

         // token:token,
        //  expire:"1d",
        
           })
           
        }else{
            res.status(403).json({
                msg:"invalid"
            })
        }
           
        }else{
            res.status(403).json({
                msg:"invalid"
            })
       
        }
    }) 


       
}
        
exports.loginController=loginController