const express=require('express');
const { adminController } = require('../../controllers/admincontrolles');

 const adminRoute=express.Router();

 adminRoute.post('/api_student',adminController)
 
 exports.adminRoute=adminRoute