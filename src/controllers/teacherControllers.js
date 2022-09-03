const express=require('express')
const jwt=require('jsonwebtoken');


let teacherController=(req,res)=>{
    
    res.status(200).json({
        msg:"ok"
    })
}

exports.teacherController=teacherController
