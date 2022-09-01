
const express=require('express')
const{User}=require('../model/user')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')

let loginController=(req,res)=>{
    console.log(req.body)

    const{email,password}=req.body
    
   // Adventure.findOne({ country: 'Croatia' }, function (err, adventure) {});
    User.findOne({email:email},function(err,user){
       console.log(user)
        console.log(email)
        console.log(password)

        if(user !== null){
            console.log(user.password_hash)

            bcrypt.compare(password,user.password_hash, function(err, result) {
           if(err)return res.status(404).json({err})
                // result == true
                res.status(400).json({
                    msg:"login success",
                    data:user
                })
            });
           
        }else{
            res.status(403).json({
                msg:"invalid"
            })
    
        }
    }) 


       
}
        
        

exports.loginController=loginController