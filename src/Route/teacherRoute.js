const express=require('express');
var jwt = require('jsonwebtoken');
const { teacherController } = require('../controllers/teacherControllers');

const teacherRoute=express.Router();

let authMiddleWear=(req,res,next)=>{

        console.log(req.headers.authorization.split(" ")[1]);

        var token=req.headers.authorization.split(" ")[1];


        try{

          var decoded=jwt.verify(token,process.env.JWT_SECRET)
          console.log(decoded);
          //Lets create a new key and attact to the req object
          
        

                next();

        }catch (error) {
                res.status(403).json({
                       msg:"invalid token" 
                })
        }


       
}



teacherRoute.post('/teacher_create',authMiddleWear,teacherController)

module.exports={teacherRoute}